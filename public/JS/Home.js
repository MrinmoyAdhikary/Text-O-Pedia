let signIn=document.querySelector(".login");
let signOut=document.querySelector(".register");
const signInForm = document.querySelector(".signInForm");
const signUpForm=document.querySelector(".signUpForm");
const input=document.querySelectorAll("input")


signIn.addEventListener("click",()=>{
    signIn.classList.add("clicked");
    signOut.classList.remove("clicked");
    signInForm.classList.remove("form-hide");
    signUpForm.classList.add("form-hide");
    input.forEach(input => {
      input.value="";      
    });
});


  signOut.addEventListener("click",()=>{
    signIn.classList.remove("clicked");
    signOut.classList.add("clicked");
    signInForm.classList.add("form-hide");
    signUpForm.classList.remove("form-hide");
     input.forEach(input => {
      input.value="";      
    });
  })
