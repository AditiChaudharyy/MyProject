import React, { useRef, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const albumData = albumsData[Number(albumId)] || albumsData[0];
  
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${albumData.bgColor},#121212)`
    } else {
      displayRef.current.style.background = `#121212`
    }
  }, [isAlbum, albumData.bgColor])

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path="/" element={<DisplayHome/>} />
        <Route path="/album/:id" element={<DisplayAlbum/>} />
      </Routes>
    </div>
  )
}

export default Display