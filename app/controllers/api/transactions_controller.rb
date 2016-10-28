class Api::TransactionsController < ApplicationController
  def create
    expense_shares = ExpenseShare.where(settled: false)
      .where("debtor_id = #{current_user.id} OR debtor_id = #{params[:id]}")

    balance = current_user.balance(params[:id])

    if (balance > 0)
      debtor_id = params[:id].to_i
      creditor_id = current_user.id
    elsif (balance < 0)
      debtor_id = current_user.id
      creditor_id = params[:id].to_i
    end

    if expense_shares.length > 0 && debtor_id && creditor_id
      @transaction = Transaction.new(debtor_id: debtor_id,
        creditor_id: creditor_id,
        amount: balance.abs)

      if @transaction.save
        expense_shares.each do |share|
          share.update(settled: true, transaction_id: @transaction.id)
        end
        render 'api/transactions/show'
      else
        render json: ["invalid transaction"], status: 422
      end
    else
      render json: ["invalid transaction"], status: 422
    end
  end

  def destroy
    @transaction = Transaction.find(params[:id])

    if @transaction
      @transaction.expense_shares.each do |share|
        share.update(settled: false)
      end
      @transaction.destroy
      render 'api/transactions/show'
    else
      render json: ["no such transaction"], status: 422
    end
  end
end
