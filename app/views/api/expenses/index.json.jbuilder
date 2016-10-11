json.friendName @friend_name

@expenses.each do |expense|
  json.set! expense.id do
    json.partial! 'expense', expense: expense
  end
end
