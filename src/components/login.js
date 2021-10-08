import { useState } from "react";
const Login = () => {
  const [text, setText] = useState("");

    return (
        <div>
               <h4 className="text-primary text-center">
               {text}
<i class="fa fa-user-circle" aria-hidden="true"></i>

</h4>   
<form>
<div class="input-group mb-3">
  <div class="input-group-text">
  <i class="fa fa-user-circle" aria-hidden="true"></i>

  </div>
  <input type="text" onChange={
     (event) => {
      setText(event.target.value)
    }
  } class="form-control" aria-label="Text input with checkbox" />
</div>

<div class="input-group">
  <div class="input-group-text">
  <i class="fa fa-key" aria-hidden="true"></i>

  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button" />
</div>
</form>
<div className="social">
<a href="#"><i class="fab fa-facebook" aria-hidden="true"></i>
</a>
<a href="#"><i class="fab fa-google" aria-hidden="true"></i>
</a>
<a href="#"><i class="fab fa-twitter" aria-hidden="true"></i>
</a>

</div>

        </div>
      
        
    )
}

export default Login