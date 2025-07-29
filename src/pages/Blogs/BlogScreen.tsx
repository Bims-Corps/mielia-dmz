import Photo from "../../assets/images/_hero_blog.png";
import { BlogItem } from "./BlogItem";
import Blog1 from "../../assets/images/blogs/blog_1.png";
import Blog2 from "../../assets/images/blogs/blog_2.png";
import Blog3 from "../../assets/images/blogs/blog_3.png";
import Blog4 from "../../assets/images/blogs/blog_4.png";
import Blog5 from "../../assets/images/blogs/blog_5.png";
import Blog6 from "../../assets/images/blogs/blog_6.png";

export default function BlogScreen() {
  return (
    <>
      <section className="container mx-auto px-8 py-4">
        <img src={Photo} alt="blog-here" className="mx-auto h-[32rem] mb-12" />
        <div className="flex justify-center text-center">
          <div className="px-12 mb-12">
            <h1 className="text-8xl font-bold italic border-b-4 py-2">BLOG</h1>
            <p className="my-2">Berita buat kamu supaya ga ketinggalan <br /> informasi dari Mielia</p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-x-24 gap-y-12">
          <BlogItem
            src={Blog1}
            title="JAM OPERASIONAL IDUL ADHA"
            content="Lebaran Qurban? Tenang, Mielia Cimahi tetap buka seperti biasa! 😎 Kita siap nemenin kamu dari jam 13.00 – 22.00 WIB. Jadi sambil nunggu daging qurban matang, bisa banget mampir dulu ke Mielia buat isi perut Mau sendiri, berdua, atau ramean? Semua cocok makan di Mielia" 
          />
          <BlogItem
            src={Blog2}
            title="Lika Liku Di Hari Senin"
            content="Lika-liku hari senin tuh emang gak ada habisnya Baru juga mulai hari, eh udah mager + ngantuk, tiba-tiba laper padahal baru jam 10, kerjaan numpuk, mood makin turun 😢 Solusinya? Yaudah order Mielia aja! Mie Level yang pedesnya nampol bikin melek seketika dan dimsum premium yang lembut dan gurih, bisa balikin semangat yang hilang 😍" 
          />
          <BlogItem
            src={Blog3}
            title="Lunch Bareng Teman Makin Seru"
            content="Makan siang tuh paling seru kalau bareng temen Ngobrol sambil nikmatin pedasnya mie ditambah dimsum yang juicy banget 😍 Jadi, hari ini lunch di mana? Ajak temen kalian dan cobain bareng kelezatan Mielia ✨" 
          />
          <BlogItem
            src={Blog4}
            title="Rekomendasi Menu Weekend"
            content="Biar weekend kalian makin seru, jangan lupa cobain Dimsum Mentai dari @mielia_cimahi 😍 Setiap gigitannya tuh udah pasti bikin pengen nambah terus deh! Kalian kalo makan Dimsum Mentai bisa habis berapa porsi nih? 🤭 " 
          />
          <BlogItem
            src={Blog5}
            title="Reservasi Sekarang"
            content="Mau adain agenda makan besar bareng bestie atau keluarga di @mielia_cimahi tapi takut ga kebagian tempat? Yuk reservasi aja sekarang 🥳 Kalian bisa langsung menghubungi nomor diatas ya! Tinggal datang dan tanpa harus antri~" 
          />
          <BlogItem
            src={Blog6}
            title="Perempuan Tidak Bercerita"
            content="Kalau perempuan tiba-tiba diem, bukan berarti lagi bete loh. Bisa jadi… lagi mikir mau order menu Mielia yang mana 😆 Karena semua menu Mielia tuh ngilerin banget, bingung sendiri kan Mau mie? Ada Mau dimsum? Ada Mau yang pedes-pedes? Banyak! Mau yang manis kayak kamu? Apalagi 😋 Jadi daripada overthinking, mending over-order aja 🥰" 
          />
        </ul>
      </section>
    </>
  )
}
