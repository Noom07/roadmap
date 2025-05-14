// Element parent
const container = document.querySelector("#container")

const tab = [1,2,3,4,5]
const tab2 = [
    {
        name : "Nomena",
        age : 30
    },
    {
        name : "Jonglebel",
        age : 22
    },
    {
        name : "Luc",
        age : 18
    }
    
]

// Créations elements
tab2.forEach((el)=> {
    const testForm =  document.createElement("div");
    testForm.classList.add("testForm")
    testForm.textContent = el.name
    const para = document.createElement("p")
    para.classList.add('para')
    para.textContent = el.age
    testForm.appendChild(para)
    container.appendChild(testForm)
})

