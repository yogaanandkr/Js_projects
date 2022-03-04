const r = function(){
    return Math.floor(Math.random()*500)   
}

const g = function(){
    return Math.floor(Math.random()*500)   
}

const b = function(){
    return Math.floor(Math.random()*500)   
}

const color = document.querySelector('.color')
const btn = document.querySelector('.btn')
btn.addEventListener("click",function(){
    const rgb = `rgb(${r()},${g()},${b()})`
    document.body.style.backgroundColor = rgb
    color.innerHTML = rgb
})

