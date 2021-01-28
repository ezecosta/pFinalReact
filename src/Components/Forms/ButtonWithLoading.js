import React from "react"
import {Button,Spinner} from 'react-bootstrap'
function ButtonWithLoading(props){
    return(
        <Button variant={props.variant || "secondary"}type={props.type || "submit"} disabled={props.loading}>
            {props.loading &&
            <Spinner animation="border" size="sm">
                <span className="sr-only">Loading...</span>    
            </Spinner>
            }
            {props.text || "Enter"}
        </Button>
    )
}
export default ButtonWithLoading