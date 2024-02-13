/* 

*/

let lista = document.querySelector("ul")

let team = [

{
    nome: "wayne Barnet",
    ruolo: "Founder & ceo",
    foto: "img/wayne-barnett-founder-ceo.jpg"
},

{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
},

{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
},

{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
},

{
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg"
},

{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
},

]

 //console.log(team[1].foto)

for(let i= 0; i<team.length; i++){
   // console.log(team[i])
    lista.innerHTML += `<li>${team[i].nome} ; ${team[i].ruolo} ;<img src= ${team[i].foto} alt="image"></li>`
}





