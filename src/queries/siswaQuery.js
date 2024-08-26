const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//POST
const postSiswaQuery = async (name, alamat, kecamatanId) => {
  try {
    const result = await prisma.siswa.create({
      data: {
        nama_siswa: name,
        alamat: alamat,
        kecamatanId: kecamatanId
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};

//GET

const findSiswaQuery = async () => {
  try {
    const result = await prisma.siswa.findMany({
      where: { deletedAt: null },
      include: {
        kecamatan: {
          select: {
            name: true, 
            cityId: true,
            city: {
              select: {
                name: true 
              }
            }
          }
        }
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};


const findSoftDeletedSiswaQuery = async () => {
  const result = await prisma.siswa.findMany({
    where: {
      deletedAt: {
        not: null
      }
    },
    include: {
      kecamatan: {
        select: {
          name: true,
          cityId: true,
          city: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });
  return result;
};

//PATCH

const updateSiswaQuery = async (id, name, alamat,kecamatanId) => {
  try {
    await prisma.siswa.update({
      where: { id },
      data: {
        nama_siswa: name,
        alamat: alamat,
        kecamatanId: kecamatanId
      }
    });
  } catch (err) {
    throw err;
  }
};

const softDeleteSiswaQuery = async (id) => {
  return await prisma.siswa.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
};

const restoreSoftDeleteSiswaQuery = async (id) => {
  return await prisma.siswa.update({
    where: { id },
    data: { deletedAt: null }
  });
};


// DELETE 
const deleteSiswaQuery = async (id) => {
  try {
    await prisma.siswa.delete({
      where: { id }
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  postSiswaQuery,
  updateSiswaQuery,
  findSiswaQuery,
  deleteSiswaQuery,
  softDeleteSiswaQuery,
  findSoftDeletedSiswaQuery,
  restoreSoftDeleteSiswaQuery
};
