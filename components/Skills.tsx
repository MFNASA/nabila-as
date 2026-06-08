import {
FaPills,
FaUsers,
FaFileMedical,
FaClipboardCheck,
FaLaptopMedical,
FaBriefcaseMedical,
} from "react-icons/fa";

const skills = [
{
icon: <FaPills />,
title: "Pelayanan Kefarmasian",
desc: "Pelayanan obat dan informasi kesehatan kepada pasien.",
},
{
icon: <FaUsers />,
title: "Komunikasi Pasien",
desc: "Mampu berinteraksi dengan pasien secara baik dan profesional.",
},
{
icon: <FaFileMedical />,
title: "Administrasi Farmasi",
desc: "Pengelolaan data, resep, dan administrasi kesehatan.",
},
{
icon: <FaClipboardCheck />,
title: "Dispensing Obat",
desc: "Menyiapkan dan menyerahkan obat sesuai prosedur.",
},
{
icon: <FaLaptopMedical />,
title: "Microsoft Office",
desc: "Menguasai Word, Excel, dan PowerPoint.",
},
{
icon: <FaBriefcaseMedical />,
title: "Kerja Sama Tim",
desc: "Mampu bekerja sama dalam lingkungan kerja kesehatan.",
},
];

export default function Skills() {
return (
<section
    id="skills"
    className="py-24 px-6"
>
    <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-slate-800">
        Keahlian
        </h2>

        <p className="text-gray-500 mt-3">
        Kompetensi yang saya miliki di bidang farmasi dan pelayanan kesehatan
        </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((skill) => (
        <div
            key={skill.title}
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            bg-white
            p-8
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-2
            "
        >
            {/* Glow */}
            <div
            className="
                absolute
                top-0
                right-0
                w-32
                h-32
                bg-rose-100
                rounded-full
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition
            "
            />

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
            {skill.icon}
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
            {skill.title}
            </h3>

            <p className="text-gray-500 leading-7">
            {skill.desc}
            </p>

            <div
            className="
                mt-6
                h-1
                w-0
                bg-gradient-to-r
                from-rose-400
                to-pink-400
                group-hover:w-full
                transition-all
                duration-500
            "
            />
        </div>
        ))}

    </div>
    </div>
</section>
);
}