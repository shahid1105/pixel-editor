import { LuFrame, LuLasso, LuStamp } from 'react-icons/Lu';
import { BsArrowsMove, BsCrop, BsEraserFill, BsEyedropper } from 'react-icons/bs';
import { GiHealthCapsule } from 'react-icons/gi';
import {  TbMarquee2, TbZoomReplace } from 'react-icons/tb';
import {  PiPenNibBold, PiSelectionAllFill } from 'react-icons/pi';
import {  IoMdColorWand } from 'react-icons/io';
import { MdGradient, MdHistoryEdu } from 'react-icons/md';
import {  RiBlurOffLine } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';
import { BiDotsHorizontalRounded, BiSolidPointer, BiText } from 'react-icons/bi';
import { FaRegCircle, FaRegHandPaper } from 'react-icons/fa';


const IconMenu = () => {
    return (
        <div>
            <div className='icone grid grid-cols-3'>
            <div className='p-2 col-span-1 gap-2 font-semibold text-black w-[40px] bg-slate-300'>
                <BsArrowsMove></BsArrowsMove>
                <TbMarquee2></TbMarquee2>
                <LuLasso></LuLasso>
                <PiSelectionAllFill></PiSelectionAllFill>
                <BsCrop></BsCrop>
                <LuFrame></LuFrame>
                <BsEyedropper></BsEyedropper>
                <GiHealthCapsule></GiHealthCapsule>
                <IoMdColorWand></IoMdColorWand>
                <LuStamp></LuStamp>
                <MdHistoryEdu></MdHistoryEdu>
                <BsEraserFill></BsEraserFill>
                <MdGradient></MdGradient>
                <RiBlurOffLine></RiBlurOffLine>
                <SlMagnifier></SlMagnifier>
                <PiPenNibBold></PiPenNibBold>
                <BiText></BiText>
                <BiSolidPointer></BiSolidPointer>
                <FaRegCircle></FaRegCircle>
                <FaRegHandPaper></FaRegHandPaper>
                <TbZoomReplace></TbZoomReplace>
                <BiDotsHorizontalRounded></BiDotsHorizontalRounded>

            </div>
            <div className='col-span-7 bg-purple-400'>

            </div>
            <div className='col-span-4 bg-yellow-200'>

            </div>
            </div>
        </div>
    );
};

export default IconMenu;