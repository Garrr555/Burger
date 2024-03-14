/* eslint-disable react/prop-types */
export default function Gambar ({gambar, nama}) {

    const model = {
        yellow: "bg-yellow-500 p-2",
        green: "bg-green-600 p-2",
        red: "bg-red-500 p-3",
        greenslow: "bg-green-400 p-1",
        redhard: "bg-red-800 p-4",
        white: "bg-slate-300 p-1",
        pink: "bg-pink-600 p-1",

    }

    return(
        <div className={` rounded-xl w-[450px] text-white ${model[gambar]}`}>
            {nama}
        </div>
    )
}