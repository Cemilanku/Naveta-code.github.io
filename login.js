function masuk() {
			var user = document.getElementById("uname").value;
			var pass = document.getElementById("pass").value;
//ADMIN ACCOUNT
         if(user === "admin" && pass === "1234"){
             alert ("Login Sukses!");
             window.location = "homepage.html";
        }
//NAVETA ACCOUNT
         else if(user === "Naveta" && pass === "1234"){
             alert ("Login Sukses!");
             window.location = "homepage.html";
        }
//RIZAKY ACCOUNT
         else if(user === "Rizaky" && pass === "1234"){
             alert ("Login Sukses!");
             window.location = "homepage.html";
        }
//ARMANDO ACCOUNT
         else if(user === "Armando" && pass === "1234"){
             alert ("Login Sukses!");
             window.location = "homepage.html";
        }
         else {
            alert("Password salah, coba lagi!");
        }
    }
