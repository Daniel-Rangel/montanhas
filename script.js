const montes = [
    {
        nome: 'Pico',
        descricao:'Pico Lore ipsum dolor sit amet consectetur adipisicing elit. Earum odit, reprehenderit veritatis placeat iste beatae saepe neque quod, non modi expedita, laudantium similique iure perferendis ut. Repellat nesciunt consequatur libero?' ,
        img: './img/pico.jpeg'
    },
    {
        nome: 'Montanha',
        descricao:'Montanha Lore ipsum dolor sit amet consectetur adipisicing elit. Earum odit, reprehenderit veritatis placeat iste beatae saepe neque quod, non modi expedita, laudantium similique iure perferendis ut. Repellat nesciunt consequatur libero?' ,
        img: './img/montanha.jpeg'
    },
    {
        nome: 'Monte',
        descricao:'Monte Lore ipsum dolor sit amet consectetur adipisicing elit. Earum odit, reprehenderit veritatis placeat iste beatae saepe neque quod, non modi expedita, laudantium similique iure perferendis ut. Repellat nesciunt consequatur libero?' ,
        img: './img/monte.jpeg'
    }
]

const listas = document.querySelectorAll('.menu__item')
let img = document.querySelector('.artigo__img')
let titulo = document.querySelector('.artigo_title')

img.classList.add('artigos--remove')
document.querySelector('.artigos__descricao').classList.add('artigos--remove')

listas.forEach(element => {
    element.addEventListener('click', ()=>{
        img.classList.remove('animacao-Ativa')

        for(let mt of montes){
            if(mt.nome == element.innerHTML){
                setTimeout(()=>{
                    img.classList.add('animacao-Ativa')
                    document.querySelector('.artigo_title').innerHTML = mt.nome
                    document.querySelector('.img').src = mt.img
                    document.querySelector('.img').alt = mt.nome
                    document.querySelector('.artigo__texto').innerHTML = mt.descricao
                },100)   
            }
        }
        setTimeout(()=>{
            img.classList.remove('artigos--remove')
            document.querySelector('.artigos__descricao').classList.remove('artigos--remove')
        },000)

    })
})