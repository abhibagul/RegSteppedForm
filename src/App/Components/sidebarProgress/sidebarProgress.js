import React, {useContext, useEffect} from 'react'
import { formDetailsContext } from '../../../Contexts/contexts'

export default function SidebarProgress() {

    const formData = useContext(formDetailsContext);

    useEffect(()=>{
        
    },[formData.__formData.registrationStage])

  return (
    <div className='progressForm'>
        <ul className='progressFormList'>
        {
            formData.__formData.stages.map((e,i)=>{
                return <li className={ ( i < formData.__formData.registrationStage) ? "stageActive" :  (i == formData.__formData.registrationStage)  ? " semiActive" : ""}><span className='thumb'></span><span className='stageName'>{e}</span></li>
            })
        }
        </ul>
    </div>
  )
}
