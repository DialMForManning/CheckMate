# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
User.destroy_all

#Demo Account
User.create(email: 'demo', password: 'demoing', fname: 'Demo', lname: 'Demington')

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


#willy to charlie, accepted
Friendship.create(user_id: willy_id, friend_id: charlie_id, status: 'accepted')
Friendship.create(user_id: charlie_id, friend_id: willy_id, status: 'accepted')

#willy to grandpa, accepted
Friendship.create(user_id: willy_id, friend_id: grandpa_id, status: 'accepted')
Friendship.create(user_id: grandpa_id, friend_id: willy_id, status: 'accepted')

#willy to violet, pending
Friendship.create(user_id: willy_id, friend_id: violet_id, status: 'pending')
Friendship.create(user_id: violet_id, friend_id: willy_id, status: 'requested')

#willy to mike, pending
Friendship.create(user_id: willy_id, friend_id: mike_id, status: 'pending')
Friendship.create(user_id: mike_id, friend_id: willy_id, status: 'requested')

#willy to augustus, requested
Friendship.create(user_id: willy_id, friend_id: augustus_id, status: 'requested')
Friendship.create(user_id: augustus_id, friend_id: willy_id, status: 'pending')

#willy to veruca, requested
Friendship.create(user_id: willy_id, friend_id: veruca_id, status: 'requested')
Friendship.create(user_id: veruca_id, friend_id: willy_id, status: 'pending')
