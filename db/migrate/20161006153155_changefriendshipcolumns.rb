class Changefriendshipcolumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :friendships, :requester_id
    remove_column :friendships, :accepted

    add_column :friendships, :user_id, :integer, null: false
    add_column :friendships, :status, :string, null: false

    add_index :friendships, :user_id
  end
end
