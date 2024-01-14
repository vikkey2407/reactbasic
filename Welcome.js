import React ,{Component} from "react";

class Welcome extends Component{
    render(){
        // return<h1>hello from class components{this.props.name}</h1> use this for class component
        return (
        <h1> hello class componen{this.props.name} ALL SHOW KNOWN AS {this.props.title} {console.log(this.props)} </h1> )
        
    }
   
}
export default Welcome;