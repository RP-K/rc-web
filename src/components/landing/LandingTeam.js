import React from "react";
import { Link } from "react-router-dom";

const people = [
    {
      name: 'Hsuanyeh Chang, PhD, Esq.',
      role: 'PATENT ATTORNEY & ATTORNEY AT LAW',
      imageUrl:
        'https://assets.website-files.com/5b896eb3fac9974300bd5cba/5c6dcae949391c65f5e37122_Hsuanyeh%20Chang.jpg',
    },
    {
        name: 'Stephen Y. Chow, Esq.',
        role: 'OF COUNSEL',
        imageUrl:
          'https://assets.website-files.com/5b896eb3fac9974300bd5cba/5c6dcaf46fc786618766c9a9_Stephen%20Chow.jpg',
      },
    {
        name: 'Zachary M. Thomas, PhD, Esq.r',
        role: 'PATENT ATTORNEY & ATTORNEY AT LAW',
        imageUrl:
          'https://assets.website-files.com/5b896eb3fac9974300bd5cba/5c6dcafd644ba0bdc4d09fc4_Zachary%20Thomas.jpg',
      },
    {
        name: 'Douglas E. Chin, Esq.',
        role: 'PATENT ATTORNEY & ATTORNEY AT LAW',
        imageUrl:
           'https://assets.website-files.com/5b896eb3fac9974300bd5cba/5c6dcaa3644ba07c78d09d15_Douglas_Chin.jpg'     
         },
    {
        name: 'Peter Yi, Esq.',
        role: 'PATENT ATTORNEY',
        imageUrl:
          'https://assets.website-files.com/5b896eb3fac9974300bd5cba/5c6dcaef49391ceb44e3712d_Peter%20Yi.jpg',
      },
    {
        name: 'Alex G. Lee, PhD, Esq., CLP',
        role: 'PATENT ATTORNEY',
        imageUrl:
          'https://assets.website-files.com/5b896eb3fac9974300bd5cba/63f13370466e625f954f2c54_Alex_Lee.jpg',
      },
    // More people...
  ]
  
 const LandingTeam = ()=> {
    return (
      <div className="bg-white py-24 sm:py-32 divide-gray-200 border-b border-gray-200">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl lg:mr-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Attorney's</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            The most successful law groups are those that are able to adapt to changing circumstances and market demands while still maintaining their core values and principles.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <b className="text-lg font-semibold leading-7 tracking-tight  text-gray-900">{person.name}</b>
                    <p className="text-sm font-semibold leading-6 text-gray-700">{person.role}</p>
                    <Link to ="/attorney" className="text-sm hover:opacity-50 hover:underline text-indigo-600">View Profile</Link>
                  </div>
                </div>
              </li>
            ))}
            <Link to ="/attorney" className=" text-xl hover:opacity-50 flex justify-end">
          View All{' '} <span aria-hidden="true">&rarr;</span>
          </Link>
          </ul>
        </div>
      </div>
    )
  }
  export default LandingTeam;