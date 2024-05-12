let wrapper = document.querySelector(".wrapper");
let iconClose = document.querySelector(".icons-close");
let btnsCloseLoginpage = document.querySelector(".btn");
let btnsCloseRegisterinpage = document.querySelector("#btnRegister");


let style = document.createElement("style");
let veiwourwork = document.querySelector("#veiwourwork");

// display none when click on Login
let decomentation = document.querySelector(".decomentation");



//   css code completed -- in line 
let registerLink = document.querySelector(".register-link");
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});



// return Login (forms) from  Register Form

let loginLink = document.querySelector(".login-link");
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// bottom Login header =============
let btnPopup = document.querySelector("#btnLoginpage");

btnPopup.addEventListener("click", () => {
  //  documentation Team Memebers

  decomentation.classList.add("none");
// block

  wrapper.classList.add("active-popup");
});
veiwourwork.addEventListener("click", () => {
  //  documentation Team Memebers

  decomentation.classList.add("none");
  // display : none;

  wrapper.classList.add("active-popup");
});

// remove to do Login
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  decomentation.classList.remove("none");
});

// .colse in css display none on section Login
// inputs of input login form
let EmailL = document.getElementById('EmailL'); 
let PassL = document.getElementById('PassL');
let Message = document.getElementById('message');

btnsCloseLoginpage.addEventListener("click", () => {
for(let i=0 ; i< DataOFUsers.length;i++){     //                                                /
if(checkIputEmail(i) && checkIputPass(i)){   // if two Condation(Email And Password) is True \/
  window.open("http://127.0.0.1:5500/Home%20page/index.html");
  

//  
      } else if(checkIputEmail(i) || checkIputPass(i)){ /// if one Condation is True Output is message on who is True (Email or Password)
        if(checkIputEmail(i)){                   
          Message.innerHTML = `!this Password unCorrect`;
        }else {
          Message.innerHTML = `!this Email unCorrect`;
        }
      }
      // var(--title)
      else if(EmailL.value ==`` && PassL.value ==``){
        Message.innerHTML = `!Enter Information IsEmpty`;
      }
      else {
        Message.innerHTML = `!this information unCorrect`;
      }

      // delete any is object in Data Register if any index in object is Empty
      

}
 
  
});


// check inputs in login pages 

// Emial Login
  function checkIputEmail(index1){
    if(EmailL.value == DataOFUsers[index1].EmailR){
      return true;
    }else {
      return false;
    }
  }
  // Password Login
  function checkIputPass(index2){
    if(PassL.value == DataOFUsers[index2].PassR){
      return true;
    }else {
      return false;
    }
  }

// btn Register
let EmailR = document.getElementById('EmailR');
let Username = document.getElementById('Username');
let PassR = document.getElementById('PassR');


// save Data in localStorage 
let DataOFUsers;// int x , string name 
if (localStorage.product != null) {
  DataOFUsers = JSON.parse(localStorage.product);
} else {
  DataOFUsers = [];
} 
btnsCloseRegisterinpage.addEventListener("click", () => {
let user = {
  EmailR: EmailR.value,
  Username: Username.value,
  PassR: PassR.value,

};

      DataOFUsers.push(user);
  
//save localstorage
localStorage.setItem(`product`, JSON.stringify(DataOFUsers));




ClearInputs();






});

function ClearInputs(){
  Username.value = ``;
  EmailR.value = ``;
  PassR.value = ``;

}

// Delete All Data in LocalSotarge 
function deletedData(){
  localStorage.clear();
  DataOFUsers.splice(0);
}












// // Eited on background

// // Array of background images      0                1                     2                        3                        4                                  5                                  
// const images = ["/Login/images/1 (1).jpg", "/Login/images/2.png", "/Login/images/3.jpg", "/Login/images/4.jpg", "/Login/images/background.jpg","/Login/images/background2.jpg"];

// // Function to change background every 2 seconds
// function changeBackground() {
//   const backgroundDiv = document.getElementById("backgroundDiv");
//   let index = 0;
// //    setTimeout === setInterval
// setInterval(() => {
//     backgroundDiv.style.backgroundImage = `url(${images[index]})`;
//     index++;
//     // length = 6  
//     if(index == images.length-1){
//       index = 0;
//     }
//   }, 2000); /// in evrey 1.5 secound change background in page 
// }

// // Call the function when the page loads
// window.onload = changeBackground;

