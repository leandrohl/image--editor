/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InvertImage from '../pages/InvertImage'
import Home from '../pages/Home'
import SeparateChannels from '../pages/SeparateChannels'
import ViewPixels from '../pages/ViewPixels'
import BinarizationImage from '../pages/BinarizationImage'
import GrayscaleImage from '../pages/GrayscaleImage'
import Filters from '../pages/Filters'
import DynamicScaleCompression from '../pages/DynamicScaleCompression'
import SaltAndPepper from '../pages/SaltAndPepper'
import Thresholding from '../pages/Thresholding'
import EqualizateImage from '../pages/EqualizateImage'
import Laplace from '../pages/Laplace'
import Sobel from '../pages/Sobel'


const RoutesDom = () => {

  return (
    <Routes>
      <Route path="/invertimage" element={<InvertImage />} />
      <Route path="/" element={<Home />} />
      <Route path="/separatechannels" element={<SeparateChannels />} />
      <Route path="/viewpixels" element={<ViewPixels />} />
      <Route path="/binarization" element={<BinarizationImage />} />
      <Route path="/grayscale" element={<GrayscaleImage />} />
      <Route path="/filters" element={<Filters />} />
      <Route path="/dynamicscale" element={<DynamicScaleCompression />} />
      <Route path="/saltandpepper" element={<SaltAndPepper />} />
      <Route path="/thresholding" element={<Thresholding />} />
      <Route path="/equalizateimage" element={<EqualizateImage />} />
      <Route path="/laplace" element={<Laplace />} />
      <Route path="/sobel" element={<Sobel />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default RoutesDom
