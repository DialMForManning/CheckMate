json.extract! transaction, :amount, :creditor_id, :debtor_id

json.date transaction.created_at.to_s.split(" ")[0]
