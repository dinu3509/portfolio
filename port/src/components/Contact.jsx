import React from 'react'
import { SubmitButton } from './Button'
const Contact = () => {
  return (
    <div className=" min-h-screen bg-black container mx-auto p-12 rounded-2xl">
    <div className="grid grid-cols-2 min-h-full">
        <div className="title   items-start justify-center flex flex-col">
            <div className="bg-black">
            <h1 className="text-white text-4xl ">CONTACT</h1>
            <h2 className="text-white text-4xl ">ME</h2>
            </div>

        </div>
        <div className="flex items-start justify-center mt-4">
            <form action="" className="flex flex-col gap-y-2 w-full">
                <div className="inputbox mt-3">
                <label htmlFor="name" className="text-white"><span class="material-symbols-rounded">person</span></label>
                
                <div className="dd absolute top-0 text-white">Name</div>

                <input type="text" id="name" placeholder="" className="mt-1 border rounded " />
                </div>
                <div className="inputbox mt-3">
                <label htmlFor="name" className="text-white"><span class="material-symbols-rounded">mail</span></label>
                
                <div className="dd absolute top-0 text-white">Email</div>

                <input type="text" id="name" placeholder="" className="mt-1 border rounded " />
                </div>
    
                <div className="inputbox relative mt-6">
                <label htmlFor="message" className="text-white z-10 di absolute"><span class="material-symbols-rounded">
comment
</span></label>

                <textarea rows="4" cols="40" name="message" id="message" maxLength={125} className="ddd resize-none p-1 border rounded relative mt-4 pr-9" placeholder='Type your message here' ></textarea>
                <div className="di absolute top-1/4 text-white  transition-transform hidden ">Message <span class="material-symbols-rounded">
arrow_downward
</span></div>
                </div>
                <SubmitButton></SubmitButton>
                
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact
