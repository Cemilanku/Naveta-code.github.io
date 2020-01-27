function masuk() {
			var user = document.getElementById("uname").value;
			var pass = document.getElementById("pass").value;
//ADMIN ACCOUNT
         if(user === "admin" && pass === "1234"){
             alert ("Login Succes!");
        }
//VISITOR ACCOUNT
         else if(user === "visit" && pass === "1234"){
             alert ("Login Succes!");
        }
        else{
          alert ("Wrong Username or Password");
        )
    }
