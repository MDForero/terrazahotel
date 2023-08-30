import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = ({data}) => {
  return (<div class="card md:w-96 md:h-96 h-40 w-40">
  <div class="bg flex flex-col md:w-96 md:h-96 h-36 w-36 -z-10 gap-2  justify-center items-center">
    <FontAwesomeIcon icon={data.icon} size="3x" />
    <h3 className='text-xl font-semibold tracking-[-0.05em] diagonal-fractions '>{data.title}</h3>
    <p>{data.description}</p>

  </div>
  <div class="blob -z-20 "></div>
</div>  )
}

export default Card