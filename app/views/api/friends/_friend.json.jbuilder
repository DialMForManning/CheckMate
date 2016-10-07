json.extract! friendship, :status

user = User.find(friendship.friend_id)

json.id user.id
json.fname user.fname
json.lname user.lname if user.lname
