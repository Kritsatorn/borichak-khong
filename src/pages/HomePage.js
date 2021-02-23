import { useState } from "react";
const Donator = ({ setThings, TrackCode, setTrackCode }) => {
  const [textInput, setTextInput] = useState("");
  const onInputSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setThings(textInput);
    setTrackCode("1234");
    console.log(TrackCode);
  };
  return (
    <div>
      <header className="mt-8 text-center text-blue-300 font-black text-3xl">
        Donator Section
      </header>
      <form
        className="w-10/12 md:w-7/12 mx-auto mt-4 pb-1 border-blue-400 border-b-2"
        onSubmit={onInputSubmit}
      >
        <input
          className="w-full focus:outline-none text-center bg-gray-100"
          type="text"
          value={textInput}
          placeholder="ใส่รายละเอียดของมาจิ"
          onChange={(event) => setTextInput(event.target.value)}
        />
      </form>
      <div className="mt-4 text-center font-bold text-2xl text-red-400">
        {TrackCode
          ? `Hooray Input Things !!! 
        Track Code :  ${TrackCode}`
          : null}
      </div>
    </div>
  );
};

const DonateTaker = ({ Things, TrackCode }) => {
  const [textInput, setTextInput] = useState("");
  const [open, setOpen] = useState(false);
  const onInputSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (textInput === TrackCode) setOpen(true);
    else setOpen(false);
    console.log(TrackCode);
  };
  return (
    <div>
      <header className="mt-8 text-center text-yellow-400 font-black text-3xl">
        Donation recipient Section
      </header>
      <form
        className="w-10/12 md:w-7/12 mx-auto mt-4 pb-1 border-yellow-600 border-b-2"
        onSubmit={onInputSubmit}
      >
        <input
          className="w-full focus:outline-none text-center bg-gray-100"
          type="text"
          value={textInput}
          placeholder="ใส่ หมายเลข Track Code มาาา"
          onChange={(event) => setTextInput(event.target.value)}
        />
      </form>
      <div className="mt-4 text-center font-bold text-2xl text-green-700">
        {open ? ` Hooray this is Things ${Things}  ` : null}
      </div>
    </div>
  );
};

export default function HomePage() {
  const [Who, setWHo] = useState(0);
  const [Things, setThings] = useState("");
  const [TrackCode, setTrackCode] = useState("");
  const handleClick = (who) => {
    setWHo(who);
  };
  return (
    <div className="w-full h-screen bg-gray-100 ">
      <header className="bg-yellow-300 text-center mt-8 text-5xl font-black ">
        BORICHAK KHONG
      </header>
      <div className=" mt-10 flex space-x-24 justify-center">
        <button
          className="py-3 px-5 rounded-3xl bg-green-200 uppercase"
          onClick={() => handleClick(1)}
        >
          donator
        </button>
        <button
          className="py-3 px-5 rounded-3xl bg-blue-200 uppercase"
          onClick={() => handleClick(2)}
        >
          Donation recipient
        </button>
      </div>
      <div className="mt-8 text-center">
        {Who === 0
          ? null
          : ` Login Sucess as ${
              Who === 1 ? "Donater" : "Donation recipient"
            } !!!!`}
      </div>
      {Who === 1 && (
        <Donator
          setThings={setThings}
          TrackCode={TrackCode}
          setTrackCode={setTrackCode}
        />
      )}
      {Who === 2 && <DonateTaker Things={Things} TrackCode={TrackCode} />}
    </div>
  );
}
