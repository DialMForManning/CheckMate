const REQUEST_FRIENDSHIP = "REQUEST_FRIENDSHIP";
const APPROVE_FRIENDSHIP = "APPROVE_FRIENDSHIP";
const DENY_FRIENDSHIP = "DENY_FRIENDSHIP";
const FETCH_FRIENDS = "FETCH_FRIENDS";
const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
const RECEIVE_SINGLE_FRIEND = "RECEIVE_SINGLE_FRIEND";

const requestFriendship = (friend) => ({
  type: REQUEST_FRIENDSHIP,
  friend
});

const approveFriendship = (friend) => ({
  type: APPROVE_FRIENDSHIP,
  friend

});
const denyFriendship = (friend) => ({
  type: DENY_FRIENDSHIP,
  friend
});

const fetchFriends = () => ({
  type: FETCH_FRIENDS
});

const receiveFriends = (friends) => ({
  type: RECEIVE_FRIENDS,
  friends
});

const receiveSingleFriend = (friend) => ({
  type: RECEIVE_SINGLE_FRIEND,
  friend
});
