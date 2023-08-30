import Image from 'next/image'
import React from 'react'

const Gallery = ({images}) => {
  return (
    <div className='grid md:grid-cols-3 md:grid-flow-row max-w-7xl mx-auto px-4  gap-2'>
            {images.map((img, index) => (
                
                <Image
                    key={index}
                    src={img.img}
                    alt={img.alt}
                    width={0}
                    height={0}
                    className={`w-full object-cover ${(index + 1) % 4 === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`}
                />
            ))}
        </div>
  )
}

export default Gallery