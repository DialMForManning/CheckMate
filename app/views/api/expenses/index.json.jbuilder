json.array! @expenses do |expense|
  json.partial! 'expense', expense: expense
end
