collection.aggregate([
    {
        '$match': {
            't': {'$in':['product_view','page_load','product_click']}
        }
    },
    {
        '$group': {
            '_id': {'postId':'$aId','type':'$t'},
            'total_count': {
                '$sum': '$total_count'
            }
        }
    },
    {
        '$project':{
            'postId':'$_id.postId',
            'type':'$_id.type',
            'total_count':1,
            'total_page_load':{ '$cond': [{'$eq':['$_id.type','page_load']},'$total_count', 0 ] },
            'total_product_view':{ '$cond': [{'$eq':['$_id.type','product_view']},'$total_count', 0 ] },
            'total_product_click':{ '$cond': [{'$eq':['$_id.type','product_click']},'$total_count',0 ] }
        }
    },
    {
        '$group':{
            '_id':'$postId',
            'total_count': {
                '$sum': '$total_count'
            },
            'total_page_load': {
                '$sum': '$total_page_load'
            },
            'total_product_view': {
                '$sum': '$total_product_view'
            },
            'total_product_click': {
                '$sum': '$total_product_click'
            }
        }
    },
    {
        '$sort':{['total_'+options.sortBy]:-1}
    },
    {
        '$limit':options.limit
    }
])
