const {
  postCityQuery,
  updateCityQuery,
  findCityQuery,
  deleteCityQuery,
  softDeleteCityQuery,
  findSoftDeletedCityQuery,
  restoreSoftDeleteCityQuery
} = require('../queries/cityQuery');


//POST
const postCityService = async (name) => {
    try{
        const res = await postCityQuery(name)
        return res
    } catch(err){
        throw err
    }
}


//GET
const findCityService = async () => {
    try{
        const res = await findCityQuery()
        return res
    } catch(err){
        throw err
    }
}

const findSoftDeletedCityService = async () => {
  try {
    const res = await findSoftDeletedCityQuery();
    return res;
  } catch (err) {
    throw err;
  }
};


//PATCH
const updateCityService = async (id, name) => {
    try{
        const cityId = parseInt(id, 10);
        await updateCityQuery(cityId, name)
        
    } catch(err){
        throw err
    }
}

const softDeleteCityService = async (id) => {
    try{
        const cityId = parseInt(id, 10);
        await softDeleteCityQuery(cityId);
        
    } catch(err){
        throw err
    }
}

const restoreSoftDeletedCityService = async (id) => {
  try {
    const cityId = parseInt(id, 10);
    const res = await restoreSoftDeleteCityQuery(cityId);
    return res;
  } catch (err) {
    throw err;
  }
};


//DELETE
const deleteCityService = async (id) => {
    try{
        const cityId = parseInt(id, 10);
        await deleteCityQuery(cityId)
        
    } catch(err){
        throw err
    }
}

module.exports = {
  postCityService,
  updateCityService,
  findCityService,
  deleteCityService,
  softDeleteCityService,
  findSoftDeletedCityService,
  restoreSoftDeletedCityService
};