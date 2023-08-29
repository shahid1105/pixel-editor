import React from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Modal({ sendDataToCanvas }) {
  const [showModal, setShowModal] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    sendDataToCanvas(data);
    setShowModal(false);
  };

  

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[100%] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-1 ">
                  <h3 className="text-md text-black font-semibold">
                    New Document
                  </h3>
                  <button
                    className="avatar my-auto"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="h-4 w-4 pb-2">
                      <RxCross2></RxCross2>
                    </span>
                  </button>
                </div>
                {/* header 2  */}
                <div className="flex items-start justify-between px-5 py-1 text-white bg-gray-900 border-b border-solid border-gray-500">
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
                </div>
                {/*body*/}
                <div className="grid grid-cols-1 md:grid-cols-12 bg-black text-white">
                  {/* part1 */}
                  <div className="col-span-8 border border-solid border-slate-600">
                    <h3>First part</h3>
                  </div>
                  {/* part2 */}
                  <div className="col-span-4 bg-gray-900 relative  flex-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-white">
                              Preset Details
                            </span>
                          </label>
                          <div className="flex justify-center items-center">
                            <input
                              type="text"
                              placeholder="Untitled-1"
                              className=" border-solid border-b bg-gray-900 border-purple-600 w-full max-w-xs"
                            />
                            <div className="">
                            <GrDownload className="text-white"></GrDownload>
                            </div>
                          </div>
                          <label className="label">
                            <span className="label-text text-white">Name</span>
                          </label>
                          <input
                            className=" text-input input-bordered w-full max-w-xs bg-white  rounded"
                            defaultValue=""
                            placeholder=" name here"
                            {...register("name")}
                            type="text"
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
                              <div className="flex gap-2 text-black">
                                <input
                                  {...register("width")}
                                  type="number"
                                  placeholder="width"
                                  className="px-2 w-[40%] rounded-sm"
                                />
                                  <select {...register("selector")}>
                                    <option value="female">Pixels</option>
                                    <option value="male">Inches</option>
                                    <option value="other">Millimeters</option>
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
                              <div className="flex gap-2 text-black">
                                <input
                                  {...register("height")}
                                  type="number"
                                  placeholder="height"
                                  className="px-2 w-[40%] rounded-sm"
                                />
                                  <select {...register("selector")}>
                                    <option value="female">Pixels</option>
                                    <option value="male">Inches</option>
                                    <option value="other">Millimeters</option>
                                  </select>
                              </div>
                              {errors.exampleRequired && (
                                <span>This field is required</span>
                              )}
                            </div>
                          </div>

                          {/* Resolution */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-white">
                                Resolution
                              </span>
                            </label>
                            <div className="flex gap-2 text-black">
                              <input
                                {...register("resolution")}
                                type="number"
                                placeholder="Resolution"
                                className="px-2 w-[40%] rounded-sm"
                              />
                              <div className="">
                                <select {...register("resolution")}>
                                  <option value="inch">Inch</option>
                                  <option value="centimeter">Centimeter</option>
                                </select>
                              </div>
                            </div>
                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}
                          </div>
                          {/* Color Mode */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-white">
                                Color Mode
                              </span>
                            </label>
                            <div className="flex gap-2 text-black">
                              <select {...register("color")}>
                                <option value="color">RGB color</option>
                              </select>
                              <div className="">
                                <select {...register("bit")}>
                                  <option value="bit">8 bit</option>
                                  <option value="bit">16 bit</option>
                                  <option value="bit">32 bit</option>
                                </select>
                              </div>
                            </div>
                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}
                          </div>

                          {/* Color Mode */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-white">
                                Color Mode
                              </span>
                            </label>
                            <div className="flex gap-2 text-black">
                              <select {...register("backgroundColor")}>
                                <option value="color">White</option>
                                <option value="color">Black</option>
                                <option value="color">Background Color</option>
                                <option value="color">Transparent</option>
                                <option value="color">Custom</option>
                              </select>
                              <div className="">
                              <input
                                {...register("color")}
                                type="color"
                                placeholder="Resolution"
                                className="px-2 w-[40%] rounded-sm"
                              />
                              </div>
                            </div>
                            {errors.exampleRequired && (
                              <span>This field is required</span>
                            )}
                          </div>
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-outline btn-primary btn-sm mx-4"> Create</button>
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
}
