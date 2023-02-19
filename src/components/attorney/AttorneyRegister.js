import React from 'react'
import FormInput from '../common/form/FormInput'

const AttorneyRegister = () => {
  return (
    <div>
        <div className='md:flex justify-center '>
    <div className='md:grid md:grid-cols-4 py-5 md:px-32 gap-5 shadow-md md:mt-20'>
        <div className='flex justify-center col-span-4' >
            <p className='text-xl text-secondary-main font-semibold'>Attorney Registration</p></div>
     <div className='col-span-2 md:flex justify-end md:py-20 px-5' >
    <div className='md:grid '> 
        
        <FormInput 
        label="Business"
        type="text"
        name="business"
        placeholder="Business"
        />
        <FormInput 
        label="Country"
        type="text"
        name="country"
        placeholder="Country"       
        />
        <FormInput 
        label="State/province"
        type="text"
        name="state"
        placeholder="State/province"      
        />
        </div>
     </div>
     <div className=' md:grid col-span-2 md:py-20 px-5'>
     <FormInput 
        label="City"
        type="text"
        name="city"
        placeholder="City" 
        />
        <FormInput 
        label="Postal code"
        type="text"
        name="postalCode"
        placeholder="Postal code" 
        />
        <FormInput 
        label="Registration No."
        type="text"
        name="RegistrationNo"
        placeholder="RegistrationNo" 
        />
     </div>
    </div>
   
</div>  <div className='flex justify-center mt-10'> 
  <button className='bg-secondary-main text-white py-2 px-10 rounded-md' 
  >Submit</button>
    </div>

</div>
  )
}

export default AttorneyRegister