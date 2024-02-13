/* 

*/

let lista = document.querySelector("ul")

let team = [

{
    nome: "wayne Barnet",
    ruolo: "Founder & ceo",
    foto: "barnett-founder-ceo.jpg"
},

{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
},

{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
},

{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
},

{
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "estrada-developer.jpg"
},

{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
},

]

//console.log(team)

for(let i= 0; i<team.length; i++){
   // console.log(team[i])
    lista.innerHTML += `<li>${team[i].nome} ; ${team[i].ruolo} ; ${team[i].foto}</li>`
}





