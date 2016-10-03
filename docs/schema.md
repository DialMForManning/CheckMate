# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## friendships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
requester_id    | integer   | not null, indexed, foreign key
friend_id       | integer   | not null, indexed, foreign key
accepted        | boolean   | not null, default: false

## expenses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, indexed, foreign key
payer_id        | integer   | not null, indexed, foreign key
ower_id         | integer   | not null, indexed, foreign key
owed_amt        | money     | not null
total           | money     | not null
description     | string    | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, indexed, foreign key
expense_id      | integer   | not null, indexed, foreign key
body            | text      | not null
