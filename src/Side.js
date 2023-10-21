import React from 'react'
import playbutton from './play.png'
export default function Side() {
  return (
    <>
     <div className="w-25 w-sm-adjust-side">
   <div className="card p-2 position-sticky top-0 w-sm-adjust w-75 mx-auto">
    <h3 className='p-2'>Top 7 List:</h3>
    <li className='list-item-st py-2'><a href='#JavaScript' className="w-anchor text-decoration-none text-dark">JavaScript</a></li>
    <li className='list-item-st py-2'><a href='#Python' className="w-anchor text-decoration-none text-dark">Python</a></li>
    <li className='list-item-st py-2'><a href='#Ruby' className="w-anchor text-decoration-none text-dark">Ruby</a></li>
    <li className='list-item-st py-2'><a href='#SQL' className="w-anchor text-decoration-none text-dark">SQL</a></li>
    <li className='list-item-st py-2'><a href='#PHP' className="w-anchor text-decoration-none text-dark">PHP</a></li>
    <li className='list-item-st py-2'><a href='#C' className="w-anchor text-decoration-none text-dark">C</a></li>
    <li className='list-item-st py-2'><a href='#C++' className="w-anchor text-decoration-none text-dark">C++</a></li>
   </div>
   <div className='w-75 position-sticky top-img rounded-3'>
    <img src={playbutton} alt="" className="w-25 play-btn" />
   </div>
     </div>
        
    </>
  )
}
