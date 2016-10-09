# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
fname           | string    | not null
lname           | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## friendships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, foreign key
friend_id       | integer   | not null, indexed, foreign key
status          | string    | not null

## expenses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
payer_id        | integer   | not null, indexed, foreign key
payer_owes      | decimal   | not null
total           | decimal   | not null
description     | string    | not null

## expense_shares
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
expense_id      | integer   | not null, indexed, foreign key
debtor_id       | integer   | not null, indexed, foreign key
amount          | decimal   | not null
settled         | decimal   | not null, default: false

## transactions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, indexed, foreign key
debtor_id       | integer   | not null, indexed, foreign key
receiver_id     | integer   | not null, indexed, foreign key
amount          | decimal   | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, indexed, foreign key
expense_id      | integer   | not null, indexed, foreign key
body            | text      | not null
