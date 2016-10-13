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

  has_many :expenses,
    class_name: 'Expense',
    primary_key: :id,
    foreign_key: :payer_id

  has_many :expense_shares,
    class_name: 'ExpenseShare',
    primary_key: :id,
    foreign_key: :debtor_id

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

  def debts(friend_id)
    Expense.joins(:expense_shares)
      .where("debtor_id = #{self.id} AND payer_id = #{friend_id} AND settled = false")
  end

  def loans(friend_id)
    Expense.joins(:expense_shares)
      .where("debtor_id = #{friend_id} AND payer_id = #{self.id} AND settled = false")
  end

  def balance(friend_id)
    loan_amounts = loans(friend_id).map do |loan|
      friend_share = loan.expense_shares.find do |share|
        share.debtor_id == friend_id.to_i
      end

      friend_share.amount
    end

    debt_amounts = debts(friend_id).map do |loan|
      friend_share = loan.expense_shares.find do |share|
        share.debtor_id == self.id.to_i
      end

      -friend_share.amount
    end

    loan_amounts.concat(debt_amounts).inject(&:+)
  end

  def balances
    balances = Hash.new { |balance, friend_id| balances[friend_id] = 0 }

    all_loans.each do |loan|
      balances[loan.debtor_id] += loan.amount
    end

    all_debts.each do |debt|
      balances[debt.creditor_id] -= debt.amount
    end

    balances
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

  def all_debts
    ExpenseShare.select("expense_shares.*, expenses.payer_id AS creditor_id")
                .joins(:expense)
                .where("debtor_id = #{self.id} AND settled = false")
  end

  def all_loans
    ExpenseShare.joins(:expense).where("payer_id = #{self.id} AND settled = false")
  end
end
