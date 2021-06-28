import React from "react";
import preloader from "../../../assets/images/loader2.gif";

let Preloader = () => {
    return <div>
        {<img src={preloader} style={ { position:"absolute" } } alt=""/>}
    </div>
}

export default Preloader;
