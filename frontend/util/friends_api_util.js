export const fetchAllFriends = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/friends',
    success,
    error
  });
};

export const requestFriend = (friend, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: { friend_id: friend.id },
    success,
    error
  });
};

export const approveFriend = (friend, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: '/api/friendships',
    data: { friend_id: friend.id },
    success,
    error
  });
};

export const denyFriend = (friend, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/friendships',
    data: { friend_id: friend.id },
    success,
    error
  });
};
