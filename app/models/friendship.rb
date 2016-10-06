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
  validates :user_id, :friend_id, :status, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :friend,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :friend_id

end
