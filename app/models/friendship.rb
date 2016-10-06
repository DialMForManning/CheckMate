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

class Friendship < ApplicationRecord
  belongs_to :requester,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :requester_id

end
