
      const API_key = "970a3c0fc41d315319d92689f158bc8a";


      function calling() {
       const cityInput = document.getElementById("city");
       const cityName = cityInput.value.trim().toLowerCase();


      cityInput.placeholder = "Enter city name";
        
       if(cityName === ""){
        alert("Please Enter Valid City Name")
        document.getElementById("data").innerHTML = "";
        document.getElementById("weather").innerHTML = "Weather Data";
        return;
       }
    

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},27,91&appid=${API_key}&units=metric `,
          { method: "GET" }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
           console.log(data)

             
             
             if(data.cod === "404" || data.cod === "401" || !data.name){
                 alert("Invalid City Name .....")
              document.getElementById("data").innerHTML = "";
            document.getElementById("weather").innerHTML = "Weather Data";
             error_handling();
             return;

  }

            document.getElementById("weather").innerHTML=`<h3>${data.name} Weather </h3>`

            document.getElementById("data").innerHTML = 
                 `  <h1>${data.name} </h1>
                 <h2>temprature- ${data.main.temp}<sup>o</sup>C</h2>
                     <h2>wind- ${data.wind.speed}km/h</h2>
                     <h2>humidity- ${data.main.humidity}%</h2>
                      <h2>description- ${data.weather[0].description}</h2>
                      `;
               
                      if(data.weather[0].main === "Clouds" ){
                        document.body.style.backgroundImage =" url('./assets/cloudy.jpeg')"
                     
                      }
                      else if(data.weather[0].main === "Haze"){
                        document.body.style.backgroundImage = "url('./assets/Haze.jpg"
                      }
                      else if(data.weather[0].main === "Rain"){
                        document.body.style.backgroundImage = "url('./assets/rain.jpg')"
                      }
                      else if(data.weather[0].main === "Clear"){
                        document.body.style.backgroundImage = "url('./assets/sunny.jpeg')"
                      }else{
                        document.body.style.backgroundImage = "url('./assets/sunny.jpeg')"
                    
                      }

                 cityInput.value = "";
                     
           
                  
          })
          .catch((error) => {
            error_handling();
          });
      }

       isvisible = true;
    function error_handling(){

      const errorBox = document.getElementById("delelte")
        if(isvisible ){
          errorBox.style.display = "flex"
          setTimeout(()=>{
     errorBox.style.display = "none"
          }, 5000)
        }
    }


