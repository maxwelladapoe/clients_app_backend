const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
    name:{type: String, required:true, maxLength:255},
    email:{type: String, required:true, maxLength:255},
    phone:{type: String, required:true, maxLength:255},
    providers: [{type: Schema.Types.ObjectId, ref: 'Provider'}]
});

ClientSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ClientSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Client', ClientSchema);
