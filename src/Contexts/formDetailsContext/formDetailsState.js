import { useState } from "react";
import { formDetailsContext } from "../contexts";

const FormDetailsState = (props) => {

    const [__formData, __setFormData] = useState({})



    return (
        <formDetailsContext.Provider value={{ __formData, __setFormData }}>
            {props.children}
        </formDetailsContext.Provider>
    )
}

export default FormDetailsState;