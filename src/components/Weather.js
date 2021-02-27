import  React from "react";

const Weather = (props) => (
        <div className="weather__info">
        {
		props.country &&<p className="weather__key"> Location :
                <span className="weather_value"> {props.country}</span>
                </p>
        }
        {
        props.country && <p className="weather__key"> Confirmed :
                <span className="weather_value"> {props.confirmed}</span>
                </p>
        } 
        {
        props.country && <p className="weather__key"> Deaths :
                <span className="weather_value"> {props.deaths}</span>
                </p>
        }
        {
        props.country && <p className="weather__key"> Recovered :
			<span className="weather_value"> {props.recovered}</span>
                </p>
        }
        {
		props.error &&<p className="weather__error">
                <span>{props.error}</span>
                </p>
        }
        </div>
);
export default Weather;
