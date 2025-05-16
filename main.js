import characters  from "./characters.js"
// Element parent
const container = document.querySelector("#container")

// fonctions pour afficher les data 
function createData (label, value){

    const dataElement = document.createElement('div')
     dataElement.classList.add('data')

     // label
     const labelData = document.createElement('p')
     labelData.textContent = label
     dataElement.appendChild(labelData)

     // Value
     const valueData = document.createElement('p')
     valueData.textContent = value
     dataElement.appendChild(valueData)

     return dataElement


}

// creation Boutton
function createButton (content){
  const balise = document.createElement('button')
  balise.textContent = content

  return balise

}

// Créations elements

characters.forEach((el)=> {
  // creation de la cadre .card
  const cardElement = document.createElement('div')
  cardElement.classList.add('card')
  container.appendChild(cardElement) 
  
  //Creation d'image
  const imgElement = document.createElement("img")
  imgElement.src = el.image
  imgElement.alt = el.name
  imgElement.classList.add("card-img")
  cardElement.appendChild(imgElement)
  
  // creation proprietes
  const proprietesElement = document.createElement('div')
  proprietesElement.classList.add('properties')
  cardElement.appendChild(proprietesElement)

  // Nom de la carte
  const nameElement = document.createElement("h4")
  nameElement.classList.add('name-character')
  nameElement.textContent = el.name
  proprietesElement.appendChild(nameElement)

  // HP
  const hpElement = createData(
    "Point de vie :",
    el.health + " PV"
  )
  proprietesElement.appendChild(hpElement)
 
  // MP 
  const mpElement = createData(
    "Point de Magie :",
    el.power + " ATK"
  )
  proprietesElement.appendChild(mpElement)

  //boutton
   const buttonContainer = document.createElement('div')
   buttonContainer.classList.add("buttons")
   proprietesElement.appendChild(buttonContainer)

   // bouttons soigner et Attaque
   const soigner = createButton ('Soigner')
   
   const attaquer = createButton ('Attaquer')
   buttonContainer.appendChild(soigner)

   soigner.addEventListener('click', ()=>{
    soigner.classList.add('disabled')
    hpElement.style.color="green"
    el.health += 5
    const upHp = hpElement.querySelector("p:last-child")
    upHp.textContent = el.health + "PV"
    setTimeout(() =>{
      cardElement.classList.add('soigner')
      hpElement.style.color = "#f1f1f1 "
    }, 3500)
   })

   buttonContainer.appendChild(attaquer) 
   attaquer.addEventListener('click', ()=>{
    soigner.classList.remove('disabled')
    cardElement.classList.remove('soigner')
    
   })


})


30 aout 2024 - 1 
07 octobre 2024 - 02 deces de mon frere
05  decembre 2024 - 0.5 
05 fevrier 2024 - 1
premier avertissement - 0.5 20 fevrier
06 , 07 mars 2025 - 1.5  
30 avril et 02 mai : 1.5
