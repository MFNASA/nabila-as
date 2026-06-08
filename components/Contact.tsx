import {
FaWhatsapp,
FaInstagram,
FaMapMarkerAlt,
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";

export default function Contact() {
return (
<section
    id="contact"
    className="py-24 px-6"
>
    <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">


        <h2 className="text-5xl font-bold mt-6 text-slate-800">
        Hubungi Saya
        </h2>

        <p className="text-gray-500 mt-4">
        Saya terbuka untuk peluang kerja dan kolaborasi profesional.
        </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

        {/* Email */}
        <a
        href="mailto:nabila@email.com"
        className="
            bg-white
            rounded-[28px]
            p-8
            shadow-lg
            hover:shadow-2xl
            transition-all
            hover:-translate-y-2
        "
        >
        <div
            className="
            w-16 h-16
            rounded-2xl
            bg-rose-100
            flex items-center justify-center
            text-rose-500
            text-2xl
            mb-5
            "
        >
            <FiMail />
        </div>

        <h3 className="text-xl font-bold">
            Email
        </h3>

        <p className="text-gray-500 mt-2">
            nabilaamelias04@gmail.com
        </p>
        </a>

        {/* WhatsApp */}
        <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="
            bg-white
            rounded-[28px]
            p-8
            shadow-lg
            hover:shadow-2xl
            transition-all
            hover:-translate-y-2
        "
        >
        <div
            className="
            w-16 h-16
            rounded-2xl
            bg-green-100
            flex items-center justify-center
            text-green-500
            text-2xl
            mb-5
            "
        >
            <FaWhatsapp />
        </div>

        <h3 className="text-xl font-bold">
            WhatsApp
        </h3>

        <p className="text-gray-500 mt-2">
            +62-8953-8016-5688
        </p>
        </a>

        {/* Instagram */}
        <a
        href="https://instagram.com/nbilaaaa.s"
        target="_blank"
        rel="noopener noreferrer"
        className="
            bg-white
            rounded-[28px]
            p-8
            shadow-lg
            hover:shadow-2xl
            transition-all
            hover:-translate-y-2
        "
        >
        <div
            className="
            w-16 h-16
            rounded-2xl
            bg-pink-100
            flex items-center justify-center
            text-pink-500
            text-2xl
            mb-5
            "
        >
            <FaInstagram />
        </div>

        <h3 className="text-xl font-bold">
            Instagram
        </h3>

        <p className="text-gray-500 mt-2">
            @nbilaaaa.s
        </p>
        </a>

        {/* Lokasi */}
        <div
        className="
            bg-white
            rounded-[28px]
            p-8
            shadow-lg
        "
        >
        <div
            className="
            w-16 h-16
            rounded-2xl
            bg-red-100
            flex items-center justify-center
            text-red-500
            text-2xl
            mb-5
            "
        >
            <FaMapMarkerAlt />
        </div>

        <h3 className="text-xl font-bold">
            Lokasi
        </h3>

        <p className="text-gray-500 mt-2">
            Tegal, Jawa Tengah
        </p>
        </div>

    </div>

    </div>
</section>
);
}