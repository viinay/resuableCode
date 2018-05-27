db.getCollection('submissions').aggregate([
    {
        "$match":{ user_id:"ObjectId", resource_name:"car"}
    },
    {
        "$addFields": {
            "y": {
                "$year": "$created_at"
            },
            "m": {
                "$month": "$created_at"
            },
            "d": {
                "$dayOfMonth": "$created_at"
            }
        }
    },
    {
        "$group":{
            "_id":{"m":"$m","d":"$d","y":"$y"},
            "drive_count":{"$sum":1}
        }
    },
     {
        "$sort": {
             "_id.year": 1,
             "_id.month": 1,
             "_id.day": 1
         }
     }
])
