comments = Hash.new { |comment, expense_id| comments[expense_id] = [] }

@comments.each do |comment|
  comments[comment.expense_id].push(comment)
end

json.comments comments
