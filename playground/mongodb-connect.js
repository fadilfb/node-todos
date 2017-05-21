// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Gagal koneksi ke mongoDB server');
   }
   console.log('Berhasil terhubung ke mongoDB server');

   db.collection('Todos').insertOne({
      text: 'Belajar Tajwid',
      completed: false
   }, (error, result) => {
      if (error) {
         return console.log('Gagal insert data todo');
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
   });

   db.collection('Users').insertOne({
      name: 'Ahmad',
      age: 13,
      location: 'Mataram'
   }, (error, result) => {
      if (error) {
         return console.log('Gagal buat user data');
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
   });

   db.close();
});
