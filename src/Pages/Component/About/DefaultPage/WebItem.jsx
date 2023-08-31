import React from 'react';
import { MdCreditCard, MdWebAsset, MdPhotoSizeSelectActual } from 'react-icons/md';

const WebItem = () => {
    return (
        <div className='flex gap-2 mx-2'>
            <div className='my-3 w-42 px-3 h-40 text-center pb-2 rounded-md border-2 hover:bg-gray-600'>
            <MdWebAsset className='w-32 h-20'></MdWebAsset>
           <h3>Web Large</h3> 
           <p className='text-xs'>1920 x 1080 px @ 72 ppi</p> 
        </div>
        <div className='my-3 w-42 px-1 h-40 pt-2 text-center pb-2 rounded-md border-2 hover:bg-gray-600'>
            <MdCreditCard className='w-28 h-16 mx-auto mt- mb-2'></MdCreditCard>
           <h3>Web Most Common</h3> 
           <p className='text-xs'>1366 x 768 px @ 72 ppi</p> 
        </div>
        <div className='my-3 w-42 px-1 h-40 pt-2 text-center pb-2 rounded-md border-2 hover:bg-gray-600'>
            <MdPhotoSizeSelectActual className='w-28 h-16 mx-auto mt- mb-2'></MdPhotoSizeSelectActual>
           <h3>Default Photoshop Size</h3> 
           <p className='text-xs'>7 x 5 in @ 300 ppi</p> 
        </div>
        </div>
    );
};

export default WebItem;