import React from "react";
import Style from "../Movies.module.css"

const Movies = (props) => {
    return(
        <div className={Style.divbox}>
            <ul>
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