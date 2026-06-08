import {
FaFilePdf,
FaFileWord,
FaImage,
FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
{
title: "Leaflet Edukasi Asam Jawa",
description:
    "Media edukasi kesehatan yang dibuat untuk memberikan informasi kepada masyarakat mengenai manfaat dan penggunaan tanaman asam jawa.",
year: "2025",
file: "/dokumen/leaflet-asam-jawa.pdf",
icon: <FaFilePdf className="text-red-500 text-xl" />,
},
{
title: "Laporan PKM Bulakamba",
description:
    "Laporan kegiatan Program Kreativitas Mahasiswa yang berisi hasil observasi, pelaksanaan, dan evaluasi kegiatan.",
year: "2025",
file: "/dokumen/laporan-pkm-bulakamba.pdf",
icon: <FaFileWord className="text-blue-500 text-xl" />,
},
{
title: "Desain Kemasan Produk",
description:
    "Desain kemasan produk yang dibuat sebagai media branding dan promosi produk kesehatan.",
year: "2025",
file: "/dokumen/kemasan-produk.png",
icon: <FaImage className="text-green-500 text-xl" />,
},
];

export default function Portfolio() {
return (
<section
    id="portfolio"
    className="py-24 px-6 bg-gradient-to-b from-white to-rose-50"
>
    <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">



        <h2 className="text-5xl font-bold mt-6 text-slate-800">
        Project & Karya
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        Kumpulan hasil karya, laporan, media edukasi, dan proyek
        yang telah dibuat selama masa pendidikan dan praktik
        di bidang farmasi.
        </p>

    </div>

    {/* Card */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project) => (
        <div
            key={project.title}
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-md
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            "
        >
            <div
            className="
                w-14 h-14
                rounded-2xl
                bg-gray-100
                flex items-center justify-center
                mb-5
            "
            >
            {project.icon}
            </div>

            <h3 className="text-xl font-semibold text-slate-800">
            {project.title}
            </h3>

            <p className="text-sm text-rose-500 mt-2">
            Tahun {project.year}
            </p>

            <p className="text-gray-500 mt-4 leading-7 text-sm">
            {project.description}
            </p>

            <a
            href={project.file}
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex
                items-center
                gap-2
                mt-6
                text-rose-500
                font-medium
                hover:text-rose-600
            "
            >
            Lihat Dokumen
            <FaExternalLinkAlt size={12} />
            </a>
        </div>
        ))}

    </div>

    </div>
</section>
);
}