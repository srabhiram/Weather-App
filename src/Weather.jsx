/* eslint-disable react/prop-types */
export const Weather = (props) => {
  console.log(props.data);

  return (
    <>
      <div className=" cursor-default container mx-auto bg-white/20 items flex flex-col justify-center items-center rounded-md">
        <div className="flex gap-2 items-center justify-center mx-3">
          <input
            type="text"
            name="city"
            placeholder="Enter City name"
            className="w-full p-2 rounded-lg mt-3  place-holder-center"
          />
          <button>searach</button>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img src={props.icon} alt="Weather Icon" className="mt-5 p-0.5" />{" "}
          <p className="font-regular p-1 text-[48px] m-0">
            {props.data.main.temp}
            <sup>°</sup>C <span className="font-regular  text-2xl"></span>
          </p>
          <h1
            id="description"
            className=" normal-case font-medium text-xl px-2"
          >
            {props.data.name}
          </h1>{" "}
          <h1 className=" font-medium text-xl px-2">
            {props.data.weather[0].main}
          </h1>
        </div>
        <div className="bg-white/55 mx-2 my-4  rounded-md  grid grid-cols-3 gap-3 p-1">
          <div id="wind" className="flex flex-col items-center">
            <span>{props.data.wind.speed}</span>
            <span className="camelcase">Wind flow</span>
          </div>
          <div id="pressure" className="flex flex-col items-center">
            <span>
              {" "}
              {props.data.main.pressure}
              <sub> hPa</sub>
            </span>

            <span>Pressure</span>
          </div>
          <div className="flex flex-col items-center" id="humidity">
            <span>{props.data.main.humidity}</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </>
  );
};
