class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.integer :payer_id, null: false
      t.decimal :payer_owes, null: false
      t.decimal :total, null: false
      t.string :description, null: false
      t.date :date, null: false

      t.timestamps
    end

    add_index :expenses, :payer_id
  end
end
