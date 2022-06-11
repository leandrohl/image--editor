/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import InvertImage from './pages/InvertImage'
import Home from './pages/Home'
import SeparateChannels from './pages/SeparateChannels'

const RoutesDom = () => {

  return (
    <Routes>
      <Route path="/invertimage" element={<InvertImage />} />
      <Route path="/" element={<Home />} />
      <Route path="/separatechannels" element={<SeparateChannels />} />
    </Routes>
  )
}

export default RoutesDom
