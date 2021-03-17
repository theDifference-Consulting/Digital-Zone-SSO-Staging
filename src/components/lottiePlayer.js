import React, {useState, useEffect} from 'react'
import Lottie from 'react-lottie';

const LottiePlayer = (props) => {
  const [defaultOptions, setDefaultOptions] = useState({});

  useEffect(() => {
    setDefaultOptions({
      loop: true,
      autoplay: true,
      animationData: props.animData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })

  }, [])

  return (
    <div 
      className={props.activeZone ? "active-zone anim" : "anim"}
      onClick={() => props.onclick()}
      >
      <Lottie
        options={defaultOptions} 
        height={'100%'}
        width={'100%'}
        />
    </div>
  );
}

export default LottiePlayer