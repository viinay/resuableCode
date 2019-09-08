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
import datetime as datetime
def time_to_seconds(time_string):
    """Helper to convert strings 'hh:mm:ss' to integer seconds"""
    parts = time_string.split(':')
    s = int(parts[-1])
    m = int(parts[-2])
    if len(parts) == 2:
        h = 0
    else:
        h = int(parts[-3])
    time_obj = datetime.timedelta(hours=h, minutes=m, seconds=s)
    return int(time_obj.total_seconds())
    
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
        video['title'] = row['Video link']
        # video['postId'] = hashlib.md5(row['link'])
        video['start'] = time_to_seconds(row['start time'])
        video['end'] = time_to_seconds(row['end time'])
        for key,value in row.iteritems():
            if key.startswith('product link'):
                if value == value:
                    video['products'].append({'link':value})
        videoproducts.append(video)

print(videoproducts)

# write to json file
with open('videoproducts.json','w') as f:
    json.dump(videoproducts,f)

# loop over an add products to db

