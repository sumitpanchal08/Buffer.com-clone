let arr= JSON.parse(localStorage.getItem("logindata")) || [];
    let form=document.querySelector("form");
    form.addEventListener("submit",function(){
        event.preventDefault();
        let count=0;
        arr.forEach(function(e){
            if(form.email.value==e.email || form.password.value==e.password){
                count++;
            }
        });
        if(count==0){
            alert("Please enter Correct Password");
        }else {
            alert("Login Successfull!!");
            window.location.href="www.google.com";
        }
    })
    let tomain=document.getElementById("tomain");
    tomain.addEventListener("click",function(){
        window.location.href="landingPage.html";
    })