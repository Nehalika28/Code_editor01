import { useParams } from "react-router-dom";
export default function reset_password(){
     const { token } = useParams();
    return(
        <div>
          <h1 style={{color:'white'}}>${token}</h1>
        </div> 
    )
}