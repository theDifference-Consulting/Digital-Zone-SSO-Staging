import React, {useState, useEffect, useCallback} from 'react'
import Lottie from 'react-lottie';

const LottiePlayer = ({
    activeZone,
    playOnHover = false,
    onclick = () => {},
    animData = {},
  }) => {
  const [defaultOptions, setDefaultOptions] = useState({});
  const [isPaused, setIsPaused] = useState(!!playOnHover);

  useEffect(() => {
    setDefaultOptions({
      loop: true,
      animationData: animData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })

  }, [animData, playOnHover])

  const mouseOver = useCallback(() => {
    if (playOnHover) {
      setIsPaused(false);
    }
  }, [playOnHover])

  const mouseOut = useCallback(() => {
    if (playOnHover) {
      setIsPaused(true);
    }
  }, [playOnHover])

  return (
    <div 
      role="button"
      tabIndex={0}
      className={activeZone ? "active-zone anim" : "anim"}
      onClick={() => onclick()}
      onKeyDown={() => onclick()}
      onTouchStart={() => mouseOver()}
      onMouseOver={() => mouseOver()}
      onFocus={() => mouseOver()}
      onMouseOut={() => mouseOut()}
      onBlur={() => mouseOut()}
      onTouchEnd={() => mouseOut()}
      >
      <Lottie
        options={defaultOptions} 
        isPaused={isPaused}
        height={'100%'}
        width={'100%'}
        />
    </div>
  );
}

export default LottiePlayer
