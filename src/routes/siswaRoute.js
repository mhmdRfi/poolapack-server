const express = require('express');

// import { body } from 'express-validator';
const {
  postSiswaController,
  updateSiswaController,
  findSiswaController,
  deleteSiswaController,
  softDeleteSiswaController,
  findSoftDeletedSiswaController,
  restoreSoftDeletedSiswaController
} = require('../controllers/siswaController');
const router = express.Router();

//POST
router.post('/input-siswa', postSiswaController);

//GET
router.get('/find-siswa', findSiswaController);
router.get('/soft-deleted-siswa-records', findSoftDeletedSiswaController);

//PATCH
router.patch('/edit-siswa/:id', updateSiswaController);
router.patch('/soft-delete-siswa/:id', softDeleteSiswaController);
router.patch('/restore-soft-deleted-siswa/:id', restoreSoftDeletedSiswaController);

//DELETE
router.delete('/delete-siswa/:id', deleteSiswaController);

module.exports = router;
