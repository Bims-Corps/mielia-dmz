import Photo from "../../assets/images/photo_menus.png";
import Blog1 from "../../assets/images/blogs/blog_1.png";
import { BlogItem } from "./BlogItem";

export default function BlogScreen() {
  return (
    <>
      <section className="container mx-auto px-8 py-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 h-full bg-red">
            <div className="w-full h-[95vh] sticky top-4 start-0">
              <img src={Photo} alt="preview" className="w-full h-full object-cover" draggable={false} />
            </div>
          </div>
          <div className="col-span-8">
            <div className="-mt-16">
              <div className="px-12 mb-12">
                <h1 className="text-8xl font-bold italic">BLOG</h1>
                <p>Berita buat kamu supaya ga ketinggalan informasi dari Mielia</p>
              </div>
              <ul className="px-12">
                <BlogItem
                  src={Blog1}
                  title="JAM OPERASIONAL IDUL ADHA"
                  content="Lebaran Qurban? Tenang, Mielia Cimahi tetap buka seperti biasa! 😎 Kita siap nemenin kamu dari jam 13.00 – 22.00 WIB. Jadi sambil nunggu daging qurban matang, bisa banget mampir dulu ke Mielia buat isi perut Mau sendiri, berdua, atau ramean? Semua cocok makan di Mielia" 
                />
                <BlogItem
                  src={Blog1}
                  title="JAM OPERASIONAL IDUL ADHA"
                  content="Lebaran Qurban? Tenang, Mielia Cimahi tetap buka seperti biasa! 😎 Kita siap nemenin kamu dari jam 13.00 – 22.00 WIB. Jadi sambil nunggu daging qurban matang, bisa banget mampir dulu ke Mielia buat isi perut Mau sendiri, berdua, atau ramean? Semua cocok makan di Mielia" 
                />
                <BlogItem
                  src={Blog1}
                  title="JAM OPERASIONAL IDUL ADHA"
                  content="Lebaran Qurban? Tenang, Mielia Cimahi tetap buka seperti biasa! 😎 Kita siap nemenin kamu dari jam 13.00 – 22.00 WIB. Jadi sambil nunggu daging qurban matang, bisa banget mampir dulu ke Mielia buat isi perut Mau sendiri, berdua, atau ramean? Semua cocok makan di Mielia" 
                />
                <BlogItem
                  src={Blog1}
                  title="JAM OPERASIONAL IDUL ADHA"
                  content="Lebaran Qurban? Tenang, Mielia Cimahi tetap buka seperti biasa! 😎 Kita siap nemenin kamu dari jam 13.00 – 22.00 WIB. Jadi sambil nunggu daging qurban matang, bisa banget mampir dulu ke Mielia buat isi perut Mau sendiri, berdua, atau ramean? Semua cocok makan di Mielia" 
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
