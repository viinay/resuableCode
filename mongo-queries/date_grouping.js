db.getCollection('activity_log').aggregate([
    {
        '$project':{'CreationDate':'$datetime'}
    },
    { "$group": { 
        "_id":{ 
            "$concat": [
                 { "$substr": [ { "$year": "$CreationDate" }, 0, 4 ] },
                 "-",
                 { "$cond": [
                     { "$gt": [ { "$month": "$CreationDate" }, 9 ] },
                     { "$substr": [ { "$month": "$CreationDate" }, 0, 2 ] },
                     { "$concat": [
                         "0",
                         { "$substr": [ { "$month": "$CreationDate" }, 0, 1 ] },
                     ]},
                 ]},
                 "-",
                 { "$cond": [
                     { "$gt": [ { "$dayOfMonth": "$CreationDate" }, 9 ] },
                     { "$substr": [ { "$dayOfMonth": "$CreationDate" }, 0, 2 ] },
                     { "$concat": [
                         "0",
                         { "$substr": [ { "$dayOfMonth": "$CreationDate" }, 0, 1 ] },
                     ]}
                 ]}
             ]
         },
         "cnt": { "$sum": 1 }
    }},
    { "$sort":{ "cnt" :-1 }}
])
