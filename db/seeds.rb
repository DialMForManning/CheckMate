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
User.create(email: 'amazhang', password: 'amazhang', fname: 'Anthony', lname: 'Zhang')
User.create(email: 'rccola', password: 'rccola', fname: 'Ryan', lname: 'Caloras')
User.create(email: 'kmurphy', password: 'kmurphy', fname: 'Katie', lname: 'Murphy')
User.create(email: 'bmanning', password: 'bmanning', fname: 'Brian', lname: 'Manning')
User.create(email: 'kevinli', password: 'kevinli', fname: 'Kevin', lname: 'Li')
User.create(email: 'sammyjo', password: 'sammyjo', fname: 'Samuel', lname: 'Jo')
User.create(email: 'albronca', password: 'albronca', fname: 'Alexander', lname: 'Bronca')

#Seeded friendships
willy_id = User.find_by(fname: 'Willy').id
charlie_id = User.find_by(fname: 'Charlie').id
grandpa_id = User.find_by(fname: 'Grandpa').id
violet_id = User.find_by(fname: 'Violet').id
augustus_id = User.find_by(fname: 'Augustus').id
mike_id = User.find_by(fname: 'Mike').id
veruca_id = User.find_by(fname: 'Veruca').id
anthony_id = User.find_by(fname: 'Anthony').id
ryan_id = User.find_by(fname: 'Ryan').id
katie_id = User.find_by(fname: 'Katie').id
brian_id = User.find_by(fname: 'Brian').id
alex_id = User.find_by(fname: 'Alexander').id
sam_id = User.find_by(fname: 'Samuel').id


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

#sam to alex, accepted
Friendship.create(user_id: sam_id, friend_id: alex_id, status: 'accepted')
Friendship.create(user_id: alex_id, friend_id: sam_id, status: 'accepted')

#katie to brian, accepted
Friendship.create(user_id: brian_id, friend_id: katie_id, status: 'accepted')
Friendship.create(user_id: katie_id, friend_id: brian_id, status: 'accepted')

#sam to brian, requested
Friendship.create(user_id: sam_id, friend_id: brian_id, status: 'requested')
Friendship.create(user_id: brian_id, friend_id: sam_id, status: 'pending')

#alex to brian, requested
Friendship.create(user_id: alex_id, friend_id: brian_id, status: 'requested')
Friendship.create(user_id: brian_id, friend_id: alex_id, status: 'pending')

#anthony to brian, requested
Friendship.create(user_id: anthony_id, friend_id: brian_id, status: 'requested')
Friendship.create(user_id: brian_id, friend_id: anthony_id, status: 'pending')

#ryan to brian, requested
Friendship.create(user_id: ryan_id, friend_id: brian_id, status: 'requested')
Friendship.create(user_id: brian_id, friend_id: ryan_id, status: 'pending')

#ryan to anthony, accepted
Friendship.create(user_id: anthony_id, friend_id: ryan_id, status: 'accepted')
Friendship.create(user_id: ryan_id, friend_id: anthony_id, status: 'accepted')

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
Comment.create(expense_id: Expense.last.id, author_id: charlie_id, body: "Still hasn't shrunk!")


Expense.create(payer_id: willy_id, payer_owes: 8, total: 40,
description: 'Schnozberries', date: '2016-08-13')
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
  description: 'Oompa Loompa Food', date: '2016-10-15')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: willy_id,
  amount: 50)
Comment.create(expense_id: Expense.last.id, author_id: willy_id, body: "This stuff is getting expensive . . .")

Expense.create(payer_id: grandpa_id, payer_owes: 5, total: 40,
  description: 'Wonka Bars', date: '2016-3-15')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: willy_id,
  amount: 35)
Comment.create(expense_id: Expense.last.id, author_id: grandpa_id, body: "I've gotta admit, the gold did not make the chocolate taste terrible.")

Expense.create(payer_id: grandpa_id, payer_owes: 10, total: 20,
description: 'Toothpaste', date: '2016-3-15')
ExpenseShare.create(expense_id: Expense.last.id, debtor_id: willy_id,
amount: 10)
Comment.create(expense_id: Expense.last.id, author_id: grandpa_id, body: "We needed a lot . . .")
