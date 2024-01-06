const asyncHandler = require('express-async-handler')
//@desc get all contacts
//@route api/v1/contact/
//@access public
module.exports.getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"get all contacts"});
});

//@desc create new contact
//@route api/v1/contact/
//@access public
module.exports.createContacts = asyncHandler(async (req,res)=>{
    const {name ,phone,email} = req.body
    if(!name || !phone || !email){
        res.status(400)
        throw new Error("Name , Phone number and emails are required values")
    }
    res.status(201).json({message:"contacts created"});
});

//@desc update contacts
//@route api/v1/contact/:id
//@access public
module.exports.updateContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`contacts updated for ${req.params.id}`});
});

//@desc delete new contacts
//@route api/v1/contact/:id
//@access public
module.exports.deleteContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`contacts Deleted for ${req.params.id}`})
});
//@desc get contacts for if
//@route api/v1/contact/:id
//@access public
module.exports.getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`contacts information of ${req.params.id}`})
});

