json.user do
  json.partial! 'api/users/user', user: @user
end

json.balance @balance

json.expenses do
  @expenses.each do |expense|
    json.set! expense.id do
      json.partial! 'api/expenses/expense', expense: expense
    end
  end
end
