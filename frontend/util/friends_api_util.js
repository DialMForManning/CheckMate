export const fetchAllFriends = (success, error) => {
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

export const searchUsers = (query, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/users/search',
    data: { fname_query: query.fname_query, lname_query: query.lname_query },
    success,
    error
  });
};
