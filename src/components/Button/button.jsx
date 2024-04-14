// eslint-disable-next-line react/prop-types
export default function Button({ nama, variant }) {
  const variants = {
    primary: "bg-green-600 border-green-600 text-white ",
    secondary:
      " text-green-600 bg-green-600 group-hover:text-white group-hover:w-full w-5 flex justify-start",
  };

  const variants2 = {
    primary: "",
    secondary: "ml-16 ",
  };

  return (
    <div className="w-full rounded-md font-bold text-sm block border border-green-600 group overflow-hidden">
      <button
        className={`w-full py-2 rounded-md group-hover:opacity-90 transition-all duration-700 ease-in-out ${variants[variant]}`}
      >
        <div className={`text-center ${variants2[variant]}`}>{nama}</div>
      </button>
    </div>
  );
}
