"use client"

import Image from "next/image";
import Lottie from "react-lottie-player";
import { Fade } from "react-awesome-reveal";
import lottieJson from "../../../public/animation_lmskkxvj.json";

export default function Hero() {
    return (
        <div className="bg-lightGray px-24 py-32">
            <Fade>
            <div className="flex justify-between items-center mx-auto max-w-7xl">
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
                <div>
                {/* <Image src="/HeroBanner.svg" alt="로고" width={470} height={387} /> */}
                <Lottie loop animationData={lottieJson} play />;
                </div>
            </div>
            </Fade>
        </div>
    )
}