// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Gagal koneksi ke mongoDB server');
   }
   console.log('Berhasil terhubung ke mongoDB server');

   //delete many
   db.collection('Users').deleteMany({ name: 'Yumna' }) 
      .then((result) => {
         console.log(JSON.stringify(result, undefined, 2));
      }, (error) => {
         console.log('Gagal menghapus users', error);
      });

   //delete one (yang pertama yang ditemukan)
   // db.collection('Users').deleteOne({ name: 'Ahmad' }) 
   //    .then((result) => {
   //       console.log(JSON.stringify(result, undefined, 2));
   //    }, (error) => {
   //       console.log('Gagal menghapus users', error);
   //    });

   //delete one
   db.collection('Users').findOneAndDelete({ name: 'Rania' }) 
      .then((result) => {
         console.log(JSON.stringify(result, undefined, 2));
      }, (error) => {
         console.log('Gagal menghapus users', error);
      });
   //delete many
   db.collection('Users').deleteMany({ name: 'Ahmad' }) 
      .then((result) => {
         console.log(JSON.stringify(result, undefined, 2));
      }, (error) => {
         console.log('Gagal menghapus users', error);
      });
   //delete one ID
   db.collection('Users').findOneAndDelete({ _id: new ObjectID('592137d89ec8c43f3bc03ce8') }) 
      .then((result) => {
         console.log(JSON.stringify(result, undefined, 2));
      }, (error) => {
         console.log('Gagal menghapus users', error);
      });
      
   // db.close();
});
