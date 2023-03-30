import React from 'react'
import FormDetailsState from './formDetailsContext/formDetailsState'
export default function WrapContexts(props) {
    return (
        <>
            <FormDetailsState>
                            {props.children}
            </FormDetailsState>
        </>
    )
}