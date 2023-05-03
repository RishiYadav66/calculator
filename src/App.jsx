import { useState } from "react";
import "./App.css";

function App() {
  const [input, setinput] = useState("");
  const calc = () => {
    try {
      setinput(eval(input).toString());
    } catch (e) {
      setinput("Error");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">
      <div className=" bg-gray-800 rounded-xl">
        <input
          value={input}
          className="rounded-xl w-[400px] h-[80px] text-gray-200 bg-gray-700 font-bold text-right px-4"
          type="text"
        />
        <div className="grid grid-cols-4 gap-2 h-[400px] p-2">
          <button
            onClick={(e) => setinput("")}
            className="text-white col-span-2 outline outline-1 outline-gray-400 rounded-lg"
          >
            Clear
          </button>
          <button
            onClick={(e) => setinput(input.slice(0, -1))}
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            bksp
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="/"
            className="text-white outline outline-1 outline-gray-400 text-lg rounded-lg"
          >
            &divide;
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="7"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            7
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="8"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            8
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="9"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            9
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="*"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            &times;
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="4"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            4
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="5"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            5
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="6"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            6
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="-"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            -
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="1"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            1
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="2"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            2
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="3"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            3
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="+"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            +
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="0"
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            0
          </button>
          <button
            onClick={(e) => setinput(input.concat(e.target.value))}
            value="."
            className="text-white outline outline-1 outline-gray-400 rounded-lg"
          >
            .
          </button>
          <button
            onClick={calc}
            value="="
            className="text-white col-span-2 outline outline-1 outline-gray-400 rounded-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
