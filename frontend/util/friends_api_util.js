export const fetchFriends = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/friends',
    success,
    error
  });
};

export const requestFriendship = (friend, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: { friend_id: friend.id },
    success,
    error
  });
};

export const approveFriendship = (friend, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: '/api/friendships',
    data: { friend_id: friend.id },
    success,
    error
  });
};

export const denyFriendship = (friend, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/friendships',
    data: { friend_id: friend.id },
    success,
    error
  });
};
