import { FaDesktop, FaImages } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/Si";
import img1 from "../../../../public/ps.png";
import img2 from "../../../../public/ai.png";
import img3 from "../../../../public/pdf.png";
import img4 from "../../../../public/raw.png";

const HomePage = () => {
  return (
    <div className="md:mx-auto md:max-w-screen-md lg:max-w-screen-lg">
      <h3 className="text-4xl text-gray-400 md:text-5xl font-bold text-center mt-4">
        <span className="text-purple-600 text-6xl md:text-8xl">P</span>ixel
        Editor
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 my-4">
        <button className="btn btn-outline btn-info flex items-center">
          <SiGooglesheets className="mr-2" /> New Project
        </button>
        <button className="btn btn-outline btn-info flex items-center">
          <FaDesktop className="mr-2" /> Open From Computer
        </button>
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-info">
          <FaImages className="mr-2" /> Templates
        </button>
      </div>
      <div className="text-center">
        <input
          type="text"
          placeholder="Drop any file here"
          className="input input-bordered bg-gray-200 my-7 text-center md:w-[400px] w-[300px] md:h-[200px] h-[100px]"
        />
      </div>
      <div className="flex justify-center gap-2 mb-5 ">
        <div className="">
          <img className="w-12 mr-2" src={img1} alt="" />
          <h3 className="text-center text-gray-400">.PSD</h3>
        </div>
        <div className="">
          <img className="w-12 mr-2" src={img2} alt="" />
          <h3 className="text-center text-gray-400">.AI</h3>
        </div>
        <div className="">
          <img className="w-12 mr-2" src={img3} alt="" />
          <h3 className="text-center text-gray-400">.PDF</h3>
        </div>
        <div className="">
          <img className="w-12 mr-2" src={img4} alt="" />
          <h3 className="text-center text-gray-400">RAW</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
