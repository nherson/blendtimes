export function Header() {
  return (
    <div className="grid grid-cols-12 text-center my-2">
      <div className="col-span-6">
        <p className="text-xl bold">Beer Name</p>
      </div>
      <div className="col-span-2">
        <p className="text-xl bold">Parts</p>
      </div>
      <div className="col-span-2">
        <p className="text-xl bold">Weight (lbs)</p>
      </div>
      <div className="col-span-2">
        <p className="text-xl bold">Cumulative (lbs)</p>
      </div>
    </div>
  );
}
