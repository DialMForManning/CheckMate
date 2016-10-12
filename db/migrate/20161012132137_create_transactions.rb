class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.integer :debtor_id, null: false
      t.integer :creditor_id, null: false
      t.decimal :amount, null: false

      t.timestamps
    end

    add_index :transactions, :debtor_id
    add_index :transactions, :creditor_id
  end
end
