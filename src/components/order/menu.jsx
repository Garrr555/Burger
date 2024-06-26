/* eslint-disable react/prop-types */
export default function Menu({ nama, harga, onClick, bg, jumlahKlik, x }) {
  return (
    <div
      className="my-5 text-[32px] text-center mx-10 cursor-pointer px-2 rounded-xl hover:bg-green-400 hover:text-white transition duration-300"
      onClick={() => onClick(harga, bg)}
    >
      <p>{nama}</p>
      <p>Rp.{harga}</p>
      <div className="flex justify-center">
        <p>
          {jumlahKlik}
          {x}
        </p>
        <p className={`${jumlahKlik > 0 ? "" : "hidden"}`}>x</p>
      </div>
    </div>
  );
}
