# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161012132652) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "expense_shares", force: :cascade do |t|
    t.integer  "expense_id",                     null: false
    t.integer  "debtor_id",                      null: false
    t.decimal  "amount",                         null: false
    t.boolean  "settled",        default: false, null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "transaction_id"
    t.index ["expense_id"], name: "index_expense_shares_on_expense_id", using: :btree
    t.index ["transaction_id"], name: "index_expense_shares_on_transaction_id", using: :btree
  end

  create_table "expenses", force: :cascade do |t|
    t.integer  "payer_id",    null: false
    t.decimal  "payer_owes",  null: false
    t.decimal  "total",       null: false
    t.string   "description", null: false
    t.date     "date",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["payer_id"], name: "index_expenses_on_payer_id", using: :btree
  end

  create_table "friendships", force: :cascade do |t|
    t.integer  "friend_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id",    null: false
    t.string   "status",     null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id", using: :btree
    t.index ["user_id"], name: "index_friendships_on_user_id", using: :btree
  end

  create_table "transactions", force: :cascade do |t|
    t.integer  "debtor_id",   null: false
    t.integer  "creditor_id", null: false
    t.decimal  "amount",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["creditor_id"], name: "index_transactions_on_creditor_id", using: :btree
    t.index ["debtor_id"], name: "index_transactions_on_debtor_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "lname"
    t.string   "password_digest", null: false
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email",           null: false
  end

end
