json.extract! expense, :payer_id, :total, :date

json.payerFname expense.payer.fname


shares = {}
expense.expense_shares.each do |share|
  shares[share.debtor_id] = {
    debtorFname: share.debtor.fname,
    payerLeant: share.amount,
  }
end

json.shares shares
