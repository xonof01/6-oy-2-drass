import React from 'react'

function Clients({userItem}) {
    return (
        <li className='w-[350px] list-none p-2 bg-slate-300 rounded-md'>
            <img className='w-full h-[250px] rounded-md mb-2' src={userItem.imgURL} alt="Random img" width={"100%"} height={250} />
            <h2 className='font-bold text-[22px]'>{userItem.name} - {userItem.surname}</h2>
            <p className='text-[20px] font-semibold'>Age: {userItem.age}</p>
            <p className='text-[20px] font-semibold'>Study: {userItem.study}</p>
            <button className='w-full text-center text-[20px] py-2 rounded-md hover:bg-transparent border-[3px] border-transparent hover:border-green-700 duration-300 hover:text-green-700 bg-green-700 text-white font-semibold mt-5'>Contact</button>
        </li>
    )
}

export default Clients