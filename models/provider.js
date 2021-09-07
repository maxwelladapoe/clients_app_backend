
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Client = require("./client")

const ProviderSchema = new Schema({
    name:{type:String, required:true}
});

//cascade delete of providers
ProviderSchema.post('findOneAndRemove',  document=>{
    const providerId = document._id;
    try{
        Client.updateMany(
            { },
            {$pull: { providers: {$in: [providerId]}} },
            {new: true},
        ).exec()

    }catch (error){
        console.log(error);
    }

});

ProviderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ProviderSchema.set('toJSON', {
    virtuals: true
});


module.exports = mongoose.model('Provider', ProviderSchema)