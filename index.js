

document.addEventListener("DOMContentLoaded", () => {
  loadCharacters()
  // loadLukeSkyWalker()
})


// function loadLukeSkyWalker() {
//   // fetch("https://swapi.dev/api/people/")
//   //   .then(response => {
//   //     return response.json()
//   //   })
//   //   .then(data => {
//   //   // for(let element of data.results) {
//   //   //   console.log(element)
//   //   // }
//   //   // console.log(data)
//   //   // data.results.forEach((element, index) => {
      
//   //   // })

//   //   // let input = "a"

//   //   // let r5d4 = data.results.find(character => character.name.toLowerCase().includes(input.toLowerCase()))
//   //   // let r5d4 = data.results.filter(character => character.name.toLowerCase().includes(input.toLowerCase()))

//   //   // console.log(r5d4)

//   //   // data.results.forEach(character => {
//   //   //   renderCharacter(character)
//   //   // })
//   // })
//   // for(let i = 0; i < 5000; i++) {
//   // }

//   // 
// }

async function loadCharacters() {
  try {
    const resp = await fetch("https://swapi.dev/api/people/")
    const data = await resp.json()
    for (let i = 0; i < data.results.length; i++) {
      const character = data.results[i];
      await renderCharacter(character)
    }
  } catch {
    console.log('something broke')
  }
}

function parseResponse(response) {
  return response.json()
}


async function renderCharacter(character) {

  const resp = await fetch(character.homeworld)
  const homeworld = await resp.json()
  // <div>
  //     <h3>Luke Skywalker</h3>
  //     <p>Birthyear: 19BBY</p>
  //     <p>Planet: Tattooine</p>
  //     <hr/>
  // </div>
  const charactersDiv = document.getElementById('characters')

  const div = document.createElement('div')
  const h3 = document.createElement('h3')
  const birthyearP = document.createElement('p')
  const planetP = document.createElement('p')
  const hr = document.createElement('hr')

  h3.innerText = character.name
  birthyearP.innerText = `Birthyear: ${character.birth_year}`
  planetP.innerText = `Planet: ${homeworld.name}`

  div.appendChild(h3)
  div.appendChild(birthyearP)
  div.appendChild(planetP)
  div.appendChild(hr)

  charactersDiv.appendChild(div)
}