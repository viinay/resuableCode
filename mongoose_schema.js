var Schema = new Schema({...}, { versionKey: false });
var Schema = new Schema({ __v: { type: Number, select: false}})
var Schema = new Schema({...},{
	timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
	versionKey: false
})

mongoose.Schema.Types.Double
