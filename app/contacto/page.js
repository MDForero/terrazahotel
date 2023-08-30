import Banner from "../components/Banner";
import CardContact from "../components/CardContact";
import Map from "../components/Map";
import { contact } from "../data/data";

export const metadata = {
    title: "Terraza Hotel | Contacto",
    description: "Hotel en Monterrey Casanare",
    keywords: ['Hotel', 'Hotel en monterrey casanare', "Hoteles en monterrey casanare", 'Terraza', 'Monterrey', 'Casanare', 'Colombia'],
}

export default function page() {
    return (
        <>
            <Banner fondo={'contacto.jpg'} />
            <section className="max-w-screen-2xl md:px-0 px-2 mx-auto flex flex-col gap-32 pt-32 ">
                <section>
                <div className="cards flex flex-wrap max-w-7xl w-full justify-evenly mx-auto px-4 md:px-0">
                    {contact.map((item, index) => <CardContact key={index} data={item} />)}
                </div>
                </section>
                <Map />
            </section>
        </>
    )
}