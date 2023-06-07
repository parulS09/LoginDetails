import React, { PureComponent } from 'react'

class PureComponentss extends PureComponent {
    constructor(){
        super()
        console.log("this is constructor")
        this.state={
            names:"Parul"
        }
    }

    buttonPressdHandler(){
        this.setState(
            {
                names:"Aakas"
            }
        )
    }


    render() {
        return (
            <>
                {this.state.names}
                {console.log("Page is refreshed")}
                <button onClick={()=>{this.buttonPressdHandler()}}>submit</button>
            </>
        )
    }
}
export default PureComponentss
