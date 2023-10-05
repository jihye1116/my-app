"use client"

import Image from "next/image";
import Lottie from "react-lottie-player";
import { Fade } from "react-awesome-reveal";
import lottieJson from "../../../public/animation_lmskkxvj.json";

export default function Hero() {
    return (
        <div className="bg-lightGray px-6 py-9 gap-4 lg:px-24 lg:py-32 md:py-12 md:px-16">
            <Fade>
            <div className="flex flex-col gap-10 mx-auto max-w-7xl lg:flex-row lg:justify-beween lg:gap-0">
                <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5 text-6xl font-bold whitespace-nowrap">
                    <h1>안녕하세요,</h1>
                    <h1>프론트엔드 개발자</h1>
                    <h1>김소마입니다.</h1>
                </div>
                <span className="text-gray-500">
                    Visual Studio Code editing. Redefined. Free. Built on open source.
                    Runs everywhere.
                </span>
                </div>
                <div className="bg-local md:bg-fixed"> 
                    <Lottie loop animationData={lottieJson} play />;
                </div>
            </div>
            </Fade>
        </div>
    )
}