const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo'), 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1337), 2000)
})
const p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve({ name: 'Matheus' }), 1000)
  setTimeout(() => reject('Ih, papai, deu ruim!'), 5000)
})

Promise.all([p2, p3, p1])
  .then((result) => console.log(result))
  .catch(err => console.log('ERRO >>>', err))

// const p4 = Promise.all([]);
// console.log(p4);

