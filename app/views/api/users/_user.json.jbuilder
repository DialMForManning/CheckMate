json.extract! user, :id, :email, :fname
json.(user, :lname) if user.lname
