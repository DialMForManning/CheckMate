# == Schema Information
#
# Table name: expenses
#
#  id          :integer          not null, primary key
#  payer_id    :integer          not null
#  payer_owes  :decimal(, )      not null
#  total       :decimal(, )      not null
#  description :string           not null
#  date        :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Expense < ApplicationRecord
  validates :total, :payer_owes,
    format: { with: /\A\d+(?:\.\d{0,2})?\z/,
    message: "Use valid money format (ex: 5, 5.1, or 5.10)" }
  validate :owes_less_than_total

  belongs_to :payer,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :payer_id

  has_many :expense_shares,
    class_name: 'ExpenseShare',
    primary_key: :id,
    foreign_key: :expense_id,
    dependent: :destroy

  has_many :debtors,
  class_name: 'User',
    through: :expense_shares,
    source: :debtor


  has_many :comments,
    class_name: 'Comment',
    primary_key: :id,
    foreign_key: :expense_id

  def owes_less_than_total
    unless payer_owes.to_f < total.to_f
      errors.add(:payer_owes, "Payer must owe less than expense total")
    end
  end
end
