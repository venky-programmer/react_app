import express from 'express';
import ContactModel from '../models/ContactModel.js'
const router = express.Router();

router.post('/contacted', (req, res) => {
  const contactedPerson = new ContactModel({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    details: req.body.details
  })
  contactedPerson.save()
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.json(error)
    })

})

export default router;