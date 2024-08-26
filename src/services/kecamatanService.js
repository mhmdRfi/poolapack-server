const {
  postKecamatanQuery,
  updateKecamatanQuery,
  findKecamatanQuery,
  deleteKecamatanQuery,
  findSoftDeletedKecamatanQuery,
  softDeleteKecamatanQuery,
  restoreSoftDeleteKecamatanQuery
} = require('../queries/kecamatanQuery');


const postKecamatanService = async (id, name) => {
    try{
        const cityId = parseInt(id, 10);
        const res = await postKecamatanQuery(cityId, name);
        return res
    } catch(err){
        throw err
    }
}

const findKecamatanService = async (id) => {
  try {
    const cityId = parseInt(id, 10);
    const res = await findKecamatanQuery(cityId);
    return res;
  } catch (err) {
    throw err;
  }
};

const findSoftDeletedKecamatanService = async () => {
  try {
    const res = await findSoftDeletedKecamatanQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const updateKecamatanService = async (id, name) => {
    try{
        const kecamatanId = parseInt(id, 10);
        await updateKecamatanQuery(kecamatanId, name)
        
    } catch(err){
        throw err
    }
}

const softDeleteKecamatanService = async (id) => {
  try {
    const kecamatanId = parseInt(id, 10);
    await softDeleteKecamatanQuery(kecamatanId);
  } catch (err) {
    throw err;
  }
};

const restoreSoftDeletedKecamatanService = async (id) => {
  try {
    const kecamatanId = parseInt(id, 10);
    const res = await restoreSoftDeleteKecamatanQuery(kecamatanId);
    return res;
  } catch (err) {
    throw err;
  }
};

const deleteKecamatanService = async (id) => {
    try{
        const kecamatanId = parseInt(id, 10);
        await deleteKecamatanQuery(kecamatanId)
        
    } catch(err){
        throw err
    }
}

module.exports = {
  postKecamatanService,
  updateKecamatanService,
  findKecamatanService,
  deleteKecamatanService,
  findSoftDeletedKecamatanService,
  softDeleteKecamatanService,
  restoreSoftDeletedKecamatanService
};