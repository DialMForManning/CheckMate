json.array! @friendships do |friendship|
  json.partial! 'friend', friendship: friendship
end
