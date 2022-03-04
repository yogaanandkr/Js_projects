const r = function(){
    return Math.floor(Math.random()*500)   
}

const g = function(){
    return Math.floor(Math.random()*500)   
}

const b = function(){
    return Math.floor(Math.random()*500)   
}

const hex = function (r, g, b){
    return '#'+ ((1<<24) + (r() << 16) + (g() << 8) + b()).toString(16).slice(1)
}

const color = document.querySelector('.color')
const btn = document.querySelector('.btn')
btn.addEventListener("click",function(){
    const hex = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = '#'+hex
    color.innerHTML = '#'+hex
})

