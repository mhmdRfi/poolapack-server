const {
  postKecamatanService,
  updateKecamatanService,
  findKecamatanService,
  deleteKecamatanService,
  findSoftDeletedKecamatanService,
  softDeleteKecamatanService,
  restoreSoftDeletedKecamatanService
} = require('../services/kecamatanService');


const postKecamatanController = async (req, res) => {
    try{
        const {name} = req.body
        const {id} = req.params
        const result = await postKecamatanService(id, name)
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

const findKecamatanController = async (req, res) => {
    try{
      const { id } = req.params;
        const result = await findKecamatanService(id)
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

const findSoftDeletedKecamatanController = async (req, res) => {
  try {
    const result = await findSoftDeletedKecamatanService();
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

const updateKecamatanController = async (req, res) => {
    try{
        const {id} = req.params
        const {name} = req.body
        await updateKecamatanService(id, name)
        return res.status(200).json({
        message: 'Success',
        
    })
  } catch (err) {
        return res.status(500).json({
        message: err.message,
    })
  }
}

const softDeleteKecamatanController = async (req, res) => {
  try {
    const { id } = req.params;

    await softDeleteKecamatanService(id);
    return res.status(200).json({
      message: 'Success'
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};

const restoreSoftDeletedKecamatanController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await restoreSoftDeletedKecamatanService(id);
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

const deleteKecamatanController = async (req, res) => {
    try{
        const {id} = req.params
        await deleteKecamatanService(id);
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
  postKecamatanController,
  updateKecamatanController,
  findKecamatanController,
  deleteKecamatanController,
  findSoftDeletedKecamatanController,
  softDeleteKecamatanController,
  restoreSoftDeletedKecamatanController
};
