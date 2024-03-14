/* eslint-disable react/prop-types */
export default function Menu({ nama, harga, onClick, bg, jumlahKlik}) {
  return (
    <div
      className="my-5 text-[32px] text-center mx-10 cursor-pointer px-2 rounded-xl hover:bg-green-400 hover:text-white transition duration-300"
      onClick={() => onClick(harga, bg)}
    >
      <p>{nama}</p>
      <p>Rp.{harga}</p>
      <p>{jumlahKlik}</p>
    </div>
  );
}
