class CreateExpenseShares < ActiveRecord::Migration[5.0]
  def change
    create_table :expense_shares do |t|
      t.integer :expense_id, null: false
      t.integer :debtor_id, null: false
      t.decimal :amount, null: false
      t.boolean :settled, null: false, default: false
      t.timestamps
    end

    add_index :expense_shares, :expense_id
  end
end
