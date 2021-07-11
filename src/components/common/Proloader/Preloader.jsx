import React from "react";
import preloader from "../../../assets/images/loader2.gif";
import style from "./Preloader.module.css"

let Preloader = () => {
    return <div>
        {<img className={style.loader} src={preloader}  alt=""/>}
    </div>
}

export default Preloader;
