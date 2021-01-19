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
        nome: 'Monte',
        descricao:'Montanha Lore ipsum dolor sit amet consectetur adipisicing elit. Earum odit, reprehenderit veritatis placeat iste beatae saepe neque quod, non modi expedita, laudantium similique iure perferendis ut. Repellat nesciunt consequatur libero?' ,
        img: './img/monte.jpeg'
    }
]

const listas = document.querySelectorAll(".menu__item")
let img = document.querySelector(".img")
let titulo = document.querySelector(".artigo_title")

for(let item of listas){
    
    item.addEventListener("click", () => {
        for(let mt of montes){
            if(mt.nome.toLocaleLowerCase == item.innerHTML.toLocaleLowerCase ){
                document.querySelector('.img').src = mt.img
                console.log(mt.img)
            }
        }        
    })
}

 /* document.querySelector('.img').src = mt.src
            document.querySelector('.artigo_title').innerHTML = mt.nome */