// let btn =document.getElementById('switch')
let img =document.getElementById('img')

let state = true

let div = document.getElementById('some')
let btn = document.getElementById('switchsome')
div.addEventListener('click', ()=> {
    
    if(!state){
        div.innerHTML = `<img id="switchsome" src="off.png" alt="" width="50px">`
        state = true
        // console.log(state)
    }else{
        div.innerHTML = `<img id="switchsome" src="on.png" alt="" width="50px">`
        state = false
        // console.log(state)
    }
    img.classList.toggle('run')

})

let istate = true
let idiv = document.getElementById('lsome')
let lsom = document.getElementById('lswitchsome')
idiv.addEventListener('click',()=>
    {
        if(!istate){
        idiv.innerHTML = `<img id="switchsome" src="on.png" alt="" width="50px">`
        istate = true
        console.log(istate)
    }else{
        idiv.innerHTML = `<img id="switchsome" src="off.png" alt="" width="50px">`
        istate = false
        console.log(istate)
    }
    document.body.classList.toggle('back')
})