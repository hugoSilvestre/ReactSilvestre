import React from "react";
import "../App.css"

const Movies = (props) => {
    return(
        <div class="divbox">
            <ul class="NoPadding">
                <h4>{props.elem.title}</h4>                
                {props.elem.director}
                <br></br>
                {props.elem.producer}
                <br></br>
                {props.elem.release_date}
            </ul>
        </div>
    )
}
export default  Movies;