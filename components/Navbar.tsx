export default function Navbar() {
return (
<header className="fixed top-0 left-0 w-full z-50 px-6 py-5">
    <div
    className="
        w-full
        bg-gradient-to-r
        from-rose-500
        via-pink-500
        to-rose-400
        shadow-xl
        rounded-2xl
        px-10
        py-4
        flex
        items-center
        justify-between
    "
    >
    {/* Nama */}
    <div>
        <h1 className="font-bold text-xl text-white">
        Nabila Amelia
        </h1>

        <p className="text-sm text-rose-100">
        A.Md.Farm
        </p>
    </div>

    {/* Menu */}
    <nav className="hidden md:flex items-center gap-8">
        <a
        href="#hero"
        className="text-white/90 hover:text-white transition"
        >
        Tentang
        </a>

        <a
        href="#education"
        className="text-white/90 hover:text-white transition"
        >
        Pendidikan
        </a>

        <a
        href="#skills"
        className="text-white/90 hover:text-white transition"
        >
        Keahlian
        </a>

        <a
        href="#experience"
        className="text-white/90 hover:text-white transition"
        >
        Pengalaman
        </a>

        <a
href="#portfolio"
className="text-white/90 hover:text-white transition"
>
Project
</a>

        <a
        href="#contact"
        className="
            bg-white
            text-rose-500
            px-5
            py-2
            rounded-xl
            font-medium
            hover:scale-105
            transition-all
        "
        >
        Kontak
        </a>
    </nav>
    </div>
</header>
);
}