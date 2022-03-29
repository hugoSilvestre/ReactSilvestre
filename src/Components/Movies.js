import React from "react";

const Movies = (props) => {
    return(
        <div>
            <h1>Mes Films</h1>
            <ul>
                <h4>{props.elem.title}</h4>
                <br></br>
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