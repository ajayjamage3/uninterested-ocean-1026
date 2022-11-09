let bag = []
let url = "https://636b3a947f47ef51e12abb5f.mockapi.io/Country"
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    display(data)
    display2(data)
    bag = data
    })
function display(data){
    document.querySelector("#container").innerHTML = ""
    data.forEach((ele) => {
        let div = document.createElement("div")
        let country = document.createElement("img")
        country.setAttribute("src",ele.img)
        country.style.width = "250px"
        country.style.height = "150px"
        country.style.cursor = "pointer"
        country.style.opacity = "0.8"
        country.addEventListener("click",function(){
            window.location.href = "#"
        })
        let name = document.createElement("h5")
        name.innerText = ele.name
        name.style.position = "relative"
        name.style.top = "-50%"
        name.style.left = "50%"
        name.style.transform= "translate(-50%, -50%)"
        name.style.color = "white"
        name.style.textAlign = "center"
        name.style.fontSize = "20px"
        div.append(country,name)
        document.querySelector("#container").append(div)
    });
}
let slides = document.querySelector("#container")
let left = document.querySelector("#left")
let right = document.querySelector("#right")
let isDrag = false
let dragStart = ()=>{
    isDrag = true
}
let dragStop = ()=>{
    isDrag = false
}
let drag = (e) =>{
    if(!isDrag) return
    event.preventDefault()
    slides.scrollLeft = e.pageX
}
let drag1 = (e) =>{
    if(!isDrag) return
    event.preventDefault()
    slides1.scrollLeft = e.pageX
}
slides.addEventListener("mousedown",dragStart)
slides.addEventListener("mousemove",drag)
slides.addEventListener("mouseup",dragStop)
function display2(data){
    document.querySelector("#mid3").innerHTML = ""
    data.forEach((ele) => {
        let div = document.createElement("div")
        let country = document.createElement("img")
        country.setAttribute("src",ele.img)
        country.style.width = "250px"
        country.style.height = "150px"
        country.style.cursor = "pointer"
        country.style.opacity = "0.8"
        country.addEventListener("click",function(){
            window.location.href = "#"
        })
        let name = document.createElement("h5")
        name.innerText = ele.name
        name.style.position = "relative"
        name.style.top = "-50%"
        name.style.left = "50%"
        name.style.transform= "translate(-50%, -50%)"
        name.style.color = "white"
        name.style.textAlign = "center"
        name.style.fontSize = "20px"
        name.style.opacity = "0.8"
        div.append(country,name)
        document.querySelector("#mid3").append(div)
    });
}
let slides1 = document.querySelector("#mid3")
let left1 = document.querySelector("#left1")
let right1 = document.querySelector("#right1")

slides1.addEventListener("mousedown",dragStart)
slides1.addEventListener("mousemove",drag1)
slides1.addEventListener("mouseup",dragStop)

let url2 = "https://636b3a947f47ef51e12abb5f.mockapi.io/Asia"
fetch(url2)
.then((res)=>res.json())
.then((data)=>{
    showData(data)
    bag = data
    })

function showData(data){
    document.querySelector("#bottom").innerHTML = ""
    data.forEach((ele) => {
        let div = document.createElement("div")
        let country = document.createElement("h5")
        country.innerText =ele.name
        let name = document.createElement("p")
        name.innerText = ele.avatar
        div.append(country,name)
        document.querySelector("#bottom").append(div)
    });
}
document.querySelector(".mid-sec").addEventListener("click",function(){
    window.location.href = "#"
document.querySelector(".dropdown").addEventListener("click",function(){
    document.querySelector("#menu1").style.display = "block"
})
})

