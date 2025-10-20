let signIn=document.querySelector(".login");
let signOut=document.querySelector(".register");
const signInForm = document.querySelector(".signInForm");
const signOutForm=document.querySelector(".signOutForm");


signIn.addEventListener("click",()=>{
    signIn.classList.add("clicked");
    signOut.classList.remove("clicked");
    signInForm.classList.remove("form-hide");
    signOutForm.classList.add("form-hide");
});


  signOut.addEventListener("click",()=>{
    signIn.classList.remove("clicked");
    signOut.classList.add("clicked");
    signInForm.classList.add("form-hide");
    signOutForm.classList.remove("form-hide");
  })
