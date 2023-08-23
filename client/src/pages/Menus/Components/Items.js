function Items({ name, ingred, price }) {
  return (
    <div className="border-2 m-4 rounded-2xl border-primary bg-gray">
      <div className="flex justify-between  text-white p-2 rounded-2xl">
        <div className="">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="">{ingred}</p>
        </div>
        <div>
          <p
            style={{
              translate: "35% -40%",
            }}
            className="flex justify-center items-center  h-14 w-14 bg-secondary text-black font-bold p-1 rounded-full"
          >
            <span> {price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Items;
