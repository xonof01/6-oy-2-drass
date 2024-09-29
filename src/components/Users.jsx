import React from 'react'

const Users = () => {
    const users = [
        {
            id:1,
            img:"https://picsum.photos/id/51/800/800",
            name:"Rixsitilla",
            surname:"Nosirov",
            age:18,
            study:"Alfraganus"
        },
        {
            id:2,
            img:"https://picsum.photos/id/52/800/800",
            name:"Ulug'bek",
            surname:"Ahadov",
            age:16,
            study:"146-maktab"
        },
        {
            id:3,
            img:"https://picsum.photos/id/53/800/800",
            name:"Firdavs",
            surname:"Avazxonov",
            age:20,
            study:"TATU"
        },
    ]

  return (
    <ul className='flex justify-center gap-10 mt-10'>
        {users.map(item => (
            <li className='w-[350px] p-2 bg-slate-300 rounded-md'>
                <img className='w-full h-[250px] rounded-md mb-2' src={item.img} alt="Random img" width={"100%"} height={250} />
                <h2 className='font-bold text-[22px]'>{item.name} - {item.surname}</h2>
                <p className='text-[20px] font-semibold'>Age: {item.age}</p>
                <p className='text-[20px] font-semibold'>Study: {item.study}</p>
                <button className='w-full text-center text-[20px] py-2 rounded-md hover:bg-transparent border-[3px] border-transparent hover:border-green-700 duration-300 hover:text-green-700 bg-green-700 text-white font-semibold mt-5'>Contact</button>
            </li>
        ))}
    </ul>
  )
}

export default Users