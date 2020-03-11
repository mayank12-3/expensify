import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default } 


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
    
//     snapshot.forEach((expense) => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val()
//       })
//     })
//     console.log(expenses[0])
//   })

// database.ref('expenses').push({
//   description: 'this is description',
//   note: 'this is note',
//   amount: 100,
//   createdAt: "March 10th"
// })




// const onValueChange  = database.ref()
//   .on('value', (snapshot) => {
//     const value =  snapshot.val()
//     console.log(value.name, 'is a ', value.job.title, 'at' , value.job.company)
//   }, (e) => {
//     console.log('Error' , error)
//   })


  // setTimeout(() => {
  //   database.ref('name').set('Mayank')
  // }, 3500)

  // setTimeout(() => {
  //   database.ref('age').set(29)
  //   database.ref().off(onValueChange)
  // }, 7500)

  // setTimeout(() => {
  //   database.ref('age').set(24)
  // }, 10500)
// database.ref()
//   .on('value')
//   .then((snapshot) => {
//     const val= snapshot.val()
//     console.log(val)
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })



// database.ref().set({
//   name: 'Mayank',
//   age: '23',
//   stressLevel: 6,
//   job: {
//     title: 'Software develop',
//     company: 'iService'
//   },
//   location: {
//     city: 'Bangalore',
//     country: 'India'
//   }
// }).then(() => {
//   console.log('some data')
// }).catch((error) => {
//   console.log('error:', error)
// })


// database.ref().update({
//   name: 'Mayank Jain',
//   age: 24,
//   stressLevel: 9,
//   'job/company': 'Servify',
//   'location/city': 'Mumbai'
// })
// database.ref().remove()
// .then(() => {
//   console.log('some data')
// }).catch((error) => {
//   console.log('error:', error)
// })


