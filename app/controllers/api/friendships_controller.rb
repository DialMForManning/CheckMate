class Api::FriendshipsController < ApplicationController
  def create
    pending = Friendship.new({
      user_id: current_user.id,
      friend_id: friendship_params[:friend_id],
      status: 'pending'
      })

    requesting = Friendship.new({
      user_id: friendship_params[:friend_id],
      friend_id: current_user.id,
      status: 'requested'
      })

      if pending.valid? && requesting.valid?
        pending.save
        requesting.save
        render json: ["requested"]
      else
        render json: ["invalid friend request"], status: 422
      end
  end

  def update
    pending = Friendship.find_by({
      user_id: friendship_params[:friend_id],
      friend_id: current_user.id
      })

    accepting = Friendship.find_by({
      user_id: current_user.id,
      friend_id: friendship_params[:friend_id]
      })

    if pending && accepting
      Friendship.accept(pending, accepting)
      render json: ["accepted"]
    else
      render json: ["invalid accept request"], status: 422
    end

  end

  def destroy
    to_delete = Friendship.find_by({
      user_id: current_user.id,
      friend_id: friendship_params[:friend_id]
      })

    if to_delete
      Friendship.destroy(to_delete)
      render json: ["deleted"]
    else
      render json: ["invalid delete request"], status: 422
    end
  end

  private
  def friendship_params
    params.require(:friendship).permit(:friend_id)
  end
end
