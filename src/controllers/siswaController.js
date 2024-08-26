const {
  postSiswaService,
  updateSiswaService,
  findSiswaService,
  deleteSiswaService,
  softDeleteSiswaService,
  findSoftDeletedSiswaService,
  restoreSoftDeletedSiswaService
} = require('../services/siswaService');


//POST
const postSiswaController = async (req, res) => {
    try{
        const { name, alamat, kecamatanId } = req.body;
        const result = await postSiswaService(name, alamat, kecamatanId);
        return res.status(200).json({
        message: 'Success',
        data: result,
    })
  } catch (err) {
        return res.status(500).json({
        message: err.message,
    })
  }
}

//GET
const findSiswaController = async (req, res) => {
    try{
        const result = await findSiswaService()
        return res.status(200).json({
        message: 'Success',
        data: result,
    })
  } catch (err) {
        return res.status(500).json({
        message: err.message,
    })
  }
}

const findSoftDeletedSiswaController = async (req, res) => {
  try {
    const result = await findSoftDeletedSiswaService();
    return res.status(200).json({
      message: 'Success',
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

//PATCH
const updateSiswaController = async (req, res) => {
    try{
        const {id} = req.params
        const {name, alamat, kecamatanId} = req.body
        await updateSiswaService(id, name, alamat, kecamatanId);
        return res.status(200).json({
        message: 'Success',
        
    })
  } catch (err) {
        return res.status(500).json({
        message: err.message,
    })
  }
}

const softDeleteSiswaController = async (req, res) => {
  try {
    const { id } = req.params;

    await softDeleteSiswaService(id);
    return res.status(200).json({
      message: 'Success'
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};



const restoreSoftDeletedSiswaController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await restoreSoftDeletedSiswaService(id);
    return res.status(200).json({
      message: 'Success',
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};


//DELETE

const deleteSiswaController = async (req, res) => {
    try{
        const {id} = req.params
        await deleteSiswaService(id);
        return res.status(200).json({
        message: 'Success',
        
    })
  } catch (err) {
        return res.status(500).json({
        message: err.message,
    })
  }
}



module.exports = {
  postSiswaController,
  updateSiswaController,
  findSiswaController,
  deleteSiswaController,
  softDeleteSiswaController,
  findSoftDeletedSiswaController,
  restoreSoftDeletedSiswaController
};
