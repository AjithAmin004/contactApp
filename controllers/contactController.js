const contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

//@desc get all contacts
//@route api/v1/contact/
//@access public
module.exports.getContacts = asyncHandler(async (req, res) => {
  const contacts = await contact.find();
  res.status(200).json(contacts);
});

//@desc create new contact
//@route api/v1/contact/
//@access public
module.exports.createContacts = asyncHandler(async (req, res) => {
  const { name, phone, email } = req.body;
  if (!name || !phone || !email) {
    res.status(400);
    throw new Error("Name , Phone number and emails are required values");
  }
  const Contact = await contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(Contact);
});

//@desc update contacts
//@route api/v1/contact/:id
//@access public
module.exports.updateContacts = asyncHandler(async (req, res) => {
  const Contact = await contact.findById(req.params.id);
  if (!Contact) {
    res.status(404);
    throw new Error("Mentioned id not found");
  }
  const updatedContacts = await contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,//it will return the new updated value
  });
  res.status(200).json(updatedContacts);
});

//@desc delete new contacts
//@route api/v1/contact/:id
//@access public
module.exports.deleteContacts = asyncHandler(async (req, res) => {
 const Contact = await contact.findById(req.params.id);
  if (!Contact) {
    console.log('error')
    res.status(404);
    throw new Error("Mentioned id not found");
  }
   let rep = await contact.deleteOne({_id:req.params.id});
   res.status(200).json(Contact);
});

//@desc get contacts for if
//@route api/v1/contact/:id
//@access public
module.exports.getContact = asyncHandler(async (req, res) => {
  const Contact = await contact.findById(req.params.id);
  if (!Contact) {
    res.status(404);
    throw new Error("Mentioned id not found");
  }
  res.status(200).json(Contact);
});
