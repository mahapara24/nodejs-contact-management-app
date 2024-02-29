const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//get contact
//route GET /api/contacts
//acces private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//create new contact
//route POST /api/contacts
//acces private
const createContact = asyncHandler(async (req, res) => {
  console.log("Request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

//Get contact
// route GET /api/contacts/:id
//private

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// update the contact
//route PUT /api/contacts/:id
//private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission   the other contacts ");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//desc Delete contact
//route DELETE /api/contacts/:id
//private acccess

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have permission to delete the others contacts "
    );
  }

  await Contact.findByIdAndDelete(req.params.id); //in this video instructor showed remove method but that was not working so this findByIdAndDelete
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
