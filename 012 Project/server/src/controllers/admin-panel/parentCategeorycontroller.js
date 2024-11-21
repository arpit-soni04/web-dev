const createParentCategrory = async(req, res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:'success'});
    }
    catch(error){
        console.log(error);
        res.stauts(500).json({message:'ineternal server error'});
    }
};

module.exports ={
    createParentCategrory
}