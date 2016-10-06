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

#Seeded Friendships
