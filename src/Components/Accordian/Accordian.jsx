import React, { useState } from 'react'
import './Accordian.css'
import { faqs } from './data'

const Accordian = () => {
    const [acc,setAcc] = useState(-1)

    const chnageAcc=(index_val)=>{
        if(index_val === acc){
            setAcc(-1)
            return
        }
        setAcc(index_val)
    }

  return (
   
    <div className='acc_faq'>
        {
            faqs.map((item,index)=>(
                <div key={index} className='acc-section' onClick={()=>chnageAcc(index)}>  
                <div>
                     <h1 className={acc===index ? 'active' : ''}>{item.ques}</h1>
                    </div>
                <div>
                     {acc===index? (<><span className='vertcal'>-</span></>) : (<><span className='vertcal'>+</span></>)}
                    </div>
                <div>
                  <p className={acc === index ? 'active' : 'inactive'}>{item.ans}</p>
                    </div>
                    </div>
            ))
        }

    </div>
  )
}

export default Accordian