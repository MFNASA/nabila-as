import {
FaHospital,
FaPills,
FaUserNurse,
} from "react-icons/fa";

const experiences = [
{
icon: <FaPills />,
title: "Praktik Kerja Lapangan",
place: "Apotek kimia Farma slawi",
year: "2024",
desc: "Membantu pelayanan resep, penyiapan obat, pengelolaan stok, dan administrasi farmasi.",
},
{
icon: <FaHospital />,
title: "Praktik Rumah Sakit",
place: "Rumah Sakit islam muhammadiyah tegal",
year: "2025",
desc: "Melakukan pelayanan kefarmasian, distribusi obat, serta pengelolaan perbekalan farmasi.",
},
{
icon: <FaUserNurse />,
title: "Praktik Pelayanan Kesehatan",
place: "puskesmas adiwerna",
year: "2024",
desc: "Memberikan informasi obat dan membantu pelayanan kesehatan kepada pasien.",
},
];

export default function Experience() {
return (
<section
    id="experience"
    className="py-24 px-6"
>
    <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">


        <h2 className="text-5xl font-bold mt-6 text-slate-800">
        Pengalaman Praktik
        </h2>

        <p className="text-gray-500 mt-4">
        Pengalaman yang saya peroleh selama pendidikan farmasi
        </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">

        {experiences.map((item) => (
        <div
            key={item.title}
            className="
            relative
            overflow-hidden
            bg-white
            rounded-[32px]
            p-8
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-2
            "
        >
            <div className="
            absolute
            top-0
            right-0
            w-40
            h-40
            bg-rose-100
            rounded-full
            blur-3xl
            " />

            <div
            className="
                relative
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-rose-400
                to-pink-400
                flex
                items-center
                justify-center
                text-white
                text-2xl
                mb-6
            "
            >
            {item.icon}
            </div>

            <span className="text-rose-500 font-medium">
            {item.year}
            </span>

            <h3 className="text-2xl font-bold mt-2">
            {item.title}
            </h3>

            <p className="text-pink-500 mt-2">
            {item.place}
            </p>

            <p className="text-gray-500 mt-4 leading-7">
            {item.desc}
            </p>
        </div>
        ))}

    </div>

    </div>
</section>
);
}