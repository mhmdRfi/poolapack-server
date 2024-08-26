const express = require('express');

// import { body } from 'express-validator';
const {
  postCityController,
  updateCityController,
  findCityController,
  deleteCityController,
  softDeleteCityController,
  findSoftDeletedCityController,
  restoreSoftDeletedCityController
} = require('../controllers/cityController');
const router = express.Router();

//POST
router.post('/input-city', postCityController);

//GET
router.get('/find-city', findCityController);
router.get('/soft-deleted-city-records', findSoftDeletedCityController);

//PATCH
router.patch('/edit-city/:id', updateCityController);
router.patch('/soft-delete-city/:id', softDeleteCityController);
router.patch('/restore-soft-deleted-city/:id', restoreSoftDeletedCityController);

//DELETE
router.delete('/delete-city/:id', deleteCityController);

module.exports = router;
