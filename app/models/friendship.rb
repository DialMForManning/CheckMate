# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  status     :string           not null
#

class Friendship < ApplicationRecord
  belongs_to :requester,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :requester_id

end
