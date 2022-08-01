import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({

  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  subject: { type: String, required: true, trim: true },
  details: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('venkytravel', contactSchema);