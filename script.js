const montes = [
    {
        nome: 'Pico',
        descricao:'Montanha Lore ipsum dolor sit amet consectetur adipisicing elit. Earum odit, reprehenderit veritatis placeat iste beatae saepe neque quod, non modi expedita, laudantium similique iure perferendis ut. Repellat nesciunt consequatur libero?' ,
        img: './img/pico.jpeg'
    },
    {
        nome: 'Montanha',
        descricao:'Montanha Lore ipsum dolor sit amet consectetur adipisicing elit. Earum odit, reprehenderit veritatis placeat iste beatae saepe neque quod, non modi expedita, laudantium similique iure perferendis ut. Repellat nesciunt consequatur libero?' ,
        img: './img/montanha.jpeg'
    },
    {
        nome: 'Montes',
        descricao:'Montanha Lore ipsum dolor sit amet consectetur adipisicing elit. Earum odit, reprehenderit veritatis placeat iste beatae saepe neque quod, non modi expedita, laudantium similique iure perferendis ut. Repellat nesciunt consequatur libero?' ,
        img: './img/monte.jpeg'
    }
]

const litas = document.querySelectorAll(".menu__item")
let img = document.querySelector(".img")
let titulo = document.querySelector(".artigo_title").innerHTML

for(let item of litas){
    item.addEventListener("click", () => {
        console.log(item.innerHTML)
    })
}