import React from 'react'
import banner1 from './banner-in1.webp'
import banner2 from './Blog_Banner_Asset.svg'
export default function Section() {
  return (
    <>
    <div className="d-flex overflow-hidden container-fluid bg-dark text-light p-3">
        <img src={banner1} alt="banner-img" width={100} className='p-ban-1' />
        <div className="w-75 mx-auto z-3 ">
            <h1 className="display-6 fw-bold py-5">7 Most On Demand Programming Languages</h1>
            <div className="d-flex w-50 row">
                
                <div className="col-lg-3 border-li px-2 m-3">
                    <p className="fs-sm text-secondary">Blog writer</p>
                    <p className="text-light">Noman Lodhi</p>
                    </div>
                <div className="col-lg-3 border-li px-2 m-3">
                <p className="fs-sm text-secondary">Published</p>
                    <p className="text-light">18-10-23</p>
                </div>
                <div className="col-lg-3 border-li px-2 m-3">
                <p className="fs-sm text-secondary">Views</p>
                    <p className="text-light">2k</p>
                </div>
                
          
            </div>
        </div>
        <img src={banner2} alt="banner-img" width={150} className='p-ban-2' />
    </div>
    </>
  )
}
