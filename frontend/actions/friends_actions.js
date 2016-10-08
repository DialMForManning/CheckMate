export const REQUEST_FRIEND = "REQUEST_FRIENDSHIP";
export const APPROVE_FRIEND= "APPROVE_FRIENDSHIP";
export const DENY_FRIEND = "DENY_FRIENDSHIP";
export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_SINGLE_FRIEND = "RECEIVE_SINGLE_FRIEND";
export const RECEIVE_APPROVED_FRIEND = "RECEIVE_APPROVED_FRIEND";
export const RECEIVE_DENIED_FRIEND = "RECEIVE_DENIED_FRIEND";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const SEARCH_USERS = "SEARCH_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const requestFriend = (friend) => ({
  type: REQUEST_FRIEND,
  friend
});

export const approveFriend = (friend) => ({
  type: APPROVE_FRIEND,
  friend
});

export const denyFriend= (friend) => ({
  type: DENY_FRIEND,
  friend
});

export const fetchFriends = () => ({
  type: FETCH_FRIENDS
});

export const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
});

export const receiveSingleFriend = (friend) => ({
  type: RECEIVE_SINGLE_FRIEND,
  friend
});

export const receiveApprovedFriend = (friend) => ({
  type: RECEIVE_APPROVED_FRIEND,
  friend
});

export const receiveDeniedFriend = (friend) => ({
  type: RECEIVE_DENIED_FRIEND,
  friend
});

export const searchUsers = (query) => ({
  type: SEARCH_USERS,
  query
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
