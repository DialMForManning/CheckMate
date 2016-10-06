class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.integer :requester_id, null: false
      t.integer :friend_id, null: false
      t.boolean :accepted, null: false, default: true

      t.timestamps
    end

    add_index :friendships, :requester_id
    add_index :friendships, :friend_id
  end
end
