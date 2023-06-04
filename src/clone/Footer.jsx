import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className=''>
        <p className='py-96'>copyright @ {year}</p>
      </footer>
    </div>
  )
}
