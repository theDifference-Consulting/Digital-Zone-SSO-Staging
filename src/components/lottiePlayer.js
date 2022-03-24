import React, {useState, useEffect, useCallback, useRef} from 'react'
import Lottie from 'react-lottie'

const LottiePlayer = (props) => {
  const {
    activeZone,
    noloop = false,
    playOnHover = false,
    animData = {},
  } = props;
  const [defaultOptions, setDefaultOptions] = useState({})
  const isStopping = useRef(false)
  const [direction, setDirection] = useState(playOnHover ? -1 : 1); // maybe it should be another parameter

  useEffect(() => {
    setDefaultOptions({
      loop: !noloop,
      animationData: animData,
      autoplay: !playOnHover,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })

  }, [animData, playOnHover, noloop])

  const tryToStop = useCallback(() => {
    if (isStopping.current) {
      setDirection(-1)
      isStopping.current = false
    }
  }, [])

  const mouseOver = useCallback(() => {
    if (playOnHover) {
      isStopping.current = false
      setDirection(1)
    }
  }, [playOnHover])

  const mouseOut = useCallback(() => {
    if (playOnHover) {
      if (!isStopping.current) {
        isStopping.current = true
        setTimeout(tryToStop, 100)
      }
    }
  }, [playOnHover, tryToStop])

  return (
    <div 
      role="button"
      tabIndex={0}
      className={activeZone ? "active-zone anim" : "anim"}
      onClick={() => props.onclick && props.onclick()}
      onKeyDown={() => props.onclick && props.onclick()}
      onTouchStart={() => mouseOver()}
      onMouseOver={() => mouseOver()}
      onFocus={() => mouseOver()}
      onMouseOut={() => mouseOut()}
      onBlur={() => mouseOut()}
      onTouchEnd={() => mouseOut()}
      >
      <Lottie
        direction={direction}
        options={defaultOptions} 
        height={'100%'}
        width={'100%'}
        />
    </div>
  )
}

export default LottiePlayer
