/* eslint-disable react/prop-types */
export const Weather = (props) => {
 

  return (
    <>
      <div className=" cursor-default container mx-auto bg-white/20 items flex flex-col justify-center items-center rounded-md">
        <div className="flex p-2 relative items-center justify-center mx-3">
          <div id="search-box">
            <input
              type="text"
              name="city"
              placeholder="Enter City name"
              className="w-full h-full bg-white/80 p-3 text-lg rounded-lg mt-3 outline-none border-none focus:outline-2 focus:outline-black/20 focus:ring-2 focus:ring-gray-outline-black/20 focus:border-2 focus:border-gray-outline-black/20 "
            />
          </div>{" "}
          <div className="p-2" id="search-icon">
            <button>
              <img
                className="absolute right-[72px]   top-8   opacity-40  text-center"
                src={props.search}
                width={24}
              />
            </button>
          </div>{" "}
          <div id="gps">
            <button
              id="current_location"
              className="p-2  mt-3 static rounded-lg bg-white/80 hover:bg-white focus:transition-colors colors"
              onClick={props.click}
            >
              <img src={props.gps} alt="gps" className="w-6 p-0.5 m-0" />
            </button>
          </div>
        </div>

        <div id="info" className="flex flex-col gap-1 items-center">
          <img src={props.icon} alt="Weather Icon" className="mt-5 p-0.5" />{" "}
          <h1
            id="Location-name"
            className=" normal-case font-thin text-[27px] px-2"
          >
            {props.data.name}
          </h1>
          <p className="font-thin p-1 text-5xl m-0">
            {props.data.main.temp}
            <sup>°</sup>
          </p>
          <h1 className=" font-regular text-xl px-2">
            {props.data.weather[0].main}
          </h1>
        </div>

        <div className="bg-white/55 mx-2 my-4 rounded-md  grid grid-cols-3 gap-4 p-1.5 text-center">
          <div
            id="wind"
            className="flex flex-col items-center hover:bg-white/35 rounded-sm "
          >
            <span>{props.data.wind.speed}</span>
            <img
              src={props.windflow}
              width={22}
              alt="weather"
              className="py-1"
            />
            <span>Wind flow</span>
          </div>

          <div
            id="pressure"
            className="flex flex-col items-center hover:bg-white/35 rounded-sm"
          >
            <span>
              {props.data.main.pressure}
              <span className="text-[9px]"> hPa</span>
            </span>
            <img
              src={props.pressure}
              width={21}
              alt="weather"
              className="py-1"
            />
            <span>Pressure</span>
          </div>

          <div
            className="flex flex-col items-center hover:bg-white/35 rounded-sm"
            id="humidity"
          >
            <span>{props.data.main.humidity}%</span>
            <img
              src={props.humidity}
              width={22}
              alt="weather"
              className="py-1"
            />
            <span>Humidity</span>
          </div>
        </div>
      </div>
    </>
  );
};
