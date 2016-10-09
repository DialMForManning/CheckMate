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

require 'test_helper'

class ExpenseShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
