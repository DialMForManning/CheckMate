json.partial! 'api/expenses/expense', expense: @expense

balance_change = 0

if @expense.payer_id == current_user.id
  share = @shares.find do |share|
    share.debtor_id == @friend_id.to_i
  end

  balance_change = share.amount
elsif @shares.map { |share| share.debtor_id }.include?(current_user.id)
  share = @shares.find do |share|
    share.debtor_id == current_user.id.to_i
  end

  balance_change = -share.amount
end

balance_change = -balance_change if @deletion

json.balance_change balance_change
