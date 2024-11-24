
import PropTypes from "prop-types"
import { Button } from "./styles"

function DefaultButton ({ children, theme, ...props }) {

   
    
    return (

        <Button {...props} theme={theme}>{children}</Button>
    )
}

export default DefaultButton

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
    
}

