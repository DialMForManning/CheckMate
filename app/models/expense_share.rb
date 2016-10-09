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
end
