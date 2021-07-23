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

  }, [props.animData])

  return (
    <div 
      role="button"
      tabIndex={0}
      className={props.activeZone ? "active-zone anim" : "anim"}
      onClick={() => props.onclick()}
      onKeyDown={() => props.onclick()}
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