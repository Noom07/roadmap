import characters  from "./modules/characters.js"
import displayPersonnages from "./modules/functions.js"
displayPersonnages(characters)


async function getData(){
  const response = await fetch("https://myapis.barpat.fun/api_characters_rpg")
  console.log(response)
}

getData()