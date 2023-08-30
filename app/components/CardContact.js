'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardContact = ({ data }) => {

    return (
            <a href={data.href} className="card-contact border w-60 h-24 flex text-gray-900 text-xl flex-col justify-center items-center">
                <FontAwesomeIcon icon={data.icon} className="h-10" />
                <p className=" overflow-hidden w-full text-ellipsis  px-4">{data.text}</p>
            </a>)}

export default CardContact