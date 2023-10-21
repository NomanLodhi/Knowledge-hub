import React from 'react'
import Logo from './Logo.png'
export default function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-light">
        <div className="row p-4">
            <div className="col-lg-3 py-3">
            <a className="navbar-brand d-flex align-item-center py-2 fs-3" href="#"><img src={Logo} alt="Logo" width={30} className='mx-2'/>Knowledge Hub</a>
            <p className="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minus ducimus dicta quia, placeat nam quos aliquam id ipsam distinctio.</p>
            </div>
            <div className="col-lg-3 d-flex flex-column py-3">
                <h4 className="text-light">Programming Languages</h4>
                <p className="text-light">JAVA</p>
                <p className="text-light">PHP</p>
                <p className="text-light">C++</p>
                <p className="text-light">Go Lang</p>
            </div>
            <div className="col-lg-3 d-flex flex-column py-3">
                <h4 className="text-light">Courses</h4>
                <p className="text-light">React</p>
                <p className="text-light">Photoshop</p>
                <p className="text-light">Figma</p>
                <p className="text-light">Data Entry</p>
            </div>
            <div className="col-lg-3 d-flex flex-column py-3">
                <h4 className="text-light">Your Feedback</h4>
                <div className="d-flex">
                    <input type="text" className="w-75 bg-secondary"/>
                    <button className="btn btn-danger rounded-0">Send</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
