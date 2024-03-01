export const Skeleton = ()=>{
    return (
        <>
         <div className=" cursor-default container mx-auto bg-white/20 items flex flex-col justify-center items-center rounded-md">
        <div className="flex p-2  relative items-center justify-center mx-3">
          <div>
            <input
              type="search"
              name="city"
              placeholder="Enter City name"
              className="w-full h-full bg-white/80 p-3 text-lg rounded-lg mt-3 outline-none border-none focus:outline-2 focus:outline-black/20 focus:ring-2 focus:ring-gray-outline-black/20 focus:border-2 focus:border-gray-outline-black/20 "
            />
          </div>{" "}
          <div className="p-2">
            <button>
              
            </button>
          </div>{" "}
          <div className="">
            <button
              id="current_location"
              className="p-2  mt-3 static rounded-lg bg-white/80 hover:bg-white focus:transition-colors colors"
            >
              <img  alt="" className="w-6 p-0.5 m-0" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img  alt="Weather Icon" className="mt-5 p-0.5" />{" "}
          <p className="font-regular p-1 text-[48px] m-0">
            {}
            <sup>°</sup>C <span className="font-regular  text-2xl"></span>
          </p>
          <h1
            id="description"
            className=" normal-case font-medium text-xl px-2"
          >
            {}
          </h1>{" "}
          <h1 className=" font-medium text-xl px-2">
            {}
          </h1>
        </div>
        <div className="bg-white/55 mx-2 my-4  rounded-md  grid grid-cols-3 gap-3 p-1">
          <div id="wind" className="flex flex-col items-center">
            <span>{}</span>
            <span className="camelcase">Wind flow</span>
          </div>
          <div id="pressure" className="flex flex-col items-center">
            <span>
              {" "}
              {}
              <sub> hPa</sub>
            </span>

            <span>Pressure</span>
          </div>
          <div className="flex flex-col items-center" id="humidity">
            <span>{}</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </>

    )
}