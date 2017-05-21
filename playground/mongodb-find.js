// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Gagal koneksi ke mongoDB server');
   }
   console.log('Berhasil terhubung ke mongoDB server');

   // db.collection('Todos').find({ completed: true })
   // db.collection('Todos').find({ 
   //    _id: new ObjectID('59213661ca1d463f07b02274')
   // })
   //    .toArray()
   //    .then((docs) => {
   //       console.log('Todos');
   //       console.log(JSON.stringify(docs, undefined, 2));
   //    }, (error) => {
   //       console.log('Gagal mengambil todos', error);
   //    });

   // db.collection('Todos').find()
   //    .count()
   //    .then((count) => {
   //       console.log(`Todos count: ${count}`);
   //    }, (error) => {
   //       console.log('Gagal mengambil todos', error);
   //    });

db.collection('Users').find({ name: 'Yumna' }) 
      .toArray()
      .then((docs) => {
         console.log('Todos');
         console.log(JSON.stringify(docs, undefined, 2));
      }, (error) => {
         console.log('Gagal mengambil todos', error);
      });
   // db.close();
});
