import React ,{Component} from "react";
import img from "../img/img.jpg"
class Home extends Component{
    render(){
        return(
            <div style={{width:"100%",height:"100%"}}>
        <img src={img} alt="" style={{width:"100%"}}/>
            </div> 
        )
    }
}

export default Home