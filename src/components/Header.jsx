import React from 'react'

const Header = () => {
  const categories = [
    "Politics",
    "Technology",
    "Sports",
    "Entertainment",
    "Health",
  ];

  return (
    <header className='py-[10px] bg-slate-800 text-white text-center'>
      <div className='flex items-center gap-10 justify-center'>
        {categories.map(item => (
          <p key={Math.random()}>{item}</p>
        ))}
      </div>
    </header>
  )
}

export default Header