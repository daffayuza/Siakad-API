const {Mahasiswa} = require('../models')

const mahasiswaController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswaController.index = async(req,res) => {
    res.json({
        message : "Hello mahasiswaController"
    })
}

mahasiswaController.create = async (req,res) => {
    const {nama, nim, alamat} = req.body
    if (typeof nama !== 'string' || nama.trim() === '') {
        return res.status(400).json({ error: 'Nama harus berupa Huruf dan wajib diisi' });
    }
    if (isNaN(nim) || nim <= 0) {
        return res.status(400).json({ error: 'Nim harus berupa Angka dan wajib diisi' });
    }
    if (typeof alamat !== 'string' || alamat.trim() === '') {
        return res.status(400).json({ error: 'Alamat harus berupa Huruf dan wajib diisi' });
    }

    try{
        const createMahasiswa = await Mahasiswa.create({
            nama: nama,
            nim: nim,
            alamat: alamat,
        })
        return res.status(201).json({
            message: 'Data berhasil ditambahkan !'
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

mahasiswaController.getAll = async (req,res) => {
    try{
        const getMahasiswa = await Mahasiswa.findAll()
        return res.status(200).json({
            data : getMahasiswa
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

mahasiswaController.getById = async (req,res) => {
    const {id} = req.params
    try{
        const getDetailMhs = await Mahasiswa.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailMhs
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

mahasiswaController.update = async (req,res) => {
    const {nama, nim, alamat} = req.body
    const id = req.params.id
    if (typeof nama !== 'string' || nama.trim() === '') {
        return res.status(400).json({ error: 'Nama harus berupa Huruf dan wajib diisi' });
    }
    if (typeof nim !== 'number' || isNaN(nim) || nim <= 0) {
        return res.status(400).json({ error: 'Nim harus berupa Angka dan wajib diisi' });
    }
    if (typeof alamat !== 'string' || alamat.trim() === '') {
        return res.status(400).json({ error: 'Alamat harus berupa Huruf dan wajib diisi' });
    }
    
    try{
        const getDetailMhs = await Mahasiswa.findOne({
            where : {
                id : id
            }
        })
        if(getDetailMhs === null){
            return res.status(404).json({
                message: 'ID tidak ditemukan !'
            })
        }
        const updateMahasiswa = await Mahasiswa.update({
            nama: nama,
            nim: nim,
            alamat: alamat,
        },{
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message: 'Data berhasil diubah !'
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

mahasiswaController.delete = async (req,res) => {
    const {id} = req.params
    try{
        const deleteMhs = await Mahasiswa.destroy({
            where : {
                id : id
            }
        })
        if(!deleteMhs){
            return res.status(404).json({
                message: 'ID tidak ditemukan !'
            })
        }
        return res.status(200).json({
            message: 'Data berhasil dihapus !'
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}


module.exports = mahasiswaController

