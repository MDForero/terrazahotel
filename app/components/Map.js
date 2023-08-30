'use client'
import React from 'react'
import { contacto } from '../data/data'

const Map = () => {
    return (<section className='px-4 box'>
        <iframe src={contacto.iframeMap} allowFullScreen="" className='w-full h-[450px]' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
    )
}

export default Map