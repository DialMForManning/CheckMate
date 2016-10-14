json.partial! 'api/comments/comment', comment: @comment
json.author do
  json.fname current_user.fname
  json.id current_user.id
end
