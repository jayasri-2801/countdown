import image from "../assets/image.png"
import {Link,useNavigate} from "react-router-dom"
import Login from "./Login"

const PageNotFound=()=>{
    const navigate=useNavigate()
    const handileClick=()=>{
        console.log("Handile click function called")
        navigate("/login")
    }

    return(
        <div>
           {/* <h1>This page is not found error 404</h1>*/}
            <img className="w-100" src={image} alt="404" />
            <button onClick={handileClick}>Login</button>
            {/*<Link to="/Login">Login</Link>*/}
        </div>
    )
}

export default PageNotFound