import React from 'react'
import style from "./Portfolio.module.css"

export default function Portfolio() {
  return <>
  
<div className='mt-16'>
    <h1 className='font-bold porto'>PORTFOLIO COMPONENT</h1>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-7 mt-10 mb-64">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" />
    </div>
</div>

  </>
}