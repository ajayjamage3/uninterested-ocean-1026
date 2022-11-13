let bag = []
Location_details = JSON.parse(localStorage.getItem("Location_details")) || {}
let sign_count = JSON.parse(localStorage.getItem("sign_count")) || 0
let username = JSON.parse(localStorage.getItem("Username")) || ""
if(sign_count == 1){
    document.querySelector("#person").style.display = "none"
    document.querySelector("#user").innerHTML = username
}
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
        div.addEventListener("click",function(){
            if(sign_count == 1){
                let ID = ele.id
                let Country = ele.name
                let Room = ele.Room
                let Location_details = {ID,Country,Room}
                localStorage.setItem("Location_details",JSON.stringify(Location_details))
                window.location.href = "book.html"
            }
            else{
                document.querySelector("#page_sign").style.display = "block"
            }
        })
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
    window.location.href = "index.html"
})
 
///////////////////////////////////////////////////////

document.querySelector(".menu").addEventListener("click",function(){
    document.querySelector("#menu1").style.display = "block"
})
document.querySelector("#cut").addEventListener("click",function(){
    document.querySelector("#menu1").style.display = "none"
})
document.querySelector("#person").addEventListener("click",function(){
    if( document.querySelector("#signin").style.display == "block"){
        document.querySelector("#signin").style.display = "none"
    }
    else{
        document.querySelector("#signin").style.display = "block"
    } 
})
document.querySelector("#SIGNIN").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector("#page_sign").style.display = "block"
    document.querySelector("#signin").style.display = "none"
    document.querySelector("#page_signup").style.display = "none"
})
document.querySelector(".cancel").addEventListener("click",function(){
    document.querySelector("#page_sign").style.display  = "none"
    document.querySelector("#Otp").style.display  = "none"
})
document.querySelector(".cancel1").addEventListener("click",function(){
    document.querySelector("#page_signup").style.display = "none"
})
document.querySelector("#SIGNUP").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector("#page_signup").style.display = "block"
    document.querySelector("#signin").style.display = "none"
    document.querySelector("#page_sign").style.display = "none"
})
document.querySelector(".navsign").addEventListener("click",function(){
    document.querySelector("#page_sign").style.display = "block"
    document.querySelector("#menu1").style.display = "none"
})
document.querySelector(".navsignup").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector("#page_signup").style.display = "block"
    document.querySelector("#signin").style.display = "none"
    document.querySelector("#page_sign").style.display = "none"
})
document.querySelector(".navsignin").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector("#page_sign").style.display = "block"
    document.querySelector("#page_signup").style.display = "none"
    document.querySelector("#signin").style.display = "none"
})
document.querySelector(".cancel_o").addEventListener("click",function(){
    document.querySelector("#Otp").style.display = "none"
})

// Sign Up
PassArr = JSON.parse(localStorage.getItem("SignUp_details")) || []
document.querySelector("#forms").addEventListener("submit",details);
function details(){
    event.preventDefault();
    let Mobile_No = document.querySelector("#mobile1").value;
    let EmailId = document.querySelector("#mail").value;
    let Password = document.querySelector("#pass").value
    let First_name = document.querySelector("#first_name").value
    let Last_name = document.querySelector("#last_name").value
    console.log(Mobile_No)
    let val = checkSignup(Mobile_No,First_name,Last_name)
    console.log(val)
    if(val  == 0){
        let Info = {Mobile_No,EmailId,Password,First_name,Last_name}
        PassArr.push(Info)
        localStorage.setItem("SignUp_details",JSON.stringify(PassArr))
        document.querySelector("#page_signup").style.display = "none"
        document.querySelector("#Otp").style.display = "block"
        check_otp(First_name,Last_name)
    }
    else{
        alert("You are already user please sign in")
        document.querySelector("#page_signup").style.display = "none"
        document.querySelector("#Otp").style.display = "block"
        check_otp(First_name,Last_name)
    }
}
function checkSignup(Mobile_No,First_name,Last_name){
    let count = 0
      PassArr.forEach((ele)=>{
        if(Mobile_No == ele.Mobile_No){
            count++
        }
      })
      return count
}
document.querySelector("#formsign").addEventListener("submit",sign);
function sign(){
    event.preventDefault();
        let Mobile_No = document.querySelector("#Mobile0").value;
        console.log(Mobile_No)
        let val1 = checkSignin(Mobile_No)
        if(val1 == 0){
            alert("Number not found")
            document.querySelector("#Mobile0").value = ""   
        }
       
    }

function checkSignin(Mobile_No){
    let count = 0
    PassArr.forEach((ele)=>{
      if(Mobile_No == ele.Mobile_No){
        count++
        document.querySelector("#page_sign").style.display = "none"
        document.querySelector("#Otp").style.display = "block"
        check_otp(ele.First_name,ele.Last_name)
      }
    })
    return count
}
function check_otp(First_name,Last_name){
    document.querySelector("#otp").addEventListener("submit",function(){
        event.preventDefault()
        let o = document.querySelector("#OTP").value;
        if(o == "1234"){
            sign_count = 1
            localStorage.setItem("sign_count",JSON.stringify(sign_count))
            document.querySelector("#Otp").style.display = "none"
            document.querySelector("#person").style.display = "none"
            document.querySelector("#user").innerHTML = First_name + Last_name
            localStorage.setItem("Username",JSON.stringify(First_name + Last_name))
        }
        else{
            alert("Wrong OTP")
        }
    })
}

document.querySelector("#user").addEventListener("click",function(){
    event.preventDefault()
    document.querySelector("#signout").style.display = "block"
    document.querySelector("#SIGNOUT").addEventListener("click",function(){
        document.querySelector("#person").style.display = "block"
        sign_count = 0
        localStorage.setItem("sign_count",JSON.stringify(sign_count))
        username = ""
    })
})
document.querySelector("#dashboard").addEventListener("click",function(){
    window.location.href = "index.html"
})
