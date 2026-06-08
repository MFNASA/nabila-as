export default function Footer() {
return (
<footer className="mt-24">
    <div
    className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        rounded-t-[40px]
        bg-gradient-to-r
        from-rose-400
        via-pink-400
        to-rose-500
        text-white
    "
    >
    <div className="text-center">

        <h3 className="text-2xl font-bold">
        Nabila Amelia Syaputri
        </h3>

        <p className="mt-2 text-rose-100">
        Ahli Madya Farmasi
        </p>

        <div className="w-24 h-1 bg-white/40 mx-auto rounded-full mt-6" />

        <p className="mt-6 text-sm text-rose-50">
        © {new Date().getFullYear()} Nabila Amelia Syaputri.
        All Rights Reserved.
        </p>

    </div>
    </div>
</footer>
);
}