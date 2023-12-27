import React from "react";
import ReactDOM from "react-dom/client";



const HeadingComponent = () => {
    return(
        <h1>Instant Eats</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);