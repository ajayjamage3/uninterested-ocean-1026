let bag = []
PassArr = JSON.parse(localStorage.getItem("SignUp_details")) || []
let sign_count = JSON.parse(localStorage.getItem("sign_count")) || 0
let username = JSON.parse(localStorage.getItem("Username")) || ""
if(sign_count == 1){
    document.querySelector("#person").style.display = "none"
    document.querySelector("#user").innerHTML = username
}
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
        country.style.opacity = "0.6"
        country.addEventListener("click",function(){
            window.location.href = "http://127.0.0.1:5500/HappyHolidayHomes/Image_click.html?#"
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
        country.style.opacity = "0.6"
        country.addEventListener("click",function(){
            window.location.href = "http://127.0.0.1:5500/HappyHolidayHomes/image_click2.html"
        })
        let name = document.createElement("h5")
        name.innerText = ele.name
        name.style.position = "relative"
        name.style.top = "-70%"
        name.style.left = "50%"
        name.style.transform= "translate(-50%, -50%)"
        name.style.color = "white"
        name.style.textAlign = "center"
        name.style.fontSize = "20px"
        country.style.opacity = "0.6"
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
document.querySelector(".midsec").addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/HappyHolidayHomes/Image_click.html?#"
})
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
    window.location.href = "http://127.0.0.1:5500/HappyHolidayHomes/index.html"
})