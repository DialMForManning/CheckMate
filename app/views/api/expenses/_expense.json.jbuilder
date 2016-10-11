json.extract! expense, :id, :payer_id, :total, :date, :description, :payer_owes

json.payerFname expense.payer.fname


shares = {}
expense.expense_shares.each do |share|
  shares[share.debtor_id] = {
    debtorFname: share.debtor.fname,
    payerLeant: share.amount,
    settled: share.settled
  }
end

json.shares shares
