@transactions.each do |transaction|
  json.set! transaction.id do
    json.partial! 'api/transactions/transaction', transaction: transaction
  end
end
