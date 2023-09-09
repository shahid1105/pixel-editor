import React from 'react';
import { MdCreditCard, MdWebAsset, MdPhotoSizeSelectActual } from 'react-icons/md';

const WebItem = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-2 mx-2 my-2'>
            <div className='text-center py-2 rounded-md border-2 px-1 hover:bg-gray-600'>
            <MdWebAsset className='w-16 h-12 mx-auto'></MdWebAsset>
           <h3 className='text-sm'>Web Large</h3> 
           <p className='text-xs'>1920 x 1080 px @ 72 ppi</p> 
        </div>
        <div className='px-1 py-2 text-center rounded-md border-2 hover:bg-gray-600'>
            <MdCreditCard className='w-16 h-12 mx-auto'></MdCreditCard>
           <h3 className='text-sm'>Web Most Common</h3> 
           <p className='text-xs'>1366 x 768 px @ 72 ppi</p> 
        </div>
        <div className='px-1 py-2 text-center rounded-md border-2 hover:bg-gray-600'>
            <MdPhotoSizeSelectActual className='w-16 h-12 mx-auto mb-2'></MdPhotoSizeSelectActual>
           <h3 className='text-sm'>Default Photoshop Size</h3> 
           <p className='text-xs'>7 x 5 in @ 300 ppi</p> 
        </div>
        </div>
    );
};

export default WebItem;