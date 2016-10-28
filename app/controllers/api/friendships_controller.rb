class Api::FriendshipsController < ApplicationController
  def create
    pending = Friendship.new({
      user_id: current_user.id,
      friend_id: params[:friend_id],
      status: 'pending'
      })

    requesting = Friendship.new({
      user_id: params[:friend_id],
      friend_id: current_user.id,
      status: 'requested'
      })

      @friendship = pending

      if pending.valid? && requesting.valid?
        pending.save
        requesting.save
        render 'api/friends/show'
      else
        render json: ["invalid friend request"], status: 422
      end
  end

  def update
    pending = Friendship.find_by({
      user_id: params[:id],
      friend_id: current_user.id
      })

    accepting = Friendship.find_by({
      user_id: current_user.id,
      friend_id: params[:id]
      })

    @friendship = accepting

    if pending && accepting
      Friendship.accept(pending, accepting)
      pending.save
      accepting.save
      render 'api/friends/show'
    else
      render json: ["invalid accept request"], status: 422
    end

  end

  def destroy
    to_delete_1 = Friendship.find_by({
      user_id: current_user.id,
      friend_id: params[:id]
      })

    to_delete_2 = Friendship.find_by({
      user_id: params[:id],
      friend_id: current_user.id
      })

    @friendship = to_delete_1

    if to_delete_1 && to_delete_2
      Friendship.destroy(to_delete_1)
      Friendship.destroy(to_delete_2)
      render 'api/friends/show'
    else
      render json: ["invalid delete request"], status: 422
    end
  end
end
