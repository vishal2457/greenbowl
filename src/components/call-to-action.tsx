import React, { useState } from 'react'

import { Container } from '@/components/layout/Container'

export const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [btn, setbtn] = useState("Join Us");



  const handleSubmit = (e: any) => {
    e.preventDefault();
    setbtn('loading...')
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    }).then((res) => {
      if (res.status === 200) {
        setEmail('')
        setbtn("Thank you");
        // setTimeout(() => {
        //   setbtn("Join Us");
        // }, 3000);
      }
    }).catch(err => {
      setbtn('Join Us')
      console.log(err);
      
    })
  };

  return (
    <div className="relative">
  {/* <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 opacity-20">
    <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 from-blue-700"></div>
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 to-indigo-600"></div>
  </div> */}
  <Container>
    <div className="relative">
     {/* <div className="flex items-center justify-center -space-x-2">
        <img
          loading="lazy"
          width="400"
          height="400"
          src="./images/avatars/avatar.webp"
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src="./images/avatars/avatar-2.webp"
          alt="member photo"
          className="h-12 w-12 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src="./images/avatars/avatar-3.webp"
          alt="member photo"
          className="z-10 h-16 w-16 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src="./images/avatars/avatar-4.webp"
          alt="member photo"
          className="relative h-12 w-12 rounded-full object-cover"
        />
        <img
          loading="lazy"
          width="200"
          height="200"
          src="./images/avatars/avatar-1.webp"
          alt="member photo"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div> */}
      <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h3 className="text-center text-2xl font-bold text-gray-800 text-white md:text-4xl">Launching soon !</h3>
     
        {/* <div className="flex flex-wrap justify-center gap-6">
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email-address" name="email" type="email" autoComplete="email" required className="flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 max-w-xs" placeholder="Enter your email" />
          <a
              onClick={handleSubmit}
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-md before:bg-emerald-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white text-dark"
                >{btn}</span
              >
            </a>
           <a
              href="#"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-gray-700 before:bg-gray-800 sm:w-max"
            >
              <span
                className="relative text-base font-semibold text-primary text-white"
                >More about</span
              >
          </a>
        </div> */}
      </div>
    </div>
  </Container>
</div>
  )
}
