import { useEffect } from "react"

const Contact = (props) => {
   useEffect(()=>{
       alert('ahla')
   },[])
    return (
        <div>
            <h1>contactez nous! {props.email} </h1>
            
            <form>
                <label>email : 
                    <input onChange={ () =>  {
                        console.log("hello ! ")
                    }} type="email" placeholder="taper votre email" 
                    />

                </label>
                <label>message  : 
                    <input type="text" placeholder="taper votre email" 
                    />

                </label>
                <button type="submit">envoyer</button>
            </form>
        </div>
       
    )
}


export default Contact 