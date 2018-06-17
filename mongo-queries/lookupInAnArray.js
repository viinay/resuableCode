db.getCollection('formmodels').aggregate([
    { 
        "$unwind":{ "path": "$formdata", "preserveNullAndEmptyArrays": true }
    },
    { 
        "$lookup": {
            "from": "formdatamodels",
            "localField": "formdata",
            "foreignField": "_id",
            "as": "formdataObject"
        }
    },
    { 
        "$unwind":{ "path": "$formdataObject", "preserveNullAndEmptyArrays": true }
    },
    { 
        "$group": {
            "_id": "$_id",
            "formdata": { "$push": "$formdata" },
            "formdataObject": { "$push": "$formdataObject" },
            "userId":{"$first":"$userId"},
            "hostname":{"$first":"$hostname"},
            "formid":{"$first":"$formid"},
            "formname":{"$first":"$formname"},
            "lastsubmit":{"$first":"$lastsubmit"}
        }
    },
    {
        "$out":"form-formdata"
    }
])
