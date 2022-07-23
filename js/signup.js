let arr= JSON.parse(localStorage.getItem("logindata")) || [];
    let form=document.querySelector("form");
    form.addEventListener("submit",function(){
        event.preventDefault();
        if(form.email.value=="" || form.password.value==""){
            alert("Fill All Details");
        }else{
            let obj={
                email:form.email.value,
                password:form.password.value
            };
            arr.push(obj);
            localStorage.setItem("logindata",JSON.stringify(arr));
            alert("Signup Successfull!! You will redirected to Login Page");
             window.location.href="login.html";
        }
    })
    let tomain=document.getElementById("tomain");
    tomain.addEventListener("click",function(){
        window.location.href="landingPage.html";
    })