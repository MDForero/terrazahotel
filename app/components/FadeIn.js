// Voy a crear un componente de react que se encargue de animar a los componentes hijos cuando se muestren en pantalla
// para eso voy a utilizar el evento intersection observer, el cual me permite detectar cuando un elemento esta visible en pantalla y asi poder aplicarle una animacion
// luego de que el elemento se muestre en pantalla, voy a utilizar un useEffect para remover el observer y asi evitar que se siga ejecutando
'use client'

import { useEffect, useRef, useState } from "react"


export default function FadeIn({ children }) {
    const [isVisible, setVisible] = useState(false)
    const domRef = useRef()

    const handleObserver = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible) {
              setVisible(true);
            }
          });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver)
        if (domRef.current){
            observer.observe(domRef.current)
        }
        return () => observer.disconnect()
    }, [])

    return (<div className={`${isVisible ? 'animate-fadeIn' : ''}`} ref={domRef}>
        {children}
    </div>)
}