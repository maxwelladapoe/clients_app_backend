let Client = require('../models/client');

exports.listAllClients =  async(req,res)=>{
   try{
       let clients = await Client.find();

       res.status(200).json(clients);
   }catch (error){
       console.log(error);
       res.status(500).json({
           error: error,
           success: false
       });
   }
};

exports.getClient =  async(req,res)=>{

    try{
        let client = await Client.findById(req.params.id).populate('provider');
        res.status(200).json(client);
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: error,
            success: false
        });
    }
};

exports.createClient =  async(req,res)=>{
    let newClient = new Client({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        providers: req.body.providers,
    });

    try{
        let savedNewClient = await newClient.save();
        res.status(201).json(savedNewClient);
    }catch(error){
        res.status(500).json({
            error: error,
            success: false
        });
    }
};

exports.updateClient =  async(req,res)=>{

    try{
        let data={
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            providers: req.body.providers,
        };
        let updatedClient = await Client.findByIdAndUpdate(req.params.id,data,{new: true});
        res.status(201).json(updatedClient);
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: error,
            success: false
        });
    }
};

exports.deleteClient = async (req,res)=>{
    try{
        let deletedClient = await Client.findByIdAndRemove(req.params.id);
        res.status(201).json(deletedClient);
    }catch (error){
        console.log(error);
        res.status(500).json({
            error: error,
            success: false
        });
    }

};