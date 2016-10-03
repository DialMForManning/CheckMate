```js
{
  session: {
    currentUser: {
      id: 1,
      errors: []
    }
  },

  search: {
    query: ""
  },

  friends: [{
    user_id: 6,
    fname: "Charlie",
    lname: "Bucket",
  }],

  expenses: {
    friend_id: '6',

    expense_items: [{
      date: '2016-4-18',
      description: 'Everlasting Gobstoppers',
      user_paid_id: '1',
      user_owes_id: '6',
      total: '17',
      user_paid_owed: '17',
      comments: [
        {
          author_id: '1',
          body: 'Still not dissolving!'
        }
      ]
    }]
  }

  debt_detail: {
    user_owes: '6.51'
  }
}
```
