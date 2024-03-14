import { useState } from "react";
import Menu from "./menu";
import Gambar from "./gambarBurger";

export default function Order() {
  const [order, setOrder] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [totalHarga, setTotalHarga] = useState(0);
  const [gambarMenu, setGambarMenu] = useState([]);
  const [jumlahKlik, setjumlahKlik] = useState({});

  const klik = (harga, bg, nama) => {
    if (gambarMenu.length >= 5) {
      alert("Sudah Penuh");
      return;
    }

    if (!isClicked) {
      setOrder(true);
      setIsClicked(true);
    }

    setTotalHarga(totalHarga + harga);
    setGambarMenu([{ bg, harga, nama }, ...gambarMenu]);
    setjumlahKlik({ ...jumlahKlik, [nama]: (jumlahKlik[nama] || 0) + 1 });
  };

  const resetOrder = () => {
    setOrder(false);
    setIsClicked(false);
    setTotalHarga(0);
    setGambarMenu([]);
    setjumlahKlik({});
  };

  const bahan = [
    {
      nama: "Cheese",
      harga: 5000,
      bg: "yellow",
    },
    {
      nama: "Lettuce",
      harga: 1000,
      bg: "green",
    },
    {
      nama: "Tomato",
      harga: 2500,
      bg: "red",
    },
    {
      nama: "Pickles",
      harga: 2000,
      bg: "greenslow",
    },
    {
      nama: "Meat",
      harga: 5000,
      bg: "redhard",
    },
    {
      nama: "Mayo",
      harga: 4000,
      bg: "white",
    },
    {
      nama: "Sauce",
      harga: 4000,
      bg: "pink",
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center gap-[500px]">
        <div className="mb-9 text-[32px]  px-4">
          <p className={`${order ? "" : "hidden"}`}>
            Total: <span className="text-green-500 ">Rp.{totalHarga}</span>
          </p>
        </div>
        <div className="flex justify-center items-center mb-10 gap-5">
          <button
            className={`bg-[#D9D9D9] w-[122px] h-[46px] rounded-lg text-[14px] transition duration-300 ${
              order
                ? "bg-green-700 border border-green-700 text-white font-bold hover:opacity-80"
                : "bg-slate-300"
            }`}
          >
            Order Burger
          </button>
          <button
            className={` w-[122px] h-[46px] rounded-lg text-[14px] transition duration-300 bg-white border border-green-500 text-green-700 hover:bg-red-600 hover:border-none hover:text-white ${
              order ? "" : "hidden"
            }`}
            onClick={resetOrder}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="burger">
        <div className="bg-[#D6C18B] p-10 my-3 w-[472px] mx-auto rounded-t-full"></div>
        <ul className="text-center">
          {gambarMenu.map((menu, index) => (
            <li key={index} className="flex justify-center my-2">
              <Gambar gambar={menu?.bg} nama={menu?.nama} />
            </li>
          ))}
        </ul>

        <div className="bg-[#D6C18B] p-5 my-3 w-[472px] mx-auto rounded-b-full"></div>
      </div>

      <div className=" flex flex-wrap justify-center border rounded-xl w-[884px]  mx-auto gap-1 border-green-700 bg-green-50">
        {bahan.map((item, i) => (
          <Menu
            key={i}
            nama={item?.nama}
            harga={item?.harga}
            bg={item?.bg}
            onClick={() => klik(item?.harga, item?.bg, item?.nama)}
            jumlahKlik={jumlahKlik[item?.nama]}
          />
        ))}
      </div>
    </div>
  );
}
