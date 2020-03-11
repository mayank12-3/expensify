const promise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Mayank',
    //   age: 24
    // })
    reject('Something went wrong')
  }, 1500)
})

promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log('error:', error)
})