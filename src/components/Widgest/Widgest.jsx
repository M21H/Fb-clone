import React from 'react'
import './Widgest.css'

const Widgest = () => {
  return (
    <div className='widgest'>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSkndkb-111065590313081%2F&tabs=timeline&width=340&height=150025&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameborder='0'
        allowfullscreen='true'
        allow='encrypted-media'
        title='#'
      ></iframe>
    </div>
  )
}

export default Widgest
