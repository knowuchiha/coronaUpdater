import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a4feeee8a5b986648b66f16a7e34560c";



class App extends React.Component {
	state = {
	  country   : undefined,
	  confirmed : undefined,
	  deaths    : undefined,
	  recovered : undefined,
	  error     : undefined,
  }
  getWeather = async (e) => {
 
      e.preventDefault();
	  var countryy = e.target.elements.country.value.trim().toLowerCase();
	  var country = countryy.charAt(0).toUpperCase() + countryy.slice(1);
	  if(country === 'Usa' || country === 'United states of america' || country === 'Us')
		  country = "US";
	  else if(country === 'United kingdom' || country === 'Uk' || country === 'England')
		  country = "United Kingdom";
	  else if(country === 'Uae' || country === 'United arab emirates')
		  country = "United Arab Emirates";
	  else if(country === 'Sri lanka')
		  country = "Sri Lanka";
	  else if(country === 'South africa')
		  country = "South Africa";
	  else if(country === 'South korea' || country === 'Korea')
		  country = "Korea, South"
	  else if(country === 'Bosina and herzegovina')
		  country = "Bosnia and Herzegovina";
	  else if(country === 'New zealand')
		  country = "New Zealand";
	  else if(country === 'Uae' || country === 'United arab emirates')
		  country = "United Arab Emirates";
	  else if(country === 'Saudi arabia')
		  country = "Saudi Arabia";

	  console.log(country);

      const api_call = await 
      fetch(`https://pomber.github.io/covid19/timeseries.json`);
	  const data = await api_call.json();
	  if (data[country] !== undefined) {
		  console.log(data);
	  const len = data[country].length;
	  console.log(data[country][len-1]);
		  this.setState({
		  country  : country,
		  confirmed: data[country][len-1]['confirmed'],
		  deaths   : data[country][len-1]['deaths'],
		  recovered: data[country][len-2]['recovered'],
	      error:undefined

      });
    }
    else {
      this.setState({
		  country: undefined,
		  confirmed:undefined,
		  deaths:undefined,
		  recovered:undefined,
		  error:"please enter country name correctly or country data does not exist"
      });   
    }
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-xs-12 title-container">
                  <Titles />
                  </div>
                  <div className="col-md-7 col-xs-12 form-container">
                  <Form getWeather={this.getWeather}/>
				  <Weather
					country  ={this.state.country}  
                    confirmed={this.state.confirmed}
                    deaths   ={this.state.deaths}
					recovered={this.state.recovered}
					error    ={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

}
export default App;
