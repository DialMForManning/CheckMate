json.extract! user, :id, :username, :fname
json.(user, :lname) if user.lname
