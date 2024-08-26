const {
  postSiswaQuery,
  updateSiswaQuery,
  findSiswaQuery,
  deleteSiswaQuery,
  softDeleteSiswaQuery,
  findSoftDeletedSiswaQuery,
  restoreSoftDeleteSiswaQuery
} = require('../queries/siswaQuery');


//POST
const postSiswaService = async (name, alamat, id) => {
  try {
    const kecamatanId = parseInt(id, 10);
    const res = await postSiswaQuery(name, alamat, kecamatanId);
    return res;
  } catch (err) {
    throw err;
  }
};


//GET
const findSiswaService = async () => {
    try{
        const res = await findSiswaQuery()
        return res
    } catch(err){
        throw err
    }
}

const findSoftDeletedSiswaService = async () => {
  try {
    const res = await findSoftDeletedSiswaQuery();
    return res;
  } catch (err) {
    throw err;
  }
};


//PATCH
const updateSiswaService = async (id, name, alamat, kecamatanId) => {
  try {
    const siswaId = parseInt(id, 10);
    await updateSiswaQuery(siswaId, name, alamat,kecamatanId);
  } catch (err) {
    throw err;
  }
};

const softDeleteSiswaService = async (id) => {
    try{
        const siswaId = parseInt(id, 10);
        await softDeleteSiswaQuery(siswaId);
        
    } catch(err){
        throw err
    }
}

const restoreSoftDeletedSiswaService = async (id) => {
  try {
    const siswaId = parseInt(id, 10);
    const res = await restoreSoftDeleteSiswaQuery(siswaId);
    return res;
  } catch (err) {
    throw err;
  }
};


//DELETE
const deleteSiswaService = async (id) => {
    try{
        const siswaId = parseInt(id, 10);
        await deleteSiswaQuery(siswaId)
        
    } catch(err){
        throw err
    }
}

module.exports = {
  postSiswaService,
  updateSiswaService,
  findSiswaService,
  deleteSiswaService,
  softDeleteSiswaService,
  findSoftDeletedSiswaService,
  restoreSoftDeletedSiswaService
};