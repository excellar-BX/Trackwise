import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='w-full text-center py-3 bg-black text-white tracking-wider' >TrackWise &copy; copyright {year}, All Right Reserved.</div>
  )
}

export default Footer