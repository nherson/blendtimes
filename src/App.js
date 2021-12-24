import { useState } from "react";
import { Entry } from "./Entry";
import { Header } from "./Header";

const WATER_POUNDS_PER_GALLON = 8.34;
const GALLONS_TOTAL = 5;
const DESIRED_WEIGHT = WATER_POUNDS_PER_GALLON * GALLONS_TOTAL;

function App() {
  const [entries, setEntries] = useState([
    {
      name: "",
      parts: 0,
    },
  ]);

  const addEntry = function () {
    setEntries([
      ...entries,
      {
        name: "",
        parts: 0,
      },
    ]);
  };

  const removeEntry = function (i) {
    return function () {
      const before = entries.slice(0, i);
      const after = entries.slice(i + 1, entries.length);
      setEntries([...before, ...after]);
    };
  };

  const updateEntry = function (i) {
    return function (entry) {
      const before = entries.slice(0, i);
      const after = entries.slice(i + 1, entries.length);
      setEntries([...before, entry, ...after]);
    };
  };

  let totalParts = 0;
  entries.forEach(function (entry) {
    if (Number.isInteger(entry.parts)) {
      totalParts += entry.parts;
    }
  });
  let currentCumulative = 0;

  return (
    <div className="container mx-auto p-5 text-center">
      <div>
        <p className="text-4xl">Blend Times</p>
        <p className="text-gray-400 italic">
          Because blending homebrew is hard enough without all the math
        </p>
      </div>
      <div className="m-5">
        <Header />
        <div className="grid grid-cols-12 divide-x border rounded">
          {entries.map(function (entry, i) {
            const weight = (entry.parts / totalParts || 0) * DESIRED_WEIGHT;
            currentCumulative += weight;
            return (
              <Entry
                key={i}
                onRemove={removeEntry(i)}
                onUpdate={updateEntry(i)}
                entry={entries[i]}
                weight={weight}
                cumulative={currentCumulative}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={addEntry}
          className="bg-blue-500 p-2 rounded text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
