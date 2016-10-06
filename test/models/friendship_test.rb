# == Schema Information
#
# Table name: friendships
#
#  id           :integer          not null, primary key
#  requester_id :integer          not null
#  friend_id    :integer          not null
#  accepted     :boolean          default(TRUE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
