import React from 'react';
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

const Icon = () => {
    return (
        <>
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
        </>
    );
};

export default Icon;