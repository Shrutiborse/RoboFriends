import React, {component} from "react";

class ErrorBoundary extends component{
    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.state({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooops..That is not Good</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary;