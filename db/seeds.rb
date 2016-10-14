# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
User.destroy_all

#Seeded Users
User.create(email: 'willyw', password: 'willyw', fname: 'Willy', lname: 'Wonka')
User.create(email: 'charlie', password: 'charlie', fname: 'Charlie', lname: 'Bucket')
User.create(email: 'grandpa', password: 'grandpa', fname: 'Grandpa', lname: 'Joe')
User.create(email: 'augustus', password: 'augustus', fname: 'Augustus', lname: 'Gloop')
User.create(email: 'miketv', password: 'miketv', fname: 'Mike', lname: 'Teavee')
User.create(email: 'veruca', password: 'veruca', fname: 'Veruca', lname: 'Salt')
User.create(email: 'violet', password: 'violet', fname: 'Violet', lname: 'Beauregarde')

#Seeded friendships
Friendship.destroy_all
willy_id = User.find_by(fname: 'Willy').id
charlie_id = User.find_by(fname: 'Charlie').id
grandpa_id = User.find_by(fname: 'Grandpa').id
violet_id = User.find_by(fname: 'Violet').id
augustus_id = User.find_by(fname: 'Augustus').id
mike_id = User.find_by(fname: 'Mike').id
veruca_id = User.find_by(fname: 'Veruca').id

Friendship.destroy_all
#willy to charlie, accepted
Friendship.create(user_id: willy_id, friend_id: charlie_id, status: 'accepted')
Friendship.create(user_id: charlie_id, friend_id: willy_id, status: 'accepted')

#willy to grandpa, accepted
Friendship.create(user_id: willy_id, friend_id: grandpa_id, status: 'accepted')
Friendship.create(user_id: grandpa_id, friend_id: willy_id, status: 'accepted')

#willy to violet, pending
Friendship.create(user_id: willy_id, friend_id: violet_id, status: 'accepted')
Friendship.create(user_id: violet_id, friend_id: willy_id, status: 'accepted')

#willy to mike, pending
Friendship.create(user_id: willy_id, friend_id: mike_id, status: 'pending')
Friendship.create(user_id: mike_id, friend_id: willy_id, status: 'requested')

#willy to augustus, requested
Friendship.create(user_id: willy_id, friend_id: augustus_id, status: 'requested')
Friendship.create(user_id: augustus_id, friend_id: willy_id, status: 'pending')

#willy to veruca, requested
Friendship.create(user_id: willy_id, friend_id: veruca_id, status: 'requested')
Friendship.create(user_id: veruca_id, friend_id: willy_id, status: 'pending')

Expense.destroy_all
Transaction.destroy_all
#settled expenses and a transaction
Transaction.create(creditor_id: willy_id, debtor_id: charlie_id, amount: 34)
Expense.create(payer_id: willy_id, payer_owes: 6, total: 40,
description: 'Schnozberries', date: '2016-02-19')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: charlie_id,
amount: 34, settled: true, transaction_id: Transaction.last.id)

Expense.create(payer_id: willy_id, payer_owes: 10, total: 50,
description: 'Gobstoppers', date: '2016-02-19')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: charlie_id,
amount: 20)
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: grandpa_id,
amount: 20)


Expense.create(payer_id: willy_id, payer_owes: 8, total: 40,
description: 'Schnozberries', date: '2016-02-19')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: violet_id,
amount: 30)
Comment.create(expense_id: Expense.last.id, author_id: willy_id, body: "Does this count as cannibalism?")
Comment.create(expense_id: Expense.last.id, author_id: violet_id, body: "Can it Wonka!")
#expense seeds
# Expense.create(payer_id: willy_id, payer_owes: 10, total: 50,
#   description: 'Gobstoppers', date: '2016-06-05')
# ExpenseShare.create(expense_id: Expense.last.id, debtor_id: violet_id,
#   amount: 10)
# ExpenseShare.create(expense_id: Expense.last.id, debtor_id: augustus_id,
#   amount: 10)
# ExpenseShare.create(expense_id: Expense.last.id, debtor_id: mike_id,
#   amount: 10)
# ExpenseShare.create(expense_id: Expense.last.id, debtor_id: veruca_id,
#   amount: 10)

Expense.create(payer_id: willy_id, payer_owes: 11, total: 35,
  description: 'Fizzy Lifting Drinks', date: '2016-08-13')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: charlie_id,
  amount: 24)
fizzy_id = Expense.last.id;
Comment.create(expense_id: fizzy_id, author_id: willy_id, body: "Did you clean my fan yet?")
Comment.create(expense_id: fizzy_id, author_id: charlie_id, body: "I'll get to it...")
Comment.create(expense_id: fizzy_id, author_id: willy_id, body: "I expected more from the person taking over my chocolate factory")



Expense.create(payer_id: charlie_id, payer_owes: 10, total: 60,
  description: 'Oompa Loompa Food', date: '2016-10-17')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: willy_id,
  amount: 60)
