const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const postKecamatanQuery = async (cityId, name) => {
  try {
    const result = await prisma.kecamatan.create({
      
      data: {
        name,
        cityId
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};

const findKecamatanQuery = async (cityId) => {
  try {
    const result = await prisma.kecamatan.findMany({
      where: {cityId, deletedAt: null}
    });
    return result;
  } catch (err) {
    throw err;
  }
};

const findSoftDeletedKecamatanQuery = async () => {
  const result = await prisma.kecamatan.findMany({
    where: {
      deletedAt: {
        not: null
      }
    }
  });
  return result;
};

const updateKecamatanQuery = async (id, name) => {
  try {
    await prisma.kecamatan.update({
      where: { id },
      data: {
        name
      }
    });
  } catch (err) {
    throw err;
  }
};

const softDeleteKecamatanQuery = async (id) => {
  return await prisma.kecamatan.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
};

const restoreSoftDeleteKecamatanQuery = async (id) => {
  return await prisma.kecamatan.update({
    where: { id },
    data: { deletedAt: null }
  });
};

const deleteKecamatanQuery = async (id) => {
  try {
    await prisma.kecamatan.delete({
      where: { id }
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  postKecamatanQuery,
  updateKecamatanQuery,
  findKecamatanQuery,
  deleteKecamatanQuery,
  findSoftDeletedKecamatanQuery,
  softDeleteKecamatanQuery,
  restoreSoftDeleteKecamatanQuery
};
