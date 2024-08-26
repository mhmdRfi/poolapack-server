const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//POST
const postCityQuery = async (name) => {
  try {
    const result = await prisma.city.create({
      data: {
        name
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};

//GET

const findCityQuery = async () => {
  try {
    const result = await prisma.city.findMany({ where: { deletedAt: null } });
    return result;
  } catch (err) {
    throw err;
  }
};

const findSoftDeletedCityQuery = async () => {
  const result = await prisma.city.findMany({
    where: {
      deletedAt: {
        not: null
      }
    }
  });
  return result;
};

//PATCH

const updateCityQuery = async (id, name) => {
  try {
    await prisma.city.update({
      where: { id },
      data: {
        name
      }
    });
  } catch (err) {
    throw err;
  }
};

const softDeleteCityQuery = async (id) => {
  return await prisma.city.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
};

const restoreSoftDeleteCityQuery = async (id) => {
  return await prisma.city.update({
    where: { id },
    data: { deletedAt: null }
  });
};


// DELETE 
const deleteCityQuery = async (id) => {
  try {
    await prisma.city.delete({
      where: { id }
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  postCityQuery,
  updateCityQuery,
  findCityQuery,
  deleteCityQuery,
  softDeleteCityQuery,
  findSoftDeletedCityQuery,
  restoreSoftDeleteCityQuery
};
