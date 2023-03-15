const directions = [
  "Ponto de partida: metrô Vila Mariana",
  "Pegar metrô linha azul sentido Tucuruvi",
  "Fazer baldeação na estação Ana Rosa ou Paraíso para a linha verde sentido Vila Madalena",
  "Descer na Estação Trianon",
	"Chego ao ponto de destino: MASP"
];

function getDirections(step, callback, errorCallback) {
  setTimeout(() => {
    console.log(directions[step]);
  
    if(!directions[step]) errorCallback("Instruções não encontradas!");
    else callback();
  }, 1500)
}

// Exemplo Callbacks
// getDirections(0, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () => {
//         getDirections(4, () => {
//           console.log('Você chegou ao seu destino!')
//         }, (err) => console.log(err));
//       }, (err) => console.log(err));
//     }, (err) => console.log(err));
//   }, (err) => console.log(err));
// }, (err) => console.log(err));

function obtainDirections(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(directions[step]);
  
      if(!directions[step]) reject("Instruções não encontradas!");
      else resolve();
    }, 1500);
  })
}
// Exemplo Promises
// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => obtainDirections(4))
//   .then(() => console.log('Você chegou ao seu destino!'))
//   .catch((err) => console.log(err));

// status das promises
// pending || aguardando
// fulfilled || resolvida/sucesso
// rejected || rejeitada/falha

// const promisePending = new Promise((resolve, reject) => {});
// const promiseResolved = Promise.resolve(42);
// const promiseRejected = Promise.reject("Rejeitado!");

// console.log(promisePending)
// console.log(promiseResolved)
// console.log(promiseRejected)

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Ironhack"), 1000);
})

pr1
  .then((result) => console.log('Recebi no then:', result));

const pr2 = new Promise((resolve, reject) => {  
  setTimeout(() => {
    reject('Rejeitado')
  }, 1000)
})


pr2
  .then((result) => console.log('Recebi no then:', result))
  .catch((err) => console.log('catch() =>', err));

const pr3 = new Promise((resolve, reject) => {
  throw new Error('Rejeitado devido a erro!')
})

pr3
  .then((result) => console.log('Recebi no then:', result))
  .catch((err) => console.error('catch() =>', err));

const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Ironhack"), 1500);
})

pr4
  .then(() => {
    console.log('1. then()');
    throw new Error('Algo deu errado!')
  })
  .then(() => {
    console.log('2. then()');
  })
  .then(() => {
    console.log('3. then()');
  })
  .catch((err) => console.error('catch() =>', err));

const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2000);
})

pr5
  .then((result) => {
    console.log('valor 1:', result);
    // return "B"
    return new Promise((resolve, reject) => setTimeout(() => resolve("B"), 2000))
  })
  .then((result) => {
    console.log('valor 2:', result);
    // return "C"
    return new Promise((resolve, reject) => setTimeout(() => resolve("C"), 2000))
  })
  .then((result) => {
    console.log('valor 3:', result);
    // return "D"
    return new Promise((resolve, reject) => setTimeout(() => resolve("D"), 2000))
  })
  .then((result) => {
    console.log('valor 4:', result);
    // return "E"
    return new Promise((resolve, reject) => setTimeout(() => resolve("E"), 2000))
  })
  .catch((err) => console.error('catch() =>', err))


const pr7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2500);
})

pr7
  .then((result) => {
    console.log('1. then():', result);
    throw new Error('1o. ERRO!')
  })
  .catch((err) => {
    console.error('catch() =>', err);
    return "B"
  })
  .then((result) => {
    console.log('2. then():', result);
    throw new Error('2o. ERRO!')
  })
  .then((result) => {
    console.log('3. then():', result);
  })
  .catch((err) => console.error('catch() =>', err));

const pr8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 5000);
})

pr8
  .then((result) => {
    console.log('1o. then()!')
    throw new Error('FALHA!')
  })
  .then((result) => console.log('2o. then()!', result))
  .catch((err) => console.error('catch() =>', err))
  .finally(() => {
    console.log('finally!')
  })
  