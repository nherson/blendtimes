export function Entry({ entry, onRemove, onUpdate, weight, cumulative }) {
  const onNameChange = function (e) {
    onUpdate({
      name: e.target.value,
      parts: entry.parts,
    });
  };

  const onPartsChange = function (e) {
    const re = new RegExp("^[0-9]*$");
    const isNumeric = re.test(e.target.value);
    if (e.target.value === "") {
      onUpdate({
        name: entry.name,
        parts: 0,
      });
    } else if (isNumeric) {
      onUpdate({
        name: entry.name,
        parts: parseInt(e.target.value),
      });
    }
  };

  let partsStyle;
  if (Number.isInteger(entry.parts)) {
    partsStyle =
      "border-b border-gray-300 focus:border-blue-400 focus:border-b-2";
  } else {
    partsStyle =
      "border-b-2 border-red-500 focus:border-red-500 focus:border-b-2";
  }
  return (
    <>
      <div className="p-3 flex flex-row col-span-6">
        <div className="shrink">
          <button onClick={onRemove} className="p-1 text-red">
            x
          </button>
        </div>
        <div className="grow">
          <input
            className="mx-2 border-b border-gray-300 outline-none box-border w-3/4 focus:border-blue-400 focus:border-b-2"
            type="text"
            name="name"
            value={entry.name}
            onChange={onNameChange}
          />
        </div>
      </div>
      <div className="p-3 col-span-2">
        <input
          className={`mx-2 outline-none w-3/4 ${partsStyle}`}
          type="text"
          name="parts"
          value={entry.parts}
          onChange={onPartsChange}
        />
      </div>
      <div className="p-3 col-span-2">
        <p>{weight.toFixed(2)}</p>
      </div>
      <div className="p-3 col-span-2">
        <p>{cumulative.toFixed(2)}</p>
      </div>
    </>
  );
}
