@settled_expenses.each do |expense|
  json.set! expense.id do
    json.partial! 'api/expenses/expense', expense: expense
  end
end
