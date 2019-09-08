# [{
#     link:'https://app.wipster.io/Review/CcTFHQDfsKh-uAC0u-yCifa2RCua-gJbonaHrlGh--Ao-lVyxQ',
#     title:'Beauty Favorites/What to Buy: Pretty Smart',
#     postId:'1234567890',
#     start:256,
#     end:300,
#     products:[{
#         link:'https://www.amazon.com/Covergirl-Trunaked-Scented-Shadow-Palette/dp/B07CJ7LXC2/ref=sr_1_fkmr1_1?crid=12PBK2OCNDK14&keywords=covergirl+trunaked+eyeshadow+palette+in+peach+punch&qid=1567764762&s=gateway&sprefix=covergirl+true+naked+eye%2Caps%2C320&sr=8-1-fkmr1'
#     },{
#         link:'https://www.amazon.com/Covergirl-Trunaked-Scented-Shadow-Palette/dp/B07CJ7LXC2/ref=sr_1_fkmr1_1?crid=12PBK2OCNDK14&keywords=covergirl+trunaked+eyeshadow+palette+in+peach+punch&qid=1567764762&s=gateway&sprefix=covergirl+true+naked+eye%2Caps%2C320&sr=8-1-fkmr1'
#     }]
# }]
import pandas as pd
import hashlib
import json

videoproductsDF = pd.read_csv('videoproducts.csv')
videoproductsDF.dropna(axis = 1, how ='all')
videoproducts = []
for index,row in videoproductsDF.iterrows():
    # print(row)
    if row['start time'] == row['start time'] :
        video = {
            'products':[]
        }
        # video['link']
        video['title'] = row['Video link'] or videoproductsDF[index-1]['Video link']
        # video['postId'] = hashlib.md5(row['link'])
        video['start'] = row['start time']
        video['end'] = row['end time']
        for key,value in row.iteritems():
            if key.startswith('product link'):
                video['products'].append({'link':value})
        videoproducts.append(video)

print(videoproducts)

# write to json file
with open('videoproducts.json','w') as f:
    json.dump(videoproducts,f)

# loop over an add products to db

