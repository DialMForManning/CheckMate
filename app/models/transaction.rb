# == Schema Information
#
# Table name: transactions
#
#  id          :integer          not null, primary key
#  debtor_id   :integer          not null
#  creditor_id :integer          not null
#  amount      :decimal(, )      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Transaction < ApplicationRecord
  validates :debtor_id, :creditor_id, :amount, presence: true

  has_many :expense_shares,
    class_name: 'ExpenseShare',
    primary_key: :id,
    foreign_key: :transaction_id

  belongs_to :debtor,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :debtor_id

  belongs_to :creditor,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :creditor_id
end
