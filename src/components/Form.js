import React from "react";

const Form = (props) => (
            <form onSubmit={props.getWeather}>
                <input type="text" name="country" placeholder="country.."/>
                <button>Get Updates</button>
            </form>
);

export default Form;
