# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string           not null
#  lname           :string
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#

require 'bcrypt'

class User < ApplicationRecord
  validates :email, :fname, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  attr_reader :password

  has_many :friendships,
    class_name: 'Friendship',
    primary_key: :id,
    foreign_key: :user_id

  has_many :friends,
    through: :friendships,
    source: :friend,
    class_name: 'User'

  def self.search(fname_query, lname_query, current_user)
    return [] if fname_query.length == 0 && lname_query.length == 0

    User.where("lower(fname) like ?", "%#{fname_query.downcase}%")
        .where("lower(lname) like ?", "%#{lname_query.downcase}%")
        .reject { |result| current_user.friends.include?(result) }
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email);
    return user if user && user.valid_password?(password)
    return nil
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
