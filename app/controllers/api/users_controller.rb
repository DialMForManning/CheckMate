class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    
    debts = current_user.debts(params[:id])
    loans = current_user.loans(params[:id])
    loans ||= []
    debts ||= []

    @expenses = loans + debts

    @balance = calculate_blance(loans, debts)

    render 'api/users/friend_expenses'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.search(
      params[:fname_query],
      params[:lname_query],
      current_user
    )
    render 'api/users/index'
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end

  def calculate_blance(loans, debts)
    loan_amounts = loans.map do |loan|
      friend_share = loan.expense_shares.find do |share|
        share.debtor_id == params[:id].to_i
      end

      friend_share.amount
    end

    debt_amounts = debts.map do |loan|
      friend_share = loan.expense_shares.find do |share|
        share.debtor_id == current_user.id.to_i
      end

      -friend_share.amount
    end

    loan_amounts.concat(debt_amounts).inject(&:+)
  end
end
