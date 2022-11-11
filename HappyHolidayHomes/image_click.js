let bag = []
let url = "https://636b3a947f47ef51e12abb5f.mockapi.io/image"
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    display(data)
    bag = data
    })
function display(data){
    document.querySelector("#container").innerHTML = ""
    data.forEach((ele) => {
        let div = document.createElement("div")
        let country = document.createElement("img")
        let id = document.createElement("p")
        let city= document.createElement("h3")
        let des = document.createElement("p")
        let room = document.createElement("p")
        let per = document.createElement("h4")
        country.setAttribute("src",ele.Home)
        country.style.width = "350px"
        country.style.height = "200px"
        country.style.cursor = "pointer"
        country.style.opacity = "0.8"
        city.style.color = "blue"
        room.style.color = "blue"
        per.style.color = "blue"
        country.addEventListener("click",function(){
            window.location.href = "http://127.0.0.1:5500/HappyHolidayHomes/book.html"
        })
        id.innerText = ele.id;
        city.innerText =ele.name
        des.innerText = ele.Description
        room.innerText = ele.Room
        per.innerText = ele.AED446
        id.style.paddingLeft = "10px"
        city.style.paddingLeft = "10px"
        des.style.paddingLeft = "10px"
        room.style.paddingLeft = "10px"
        per.style.paddingLeft = "10px"
        div.append(country,id,city,des,room,per)
        div.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        div.style.marginBottom = "30px"
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
document.querySelector("#dashboard").addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/HappyHolidayHomes/index.html#"
   })