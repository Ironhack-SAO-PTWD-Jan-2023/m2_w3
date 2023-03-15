async function someFunction() {
  return true;
}

// someFunction().then((result) => console.log(result));

const directions = [
  "Ponto de partida: metrô Vila Mariana",
  "Pegar metrô linha azul sentido Tucuruvi",
  "Fazer baldeação na estação Ana Rosa ou Paraíso para a linha verde sentido Vila Madalena",
  "Descer na Estação Trianon",
	"Chego ao ponto de destino: MASP"
];

function obtainDirections(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(directions[step]);
  
      if(!directions[step]) reject("Instruções não encontradas!");
      else resolve();
    }, 1500);
  })
}

// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => obtainDirections(4))
//   .then(() => console.log('Você chegou ao seu destino!'))
//   .catch((err) => console.log(err));

async function goToMASP() {
  try {
    await obtainDirections(0);
    await obtainDirections(9);
    await obtainDirections(2);
    await obtainDirections(3);
    await obtainDirections(4);
    console.log('Você chegou ao seu destino!')
  } catch (error) {
    console.log('ERROR >>>', error);
  }
}

// goToMASP();

// FETCH
// then/catch
// fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonResponse) => {
//     console.log('Resposta analisada:', jsonResponse);
//   })
//   .catch((error) => console.log('Algo deu errado!', error));

// async/await + try/catch
async function displayMissionPatches(limit = 0) {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const jsonResponse = await response.json();

    const launchesToDisplay = jsonResponse.slice(0, limit);
    launchesToDisplay.forEach(launchObj => {
      const patchImg = launchObj.links.patch.small;
      const imgElement = document.createElement('img');
      imgElement.src = patchImg;
      imgElement.setAttribute('width', 200);
      document.body.appendChild(imgElement);
    })

    console.log('Resposta Analisada >>', launchesToDisplay);
  } catch (error) {
    console.log('Algo deu errado!!', error);
  }
}

// displayMissionPatches(10);

function displayMissionPatchesInfo() {
  try {
    return fetch("https://api.spacexdata.com/v4/launches")
  } catch (error) {
    console.log('Algo deu errado!!', error);
  }
}

displayMissionPatchesInfo();