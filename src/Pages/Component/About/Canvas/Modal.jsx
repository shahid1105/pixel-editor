import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
// import { GrDownload } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import WebItem from "../DefaultPage/WebItem";

const Modal = ({ showModal, setShowModal }) => {
  const [canvasInfo, setCanvasInfo] = useState(null);

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setCanvasInfo(data);

    setShowModal(false);

    navigate(
      `/iconMenu?name=${data.name}&height=${data.height}&width=${data.width}`
    );
  };
  // const [showModal, setShowModal] = React.useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - offset.x;
    const deltaY = e.clientY - offset.y;

    const modal = document.getElementById("modal-container");
    modal.style.left = `${modal.offsetLeft + deltaX}px`;
    modal.style.top = `${modal.offsetTop + deltaY}px`;

    setOffset({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
        Open regular modal
      </button> */}
      {showModal ? (
        <>
          <div
            id="modal-container"
            className={` justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none${
              isDragging ? " cursor-move" : ""
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}>
            <div className="relative w-[60%] md:w-[500px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-1 ">
                  <h3 className="text-md text-black font-semibold">
                    New Document
                  </h3>
                  <button
                    className="avatar my-auto text-black font-bold p-1"
                    onClick={() => setShowModal(false)}>
                    <span className="h-4 w-4 pb-2">
                      <RxCross2></RxCross2>
                    </span>
                  </button>
                </div>
                {/* header 2  */}
                {/* <div className="flex items-start justify-between px-5 py-1 text-white bg-gray-900 border-b border-solid border-gray-500">
                  <ul className="flex gap-4">
                    <li>
                      <Link>Recent</Link>
                    </li>
                    <li>
                      <Link>Save</Link>
                    </li>
                    <li>
                      <Link>Photo</Link>
                    </li>
                    <li>
                      <Link>Print</Link>
                    </li>
                    <li>
                      <Link>Web</Link>
                    </li>
                    <li>
                      <Link>Mobile</Link>
                    </li>
                  </ul>
                </div> */}
                {/*body*/}
                <div className="grid grid-cols-1 md:grid-cols-12 bg-black text-white overflow-y-scroll">
                  {/* part1 */}
                  <div className="col-span-6 border border-solid border-slate-600 hidden md:block lg:block">
                    <WebItem></WebItem>
                  </div>
                  {/* part2 */}
                  <div className="col-span-6 bg-gray-900 relative  flex-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="p-2 md:px-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-white">Name</span>
                          </label>
                          <input
                            {...register("name")}
                            type="text"
                            defaultValue="Untitled-1"
                            placeholder="name here"
                            className=" text-input input-bordered w-full max-w-xs bg-white text-black rounded"
                          />
                          {errors.exampleRequired && (
                            <span>This field is required</span>
                          )}
                          {/* Width */}
                          <div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text text-white">
                                  Width
                                </span>
                              </label>
                              <div className="flex md:flex-row flex-col gap-2 text-black">
                                <input
                                  {...register("width")}
                                  type="number"
                                  defaultValue="500"
                                  placeholder="width"
                                  className="px-2 w-full rounded-sm"
                                />
                                <select {...register("selector")}>
                                  <option value="pixels">Pixels</option>
                                  <option value="inches">Inches</option>
                                  <option value="millimeters">Millimeters</option>
                                </select>
                              </div>
                              {errors.exampleRequired && (
                                <span>This field is required</span>
                              )}
                            </div>
                          </div>
                          {/* height  */}
                          <div>
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text text-white">
                                  Height
                                </span>
                              </label>
                              <div className="flex md:flex-row flex-col gap-2 text-black">
                                <input
                                  {...register("height")}
                                  type="number"
                                  defaultValue="800"
                                  placeholder="height"
                                  className="px-2 w-full rounded-sm"
                                />
                                <select {...register("selector")}>
                                  <option value="pixels">Pixels</option>
                                  <option value="inches">Inches</option>
                                  <option value="millimeters">Millimeters</option>
                                </select>
                              </div>
                              {errors.exampleRequired && (
                                <span>This field is required</span>
                              )}
                            </div>
                          </div>

                          {/* Resolution */}
                          {/* <div className="form-control">
                            <label className="label">
                              <span className="label-text text-white">
                                Resolution
                              </span>
                            </label>
                            <div className="flex md:flex-row flex-col gap-2 text-black">
                              <input
                                {...register("resolution")}
                                type="number"
                                placeholder="Resolution"
                                className="px-2 w-full md:w-[40%] rounded-sm"
                              />
                              <div className="">
                                <select className="w-full md:w-auto" {...register("resolution")}>
                                  <option value="inch">Inch</option>
                                  <option value="centimeter">Centimeter</option>
                                </select>
                              </div>
                            </div>
                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}
                          </div> */}
                          {/* Color Mode */}
                          {/* <div className="form-control">
                            <label className="label">
                              <span className="label-text text-white">
                                Color Mode
                              </span>
                            </label>
                            <div className="flex md:flex-row flex-col gap-2 text-black">
                              <select {...register("color")}>
                                <option value="color">RGB color</option>
                              </select>
                              <div>
                                <select className="w-full md:w-auto" {...register("bit")}>
                                  <option value="bit">8 bit</option>
                                  <option value="bit">16 bit</option>
                                  <option value="bit">32 bit</option>
                                </select>
                              </div>
                            </div>
                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}
                          </div> */}

                          {/* Color Mode */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-white">
                                Color Mode
                              </span>
                            </label>
                              <div className="">
                                <input
                                  {...register("color")}
                                  type="color"
                                  placeholder="Resolution"
                                  className="px-2 w-full rounded-sm"
                                />
                            </div>
                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}
                          </div>
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary mb-2 btn-sm mx-4">
                            {" "}
                            Create
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
