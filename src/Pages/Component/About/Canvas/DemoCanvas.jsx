// import { Canvas } from 'fabric/fabric-impl';
import React from 'react';
import { fabric } from "fabric";
import Canvas from './Canvas';
// import { Canvas } from 'fabric/fabric-impl';


const DemoCanvas = () => {

    var demo_canvas = new fabric.Canvas('demo_canvas');

    return (
        <div>
            <h1 >This is canvas</h1>
            <Canvas id='demo_canvas' width='500' height='500'></Canvas>
        </div>
    );
};

export default DemoCanvas;