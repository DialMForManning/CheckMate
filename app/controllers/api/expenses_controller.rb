class Api::ExpensesController < ApplicationController
  def create
    expense = Expense.new(expense_params)

    if expense.save
      shares = new_shares
      if shares && shares.all? { |share| share.valid? }
        shares.each { |share| share.save }
        render 'api/expenses/show'
      else
        Expense.last.destroy
        render_expense_errors(expense)
      end

    else
      render_expense_errors(expense)
    end
  end

  def update
    expense = Expense.find(params[:id])

    if Expense.new(expense_params).valid?
      test_shares = new_shares(expense)

      if test_shares && test_shares.all? { |share| share.valid? }
        expense.update(expense_params)
        expense.expense_shares.destroy_all
        test_shares.each { |share| share.save }

        render 'api/expenses/show'
      else
        render_expense_errors(expense)
      end
    else
      render_expense_errors(expense)
    end

  end

  def index
    debts = Expense.find_by(payer_id: params[:id])
    loans = Expense.joins(:expense_shares).where("debtor_id = #{params[:id]}")

    loans ||= []
    debts ||= []

    @expenses = loans + debts

    render 'api/expenses/index'
  end

  def destroy
    @expense = Expense.find(params[:id])

    if @expense
      @expense.destroy
      render 'api/expenses/show'
    else
      render json: ["no such expense"], status: 422
    end
  end

  private
  def expense_params
    params.require(:expense).permit(:description, :date, :payer_id, :payer_owes, :total)
  end

  def shares_hash
    params.require(:shares).permit!().to_h.to_hash
  end

  def new_shares(expense = nil)
    shares_hash.map do |user_id, amount|
      ExpenseShare.new({
        expense_id: expense ? expense.id : Expense.last.id,
        debtor_id: user_id.to_i,
        amount: amount.to_f
        })
    end
  end

  def render_expense_errors(expense)
    render json: expense.errors.full_messages, status: 422
  end
end
