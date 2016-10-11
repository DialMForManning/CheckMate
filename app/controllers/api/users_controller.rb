class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render 'api/users/show'
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
end
