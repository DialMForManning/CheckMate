class Api::FriendsController < ApplicationController
  def index
    @friendships = current_user.friendships
    render 'api/friends/index'
  end
end
