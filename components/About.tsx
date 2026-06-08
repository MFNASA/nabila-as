import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
return (
<section
    id="education"
    className="py-24 px-6"
>
    <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">
    

        <h2 className="text-5xl font-bold mt-6 text-slate-800">
        Riwayat Pendidikan
        </h2>

        <p className="text-gray-500 mt-4">
        Perjalanan pendidikan di bidang farmasi
        </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">

        {/* Universitas */}
        <div
        className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-white
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

        <div className="
            relative
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-rose-400
            to-pink-400
            text-white
            flex
            items-center
            justify-center
            text-2xl
            mb-6
        ">
            <FaGraduationCap />
        </div>

        <span className="text-rose-500 font-medium">
            2023 - 2026
        </span>

        <h3 className="text-2xl font-bold mt-2">
            D3 Farmasi
        </h3>

        <p className="text-gray-500 mt-3">
            Universitas Harkat Negeri Tegal, fokusi pada bidang farmasi klinik dan pelayanan kesehatan. dengan IPK 3+
        </p>
        </div>

        {/* SMK */}
        <div
        className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-white
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
            bg-pink-100
            rounded-full
            blur-3xl
        " />

        <div className="
            relative
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-pink-400
            to-purple-400
            text-white
            flex
            items-center
            justify-center
            text-2xl
            mb-6
        ">
            <FaSchool />
        </div>

        <span className="text-pink-500 font-medium">
            2020 - 2023
        </span>

        <h3 className="text-2xl font-bold mt-2">
            SMK Farmasi
        </h3>

        <p className="text-gray-500 mt-3">
            SMK Saka Medika Tegal, jurusan farmasi dengan fokus pada pelayanan kesehatan dan pengelolaan obat, lulus dengan predikat sangat memuaskan.
        </p>
        </div>

    </div>

    </div>
</section>
);
}