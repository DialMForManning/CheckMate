class Api::UsersController < ApplicationController
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
      params[:lname_query]
    )
    render 'api/users/index'
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname)
  end
end
