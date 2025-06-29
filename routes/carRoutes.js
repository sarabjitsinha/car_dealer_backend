import express from 'express';
import Car from '../models/Car.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
  console.log(cars);
  
});

router.post('/', auth, upload.single("image"),async (req, res) => {
  const {name,price,year,description,slug}=req.body;
  const imageUrl=req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`:"";
  const car = await Car.create({
    name,
    price,
    year,
    description,
    slug,
    image:imageUrl
  });
  console.log(car)
  res.status(201).json(car);
});

router.delete('/:id', auth, async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;