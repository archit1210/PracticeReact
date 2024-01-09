import { useState } from "react";

function App() {
  const [temperature, setTempreture] = useState("");
  const [result, setResult] = useState(0);

  const convertToCelsius = (input) => {
    return parseFloat(input); // Celsius to Celsius is a 1:1 conversion
  };

  const convertToFahrenheit = (input) => {
    const celsius = parseFloat(input);
    return (celsius * 9) / 5 + 32;
  };

  const convertToKelvin = (input) => {
    const celsius = parseFloat(input);
    return celsius + 273.15;
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-1/3 text-center">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter the temperature"
          value={temperature}
          onChange={(e) => setTempreture(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 mr-10"
          onClick={() => setResult(convertToCelsius(temperature))}
        >
          Celcius
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 mr-10"
          onClick={() => setResult(convertToKelvin(temperature))}
        >
          Kelvin
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 mr-10"
          onClick={() => setResult(convertToFahrenheit(temperature))}
        >
          Farenhite
        </button>

        <div className="mt-20 text-center">
          <p className="text-xl font-semibold mb-2">Result</p>
          <p className="text-3xl text-blue-500">{result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
