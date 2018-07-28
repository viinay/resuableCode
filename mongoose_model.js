var mongoose = require('mongoose')
/*
    mongoose.Schema.Types.ObjectId
*/
var cronSchema = mongoose.Schema({
    
},{
    timestamps: { createdAt: 'created_at',updatedAt:'updated_at' },
    versionKey:false
})

var cronModel = mongoose.model('crons',cronSchema)
module.exports = cronModel;
