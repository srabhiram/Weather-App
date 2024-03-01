/* eslint-disable react/no-unknown-property */
export const Skeleton = () => {
  return (
    <>
      <div className=" cursor-default container mx-auto bg-white/20 items flex flex-col justify-center items-center rounded-md">
        <div className="animate-pulse flex p-2  relative items-center justify-center mx-3">
          <div className="w-48 h-10 bg-white/80 p-3 text-lg rounded-lg mt-3 outline-none border-none focus:outline-2 focus:outline-black/20 focus:ring-2 focus:ring-gray-outline-black/20 focus:border-2 focus:border-gray-outline-black/20 "></div>{" "}
          <div className="p-2">
            <button className="absolute right-[72px]   top-8   opacity-40  text-center"></button>
          </div>{" "}
          <div className="">
            <button
              id="current_location"
              className="p-2 w-8 h-8  mt-3 static rounded-lg bg-white/80 hover:bg-white  colors"
            >
              <img alt="" className=" p-0.5 m-0" />
            </button>
          </div>
        </div>
        <div className="flex w-[15rem] rounded-md space-y-2  h-[16rem] bg-white/55 flex-col gap-1 items-center animate-pulse">
          <div className=" ">
            <svg
              width={120}
              className="fill-black/20"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              xmlSpace="preserve"
            >
              <g transform="translate(-570 -80)">
                <g
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="579" cy="92" r="2" />
                  <polygon points="590.908,86 590.315,88 595,88 595,103 585.871,103 585.278,105 597,105 597,86   " />
                  <path d="M586.167,102H588h6v-2.857c-1.997-2.776-2.954-6.657-4.883-7.098L586.167,102z" />
                  <path d="M588.041,81.716L586.771,86H573v19h8.143l-1.102,3.716l1.918,0.568l8-27L588.041,81.716z M583.31,97.682    c-0.668-0.861-1.34-1.396-2.06-1.396c-1.955,0-2.674,4.157-5.25,4.999V102h2.25h3.781l-0.296,1H575V88h11.18L583.31,97.682z" />
                </g>
              </g>
            </svg>
          </div>
          <p className="h-6 rounded-sm w-[210px] bg-white/50 font-regular p-1 text-[48px] m-0">
            {}
            <sup></sup> <span className="font-regular  text-2xl"></span>
          </p>
          <h1
            id="description"
            className="h-6 w-[210px] bg-white/50 normal-case font-medium text-xl px-2"
          >
            {}
          </h1>{" "}
          <h1 className="h-6 w-[210px] bg-white/50 font-medium text-xl px-2">
            {}
          </h1>
        </div>
        <div className="animate-pulse bg-white/55 mx-2 my-4 w-[240px] h-[4rem] items-center  rounded-md  grid grid-cols-3 gap-3 p-1">
          <div id="wind" className="flex flex-col items-center">
            <span className="h-6 w-12 bg-white/55">{}</span>
            <span className="camelcase h-6 w-12 bg-white/55"></span>
          </div>
          <div id="pressure" className="flex flex-col items-center">
            <span className="h-6 w-12 bg-white/55">
              {" "}
              {}
              <sub></sub>
            </span>

            <span className="h-6 w-12 bg-white/55"></span>
          </div>
          <div className="flex flex-col items-center " id="humidity">
            <span className="h-6 w-12 bg-white/55">{}</span>
            <span className="h-6 w-12 bg-white/55">{} </span>
          </div>
        </div>
      </div>
    </>
  );
};
