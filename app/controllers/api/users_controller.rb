class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    debts = current_user.debts(params[:id])
    loans = current_user.loans(params[:id])

    @expenses = loans + debts

    @balance = current_user.balance(params[:id])

    @transactions = Transaction.where("creditor_id = #{current_user.id}
      OR debtor_id = #{current_user.id}")
      .where("creditor_id = #{params[:id]}
        OR debtor_id = #{params[:id]}")

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

  def balances
    balances = current_user.balances

    render json: balances
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end
end
