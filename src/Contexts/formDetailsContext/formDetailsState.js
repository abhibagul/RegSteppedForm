import { useState } from "react";
import { formDetailsContext } from "../contexts";

const FormDetailsState = (props) => {

    const [__formData, __setFormData] = useState({
        registrationStage: 0,
        stages: [ "Basic", "Personal Info", "Business Plan", "Payment" ],
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        tocAgree: true,
        concAgree:false,
        agreeTsc:false,
    })



    return (
        <formDetailsContext.Provider value={{ __formData, __setFormData }}>
            {props.children}
        </formDetailsContext.Provider>
    )
}

export default FormDetailsState;