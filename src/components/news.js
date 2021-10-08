import {  useContext } from "react";
import data from "../mon_context";



const News = () => {
 
let result = useContext(data)

    return (
          <p>
      le valeur de context est :     {result}
        </p>

       
    )
}


export default News ; 