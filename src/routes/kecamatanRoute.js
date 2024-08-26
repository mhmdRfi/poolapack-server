const express = require('express');

// import { body } from 'express-validator';
const {
  postKecamatanController,
  updateKecamatanController,
  findKecamatanController,
  deleteKecamatanController,
  findSoftDeletedKecamatanController,
  softDeleteKecamatanController,
  restoreSoftDeletedKecamatanController
} = require('../controllers/kecamatanController');
const router = express.Router();

router.post('/input-kecamatan/:id', postKecamatanController);
router.get('/find-kecamatan/:id', findKecamatanController);
router.get('/soft-deleted-kecamatan-records', findSoftDeletedKecamatanController);
router.patch('/edit-kecamatan/:id', updateKecamatanController);
router.patch('/soft-delete-kecamatan/:id', softDeleteKecamatanController);
router.patch('/restore-soft-deleted-kecamatan/:id', restoreSoftDeletedKecamatanController);
router.delete('/delete-kecamatan/:id', deleteKecamatanController);

module.exports = router;
