const {
  postCityService,
  updateCityService,
  findCityService,
  deleteCityService,
  softDeleteCityService,
  findSoftDeletedCityService,
  restoreSoftDeletedCityService
} = require('../services/cityservice');


//POST
const postCityController = async (req, res) => {
    try{
        const {name} = req.body
        const result = await postCityService(name)
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
const findCityController = async (req, res) => {
    try{
        const result = await findCityService()
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

const findSoftDeletedCityController = async (req, res) => {
  try {
    const result = await findSoftDeletedCityService();
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
const updateCityController = async (req, res) => {
    try{
        const {id} = req.params
        const {name} = req.body
        await updateCityService(id, name)
        return res.status(200).json({
        message: 'Success',
        
    })
  } catch (err) {
        return res.status(500).json({
        message: err.message,
    })
  }
}

const softDeleteCityController = async (req, res) => {
  try {
    const { id } = req.params;

    await softDeleteCityService(id);
    return res.status(200).json({
      message: 'Success'
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
};



const restoreSoftDeletedCityController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await restoreSoftDeletedCityService(id);
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

const deleteCityController = async (req, res) => {
    try{
        const {id} = req.params
        await deleteCityService(id);
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
  postCityController,
  updateCityController,
  findCityController,
  deleteCityController,
  softDeleteCityController,
  findSoftDeletedCityController,
  restoreSoftDeletedCityController
};
