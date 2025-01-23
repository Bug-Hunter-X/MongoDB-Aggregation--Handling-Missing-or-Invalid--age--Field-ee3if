```javascript
db.users.aggregate([
  {
    $match: { age: { $exists: true, $type: 'number' } } // Filters to only include documents with valid numeric 'age' values
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  }
])
```