const url = "https://pokeapi.co/api/v2/pokemon/"
const card = document.querySelector('#card')
const btn = document.querySelector('#btn')

function getPokemon(){
    let id = Math.floor(Math.random() * 1280) + 1
    const finalUrl = url + id

    fetch(finalUrl).then(res => res.json()).then(data => genCard(data))
}

function genCard(data){
 console.log(data)

 const hp = data.stats.[].base_stats
 const pokeName = data.name
 const attack = data.stats[1].base_stat
 const defense = data.stats[2].base_stat
 const speed = data.stats[5].base_stat
 const imgSrc = data.sprites.other["official-artwork"].front_default

 console.log(hp, attack, defense, speed, imgSrc)
}