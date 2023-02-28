function fetchData() {

  var data = fetch("./user_system.json")
         .then(response=>response.json())
         .then(veri=> {
           document.getElementById("username").innerHTML = veri["User_0"].username
           document.getElementById("avatar").innerHTML = veri["User_0"].avatar
           document.getElementById("email").innerHTML = veri["User_0"].email
           document.getElementById("theme").innerHTML = veri["User_0"].theme
           document.getElementById("password").innerHTML = veri["User_0"].password
           document.getElementById("birth_date").innerHTML = veri["User_0"].birth_date
           document.getElementById("premium").innerHTML = veri["User_0"].premium
         }),

};

fetchData()
