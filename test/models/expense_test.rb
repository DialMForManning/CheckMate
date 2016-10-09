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

require 'test_helper'

class ExpenseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
