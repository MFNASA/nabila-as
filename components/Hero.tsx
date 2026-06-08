import Image from "next/image";
import {
  FaWhatsapp,
  FaDownload,
  FaAward,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-32 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            bg-pink-50
            rounded-[40px]
            shadow-xl
            overflow-hidden
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Kiri */}
            <div className="p-12 lg:p-16">
              <span
                className="
                  px-4 py-2
                  rounded-full
                  bg-rose-100
                  text-rose-500
                  text-sm
                "
              >
                Ahli Madya Farmasi
              </span>

              <h1
                className="
                  text-5xl
                  lg:text-6xl
                  font-bold
                  mt-6
                  text-gray-800
                "
              >
                Nabila Amelia
                <br />
                Syaputri
              </h1>

              <p
                className="
                  mt-6
                  text-gray-500
                  leading-8
                  text-lg
                "
              >
                Lulusan D3 Farmasi yang memiliki kemampuan pelayanan
                kefarmasian, administrasi, komunikasi pasien, dan
                pengelolaan obat secara profesional.
              </p>

              {/* Tombol */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/cv-nabila-amelia.pdf"
                  download
                  className="
                    flex items-center gap-2
                    bg-rose-400
                    text-white
                    px-6 py-3
                    rounded-xl
                    hover:bg-rose-500
                    transition
                  "
                >
                  <FaDownload />
                  Download CV
                </a>

                <a
                  href="https://wa.me/6281234567890?text=Halo%20Nabila,%20saya%20tertarik%20dengan%20profil%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    bg-green-500
                    text-white
                    px-6 py-3
                    rounded-xl
                    hover:bg-green-600
                    transition
                  "
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>

              {/* Statistik */}
              <div
                className="
                  grid
                  grid-cols-3
                  gap-4
                  mt-12
                "
              >
                <div>
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-rose-400
                    "
                  >
                    D3
                  </h3>

                  <p className="text-gray-500 text-sm">
                    fakultas kesehatan berbasis vokasi
                
                  </p>
                </div>

                <div>
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-rose-400
                    "
                  >
                    3+
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Pengalaman
                  </p>
                </div>

                <div>
                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-rose-400
                    "
                  >
                    100%
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Siap Kerja
                  </p>
                </div>
              </div>
            </div>

            {/* Kanan */}
            <div
              className="
                bg-gradient-to-br
                from-rose-50
                to-pink-100
                flex
                items-center
                justify-center
                p-10
              "
            >
              <div className="relative">
                <div
                  className="
                    absolute
                    inset-0
                    blur-3xl
                    bg-rose-300
                    opacity-30
                    rounded-full
                  "
                />

                <div
                  className="
                    relative
                    w-[320px]
                    h-[320px]
                    rounded-full
                    overflow-hidden
                    border-8
                    border-white
                    shadow-xl
                  "
                >
                  <Image
                    src="/profile.jpg"
                    alt="Nabila Amelia"
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className="
                    absolute
                    -bottom-2
                    -right-2
                    bg-white
                    shadow-lg
                    px-4
                    py-3
                    rounded-xl
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FaAward className="text-rose-400" />
                  <span className="text-sm">
                    Farmasi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}