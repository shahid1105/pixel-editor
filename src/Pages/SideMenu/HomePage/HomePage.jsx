import { FaDesktop, FaImages } from "react-icons/fa";
import {
  // LuFlipHorizontal2,
  // LuFlipVertical2,
  LuImagePlus,
  // LuRedo2,
  // LuRotateCcw,
  // LuRotateCw,
  // LuUndo2,
} from "react-icons/Lu";
import { SiGooglesheets } from "react-icons/Si";
import img1 from "../../../../public/ps.png";
import img2 from "../../../../public/ai.png";
import img3 from "../../../../public/pdf.png";
import img4 from "../../../../public/raw.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../../Redux/Store";
import Modal from "../../Component/About/Canvas/Modal";
import { useState } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(setSelectedImage(imageUrl));
      // ... Redirect or navigate to the editor page
      // ... Redirect or navigate to the editor page
      navigate("/iconMenu");
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();

    // Get the dropped files
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      dispatch(setSelectedImage(imageUrl));
      navigate("/iconMenu"); // Navigate to ImageEditor component
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="md:mx-auto md:max-w-screen-md lg:max-w-screen-lg fixe ">
      <h3 className="text-4xl text-gray-400 md:text-5xl font-bold text-center uppercase">
        <span className="text-purple-600 text-6xl md:text-8xl">P</span>!xel
        Editor
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 my-4">
        <button className="btn btn-outline btn-info flex items-center">
          <SiGooglesheets className="mr-2" />{" "}
          <Link to="" onClick={() => setShowModal(true)}>New Project</Link>
          
        </button>

        <label
          htmlFor="fileInput"
          className="btn btn-outline btn-info flex items-center">
          <FaDesktop className="mr-2" /> Open From Computer
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      <div className="text-center">
        <button className="btn btn-outline btn-info">
          <FaImages className="mr-2" />
          <Link to="/iconMenu"> Templates</Link>
        </button>
      </div>
      <div
        className="text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <input
          type="text"
          placeholder="Drop any file here"
          className="input input-bordered bg-gray-200 my-7 text-center md:w-[400px] w-[300px] md:h-[150px] h-[100px] border-cyan-500"
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
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {" "}
        </Modal>
      </div>
    </div>
  );
};

export default HomePage;
