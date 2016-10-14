json.partial! 'api/comments/comment', comment: @comment
json.author do
  json.fname current_user.fname
end
