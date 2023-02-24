import React from 'react'
import { Container } from 'semantic-ui-react';
import profile from "../../assets/image/iyer.jpg";

const Profile = () => {

    return (
        <div className="w-full block md:block lg:block">
        <section className="mx-auto w-full max-w-6xl">
        <div className="space-y-10 " >
           <div className="grid md:grid-cols-3 ">
           <form action="#" method="POST" className="mx-auto my-16 max-w-xl sm:mt-20 md:col-span-2">
           <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
             <div>
               <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                 First name
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   name="first-name"
                   id="first-name"
                   autoComplete="given-name"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
                 />
               </div>
             </div>
             <div>
               <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                 Last name
               </label>
               <div className="mt-2.5">
                 <input
                   type="text"
                   name="last-name"
                   id="last-name"
                   autoComplete="family-name"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
                 />
               </div>
             </div>
             <div className="sm:col-span-2">
               <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                 Email
               </label>
               <div className="mt-2.5">
                 <input
                   type="email"
                   name="email"
                   id="email"
                   autoComplete="email"
                   className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
                 />
               </div>
             </div>
             <div className="sm:col-span-2">
             <label htmlFor="Current Password" className="block text-sm font-semibold leading-6 text-gray-900">
              Current Password
             </label>
             <div className="mt-2.5">
               <input
                 type="text"
                 name="Current Password"
                 id="Current Password"
                 autoComplete="organization"
                 className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
               />
             </div>
           </div>
           <div className="sm:col-span-2">
           <label htmlFor="New Password" className="block text-sm font-semibold leading-6 text-gray-900">
           New Password
           </label>
           <div className="mt-2.5">
             <input
               type="text"
               name="New Password"
               id="New Password"
               autoComplete="organization"
               className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
             />
           </div>
         </div>
         <div className="sm:col-span-2">
         <label htmlFor="Confirm Password" className="block text-sm font-semibold leading-6 text-gray-900">
         Confirm Password
         </label>
         <div className="mt-2.5">
           <input
             type="text"
             name="Confirm Password"
             id="Confirm Password"
             autoComplete="organization"
             className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black"
           />
         </div>
       </div>
           </div>
           <div className="mt-10">
             <button
               type="submit"
               className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
               Update
             </button>
           </div>
         </form>
       <div className="grid place-content-center ">
       <div>
       <img src={profile} className="w-[100px] h-[110px] rounded-lg" />
       <div className="grid place-content-center py-10">
       <button type='button' className="md:w-[5rem] md:h-[1.875rem] w-[4rem] h-[1.75rem] bg-[#050313] text-[#ffffff] rounded-md text-xs md:text-sm hover:opacity-60">Upload Pic</button>
       </div>
       </div>
       </div>
           </div>
        </div>
    </section>
        </div>

    )
}

export default Profile