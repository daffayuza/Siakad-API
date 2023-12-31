# Boilerplate Framework Backend Bootcamp Vocasia

## Overview
Mengembangkan RESTful API untuk Sistem Informasi Akademik Kampus, sebuah platform yang memungkinkan administrasi, dosen, mata kuliah dan mahasiswa untuk mengelola informasi akademik dengan efisien. API ini dirancang untuk menyediakan layanan akses data yang cepat, aman, dan terstruktur melalui endpoint yang mendukung operasi CRUD (Create, Read, Update, Delete).

### How To Use ?
* silahkan `use this template`
* kemudian jalankan 

```bash
npm install
```
* setelah itu copy file `.env.example` pada terminal dengan cara :

```bash
cp .env.example .env
```
* Buat database terlebih dahulu pada Mysql, kemudian isikan configurasi pada file `.env`, lalu sesuaikan isinya dengan database yang telah dibuat tadi.
```
APP_NAME = Vocasia Backend Framework
APP_PORT = 3000
APP_URL = http://localhost
NODE_ENV=development

# database
DB_HOST=127.0.0.1
DB_DRIVER=mysql
DB_NAME=siakad_api
DB_USER=root
DB_PASS=root
DB_PORT=3306
PRIVATE_KEY=FDMboaU5dv  //bisa diganti dengan string random lainnya

```
* Kemudian jalankan script dibawah ini untuk melakukan migration ke database : 
```
npx sequelize-cli db:migrate
```
* Coba jalankan menggunakan script dibawah ini : 
```
npm run start
```
* kemudian coba akses url dibawah ini menggunakan http request app favorit anda :
```
http://localhost:3000/
```
jika berhasil, maka akan muncul seperti berikut : 
```json
{
    "message" : "Hello exampleController"
}
```

### How To Generate Controller Automatic ?
* untuk membuat controller secara otomatis silahkan jalankan skrip berikut di terminal :
  ```
  npm run generate-controller your_controller_name
  ```
* jika berhasil maka akan terbuat file controller baru
  
### Berikut ini untuk link API Dokumentasinya :
https://documenter.getpostman.com/view/29164346/2s9YeG7BmN

# Resources 
* ExpressJs
* Sequelize
* Nodemon
* mysql2
* Bcrypt
* JSON Web Token (JWT)
