import React, {useEffect, useRef} from 'react'
import Lottie from 'react-lottie';

const LottiePlayer = (props) => {

  const animContainer = useRef(null);

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: props.animData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
 
  return (
    <>
      <Lottie
        options={defaultOptions} 
        className={props.activeZone ? "active-zone anim" : "anim"}
        id="water-loop"
        height={'100%'}
        width={'100%'}
        />
    </>
  );
}

export default LottiePlayer