import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { formDetailsContext } from '../../../Contexts/contexts'


export default function StepTwoForm() {

    let formData = useContext(formDetailsContext);

   useEffect(()=>{
        formData.__setFormData({...formData.__formData, registrationStage: 1})
   },[]);

  return (
    <div className='stepFormMain'>
    <h2 className='stepName'>{  formData.__formData.stages[formData.__formData.registrationStage] }</h2>
<form className="row g-3">
    <div className="col-md-6">
        <label for="inputEmail4" className="form-label">First Name</label>
        <input type="text" value={formData.__formData.firstName} onChange={(e)=> formData.__setFormData({...formData.__formData, firstName: e.target.value})} className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Last Name</label>
        <input type="text" value={formData.__formData.lastName} onChange={(e)=> formData.__setFormData({...formData.__formData, lastName: e.target.value})} className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Password</label>
        <input type="password" value={formData.__formData.password} onChange={(e)=> formData.__setFormData({...formData.__formData, password: e.target.value})} className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Confirm Password</label>
        <input type="password" value={formData.__formData.confirmPassword} onChange={(e)=> formData.__setFormData({...formData.__formData, confirmPassword: e.target.value})} className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" value={formData.__formData.email} onChange={(e)=> formData.__setFormData({...formData.__formData, email: e.target.value})} className="form-control" id="inputEmail4" />
    </div>
    <div className="col-12">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" onClick={()=>
            (formData.__formData.tocAgree) ? formData.__setFormData({...formData.__formData, tocAgree: false}) : formData.__setFormData({...formData.__formData, tocAgree: true})
        } checked={ (formData.__formData.tocAgree) ? 'checked' : '' }  />
        <label className="form-check-label" for="gridCheck">
            I agree with with platforms <a href='javascript:void(0)'>ToC</a>.
        </label>
        </div>
    </div>
    <div className="col-12">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck3" onClick={()=>
            (formData.__formData.concAgree) ? formData.__setFormData({...formData.__formData, concAgree: false}) : formData.__setFormData({...formData.__formData, concAgree: true})
        } checked={ (formData.__formData.concAgree) ? 'checked' : '' }  />
        <label className="form-check-label" for="gridCheck3">
            I agree with with platforms <a href='javascript:void(0)'>concent to the processing of personal data</a>.
        </label>
        </div>
    </div>
    <div className="col-12">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck2" onClick={()=>
            (formData.__formData.agreeTsc) ? formData.__setFormData({...formData.__formData, agreeTsc: false}) : formData.__setFormData({...formData.__formData, agreeTsc: true})
        } checked={ (formData.__formData.agreeTsc) ? 'checked' : '' }  />
        <label className="form-check-label" for="gridCheck2">
            I agree with with platforms <a href='javascript:void(0)'>ToC</a>.
        </label>
        </div>
    </div>
    </form>
    <div className='regFormNavControl'>
        <div></div>
        <Link className='btn btn-primary btn-next-nav' to="/step1">Previous</Link>
        <Link className='btn btn-primary btn-next-nav' to="/step3">Next</Link>
    </div>
</div>
  )
}
