import React from 'react'

function Footer() {
  let footerStyle = {
    position: "",
    bottom:"0",
    width: "100%"
  }
  return (
    <div className='bg-dark text-center text-light p-2 mt-4' style={footerStyle}> CopyRight @deUmair MyToDoApp.com 2022</div>
  )
}

export default Footer