import { AboutTitle } from "./AboutTitle";
import TableImage from "../../assets/images/_hero_table.png";

export default function AboutScreen() {
  return (
     <>
      <section className="container mx-auto py-4">
        <h1 className="text-center font-bold italic leading-1">
          <span className="text-7xl">ABOUT</span> <br />
          <span className="text-8xl">US</span>
        </h1>
      </section>
      <section className="container mx-auto py-12">
        <AboutTitle data={[
          {
            title: "Profile",
            content: "Mielia (Mie Level & Dimsum Premium) didirikan oleh Rismana karena kecintaan nya pada Food & beverage, dan menjadi salah satu Makanan Asian, Bakmie pilihan warga lokal yang tinggal tidak jauh dari Jl. Pesantren No.116, Cibabat, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513."
          },
          {
            title: "Visi",
            content: "“Menjadi restoran mie dan dimsum pilihan utama di wilayah urban Jawa Barat yang menyajikan cita rasa khas, berkualitas, dan dekat dengan budaya lokal.”"
          },
          {
            title: "Misi",
            content: "Mielia menyajikan mie dan dimsum berkualitas dengan rasa khas yang konsisten, menghadirkan suasana hangat dan ramah, berinovasi mengikuti tren tanpa meninggalkan nilai lokal, didukung layanan cepat, serta membangun brand yang akrab dan relevan dengan komunitas."
          },
        ]} />
      </section>
      <div className="w-full">
        <img src={TableImage} alt="table" className="w-full object-contain" draggable={false} />
      </div>
     </>
  )
}
