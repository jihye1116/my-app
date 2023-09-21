"use client"

import Lottie from "react-lottie-player";
import lottieJson from "../../../public/animation_lmskkxvj.json";
import { Fade } from "react-awesome-reveal";

export default function Animation(){
    return <Fade><Lottie loop animationData={lottieJson} play /></Fade>;
}