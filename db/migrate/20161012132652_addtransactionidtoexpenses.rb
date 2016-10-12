class Addtransactionidtoexpenses < ActiveRecord::Migration[5.0]
  def change
    add_column :expense_shares, :transaction_id, :integer
    add_index :expense_shares, :transaction_id
  end
end
