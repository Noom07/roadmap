import characters  from "./modules/characters.js"
import displayPersonnages from "./modules/functions.js"



let personnagesUpdated = []


function updatePersonnages(personnageApi){
  personnagesUpdated = personnageApi.map((personnage) => {
    
      return  {
        id : personnage.id,
        name : personnage.name,
        image : personnage.avatar,
        health : personnage.pv,
        magie : personnage.magic_power,
        power : personnage.atk
    }
    
  })
}

async function getData(){
  
  try{
  const response = await fetch("https://myapis.barpat.fun/api_characters_rpg")
    console.log(response)
    if(!response.ok){
      throw new Error("Pb de connexion  à l'API")
    }
    const data = await response.json()
    updatePersonnages(data)
    console.log( personnagesUpdated)
    displayPersonnages(personnagesUpdated)
  }
  catch(error){
    console.error(`il y a eu un pb de connexion ${error}`);
    
  }
  
  
}
getData()

let testgit 
