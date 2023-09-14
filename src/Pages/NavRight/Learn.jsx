import React from "react";

const Learn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="col-span-2 mx-2 md:mx-5">
            <h3 className="text-4xl my-4 font-bold">Topics</h3>
            <h3 className="font-bold">Introduction</h3>
            <h3 className="font-bold my-2">Workspace</h3>
            <div className="ml-3">
            <h3 className="font-bold my-2">Open and Save</h3> 
            <h3 className="font-bold my-2">Navigation</h3> 
            <h3 className="font-bold my-2">Image size</h3> 
            </div>
        </div>
      <div className="col-span-10 mx-2 md:mx-5">
      <h3 className="text-3xl font-bold my-3">Introduction</h3>
      <p className="mb-2">
        PixelEditor is an advanced image editor, which can work with both raster
        and vector graphics. You can use it for simple tasks, such as resizing
        images, as well as complex tasks, such as designing webpages, creating
        illustrations, processing photographs and more.
      </p>

      <p>
        This website will teach you how to use PixelEditor step by step. We will
        start with basic tasks and gradually progress to more complex features.
        The chapters (on the left) have been organized, such that each chapter
        uses only the knowledge from previous chapters, so you can learn
        effectively and efficiently.
      </p>

      <h3 className="text-3xl mt-4 font-bold my-3">Starting and using PixelEditor</h3>
      <p className="mb-2">
      PixelEditor editor works in a web browser. It can be started by going to www.PixelEditor.com. PixelEditor can run on any device (desktop, laptop, tablet, phone or any other computer), but for the best comfort, we recommend having a big screen, a precise pointing device (a mouse or a stylus) and a keyboard.
      </p>

      <p>Photopea runs completely in your device, just like Sketch or Photoshop do. It does not upload any of your files to the internet. You can load Photopea.com, disconnect from the internet and keep using it completely offline. None of your files ever leaves your computer.</p>
      </div>
    </div>
  );
};

export default Learn;
