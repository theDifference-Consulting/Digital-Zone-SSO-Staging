import React, {useState, useEffect, useCallback, useRef} from 'react'
import Lottie from 'react-lottie'

const LottiePlayer = ({
    activeZone,
    noloop = false,
    playOnHover = false,
    onclick = () => {},
    animData = {},
  }) => {
  const [defaultOptions, setDefaultOptions] = useState({})
  const [isStopped, setIsStopped] = useState(!!playOnHover)
  const isStopping = useRef(false)

  useEffect(() => {
    setDefaultOptions({
      loop: !noloop,
      animationData: animData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })

  }, [animData, playOnHover])

  const tryToStop = useCallback(() => {
    if (isStopping.current) {
      console.log("stopped")
      setIsStopped(true)
      isStopping.current = false
    }
  }, [isStopped])

  const mouseOver = useCallback(() => {
    if (playOnHover) {
      console.log("playing")
      isStopping.current = false
      setIsStopped(false)
    }
  }, [playOnHover])

  const mouseOut = useCallback(() => {
    if (playOnHover) {
      if (!isStopping.current) {
        isStopping.current = true
        setTimeout(tryToStop, 500)
      }
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
        isStopped={isStopped}
        height={'100%'}
        width={'100%'}
        />
    </div>
  )
}

export default LottiePlayer
