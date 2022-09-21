import React from 'react'

export const Blocked = () => {
  return (
    <div style={{ "width": "100%", height: "100vh", backgroundColor: "#C5203F", display :"flex", "justifyContent": "center", "alignItems": "center", overflow: "hidden" }}>
      <img 
        srcSet="/img/blocked-bg-3.jpg 1667w, /img/blocked-bg-2.jpg 1043w, /img/blocked-bg.jpg 2917w"
        src="/img/blocked-bg.jpg"
        style={{"maxWidth": "100%", maxHeight: "100%"}}
      />
    </div>
  )
}
