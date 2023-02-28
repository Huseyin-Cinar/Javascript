function fetchData() {

  var data = fetch("./user_system.json")
         .then(response=>response.json())
         .then(veri=> {
           document.getElementById("username").innerHTML = veri["user_0"].username
           document.getElementById("avatar").innerHTML = veri["user_0"].avatar
           document.getElementById("email").innerHTML = veri["user_0"].email
           document.getElementById("theme").innerHTML = veri["user_0"].theme
           document.getElementById("password").innerHTML = veri["user_0"].password
           document.getElementById("birth_date").innerHTML = veri["user_0"].birth_date
           document.getElementById("premium").innerHTML = veri["user_0"].premium
         }),

};

fetchData()
