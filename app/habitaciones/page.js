import Banner from "../components/Banner";
import Room from "../components/Room";
import {habitaciones} from '../data/data'


export const metadata = {
    title: "Terraza Hotel | Contacto",
    description: "Hotel en Monterrey Casanare",
    keywords: ['Hotel', 'Hotel en monterrey casanare', "Hoteles en monterrey casanare", 'Terraza', 'Monterrey', 'Casanare', 'Colombia'],
}

export default function page() {
    return (
        <> 
        <Banner fondo={'rooms/familiar.jpg'}/>
        {habitaciones.data.map((item, index)=><Room data={item} key={index }/>)}
        </>
    )}