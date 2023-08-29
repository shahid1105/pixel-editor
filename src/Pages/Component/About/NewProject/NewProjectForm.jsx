import React, { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import Canvas from '../Canvas/Canvas';



export const CanvasContext = createContext('default');

const NewProjectForm = ({showModal, setShowModal}) => {
    
    const [canvasInfo, setCanvasInfo] = useState(null);


    
    // console.log('canvasinfo ' +canvasInfo);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
    console.log(data);
  
    // setCanvasInfo(JSON.stringify(data, null, 2));
    // setCanvasInfo(JSON.stringify(data));
    setCanvasInfo(data);



    // console.log('canvasInfo : '+JSON.stringify(canvasInfo, null, 2));
    console.log(canvasInfo);
    // sendDataToCanvas(data);
    setShowModal(false);
}

const canvasAllInfo = {
    canvasInfo
  };

    return (
        <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Project Info
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent  text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-black">
                <form onSubmit={handleSubmit(onSubmit) }>
                        
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input className=' text-input input-bordered w-full max-w-xs bg-white  rounded' defaultValue="" placeholder=" name here" {...register("name")} type="text" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Height</span>
                                </label>
                                <input {...register("height")} type="number" placeholder="Height" className="input input-bordered" />
                                {errors.exampleRequired && <span>This field is required</span>}

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Width</span>
                                </label>
                                <input {...register("width")} type="number" placeholder="width" className="input input-bordered" />
                                {errors.exampleRequired && <span>This field is required</span>}

                            </div>

                            

                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> Create Project</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    {/* <pre>{JSON.stringify(canvasInfo, null, 2)}</pre> */}

    <CanvasContext.Provider value={canvasAllInfo}>
        <Canvas></Canvas>
    </CanvasContext.Provider>
    </>
    );
};

export default NewProjectForm;