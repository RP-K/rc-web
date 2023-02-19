import React from 'react'
import iyer from "../../assets/image/Law.jpg";
const AttorneyDetails = () => {
    const Attorney ={
        firstName: "Hsuanyeh ",
        lastName: "Chang, PhD, Esq.",
        attorney:"Attorney",
        profilePic: {iyer},
        contact:"9876541230 ",
        email:"hsuanyeh@gmail.com",
        address:"11 Beocon Street, Suite 900,Boston,US",
        content:" Dr. Chang believes that the key to competent representation in patent matters is the ability to quickly and fully understand the technology involved in each case."
    }
  const name = Attorney.firstName + " " + Attorney.lastName;

  return (
    <div className=" mt-10  ">
        <div className='md:grid md:grid-cols-4 px-3  bg-secondary-light  md:py-'>
            <div className='col-span-2 sm:flex justify-center md:px-2 md:h-96 '>
            <img className=" my-2 rounded-md sm:justify-center"src={Attorney?.profilePic?.iyer} alt='attorney profile'/>
            </div>
            <div className='col-span-2 sm:pr-10 py-10'>
                <p className=' md:flex justify-start  capitalize tracking-wide text-3xl text-black font-semibold'>{name}</p>
                <p className=' md:flex justify-start  uppercase tracking-wide text-md text-black font-semibold'>{Attorney?.attorney}</p>
                <p className='md:flex justify-start  md:pt-5 capitalize tracking-wide text-sm text-black  font-semibold'>
                   {Attorney?.content}
                    </p>
                    <div className='md:flex justify-start  mt-5 text-primary-main'>
                    <p className='md:flex justify-center mr-5 text-sm flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth ="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>
{Attorney?.contact}
</p></div>
                   <div  className='md:flex justify-start text-primary-main '> 
                   <p  className='md:flex justify-center mr-5 sm:mt-2 flex text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth ="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>{Attorney?.email}
</p>  
                    </div> 
                   
                    <div className=''>
                    <p  className='sm:flex justify-center mt-2 md:justify-start flex text-sm text-primary-main md:px-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth ="1.5" stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>{Attorney.address}
</p></div>
<div className='flex justify-center'>
    <button className=' px-8 py-2 rounded-md mt-4 text-white bg-secondary-main'>Get Appointment</button>
</div>
                </div>
             
        </div>
        
       

    </div>
  )
}

export default AttorneyDetails