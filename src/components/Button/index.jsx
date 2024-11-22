import { Button } from "./styles"

function DefaultButton({ children, ...props }) {
    console.log(children);
    
    console.log(props);
    
    
    
    return (

        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton