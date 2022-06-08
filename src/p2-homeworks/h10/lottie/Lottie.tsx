import  {useLottie} from 'lottie-react';
import groovyWalkAnimation from "./ton_duck_waiting.json";
import {CSSProperties} from 'react';


const style:CSSProperties = {
    overflow: 'hidden',
    borderRadius: 100,
    width: 100,
    height: 160,
    margin: "auto"
};
export const ExampleAnimation = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        autoplay: true,
    }

    const { View } = useLottie(options, style);

    return View;
}