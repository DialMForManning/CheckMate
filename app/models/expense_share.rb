# == Schema Information
#
# Table name: expense_shares
#
#  id         :integer          not null, primary key
#  expense_id :integer          not null
#  debtor_id  :integer          not null
#  amount     :decimal(, )      not null
#  settled    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ExpenseShare < ApplicationRecord
  validates :amount, format: { with: /\A\d+(?:\.\d{0,2})?\z/,
    message: "needs valid money format (ex: 5, 5.1, or 5.10)" }

  belongs_to :expense,
    class_name: 'Expense',
    primary_key: :id,
    foreign_key: :expense_id

  belongs_to :debtor,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :debtor_id

end
