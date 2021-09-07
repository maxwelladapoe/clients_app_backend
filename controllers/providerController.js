let Provider = require('../models/provider');

exports.listAllProviders =  async(req,res)=>{
    try{
        let provider = await Provider.find();
        res.status(200).json(provider);
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: error,
            success: false
        });
    }
};

exports.getProvider =  async(req,res)=>{
    try{
        let provider = await Provider.findById(req.params.id).populate('provider');
        res.status(200).json(provider);
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: error,
            success: false
        });
    }
};

exports.createProvider =  async(req,res)=>{
    let newProvider = new Provider({
        name:req.body.name
    });
    try{
        let savedNewProvider = await newProvider.save();
        res.status(201).json(savedNewProvider);

    }catch (error) {
        res.status(500).json({
            error: error,
            success: false
        });
    }
};

exports.updateProvider =  async (req,res)=>{
    try{
        let data={
            name: req.body.name,
        };
        let updatedProvider = await Provider.findByIdAndUpdate(req.params.id,data, {new: true});
        res.status(201).json(updatedProvider);
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: error,
            success: false
        });
    }
};

exports.deleteProvider = async(req,res)=>{
    try{
        let deletedProvider = await Provider.findByIdAndRemove(req.params.id);
        res.status(201).json(deletedProvider);
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: error,
            success: false
        });
    }
};