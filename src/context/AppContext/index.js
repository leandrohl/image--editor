import React, { createContext, useContext, useState } from 'react';
import { MdInvertColors, MdColorLens, MdFormatColorFill, MdEqualizer, MdOutlinePhotoFilter, MdOutlineFilterBAndW, MdOutlineAutoGraph} from 'react-icons/md'
import {TiFilter} from 'react-icons/ti'
import { VscColorMode } from 'react-icons/vsc'
import { IoMdColorWand } from 'react-icons/io'
import { AiOutlineArrowsAlt } from 'react-icons/ai'
import { GiChiliPepper } from 'react-icons/gi'
import { FaArrowsAltH } from 'react-icons/fa'

const AppContext = createContext({})


export const AppProvider = ({ children }) => {
  const [openModalHSLRGB, setOpenModalHSLRGB] = useState(false)

  const itemsMenu = [
    {
      id: 1,
      title: 'Converter RGB <> HSL',
      icon: <FaArrowsAltH />,
      navigate: () => setOpenModalHSLRGB(true)
    },
    {
      id: 2,
      title: 'Inverter Imagem',
      icon: <MdInvertColors />,
      navigate: '/invertimage'
    },
    {
      id: 3,
      title: 'Separar canais RGB',
      icon: <MdColorLens />,
      navigate: '/separatechannels'
    },
    {
      id: 4,
      title: 'Ver pixels',
      icon: <IoMdColorWand />,
      navigate: '/viewpixels'
    },
    {
      id: 5,
      title: 'Binarização de imagem',
      icon: <VscColorMode />,
      navigate: '/binarization'
    },
    {
      id: 6,
      title: 'Converter para tons de cinza',
      icon: <MdFormatColorFill />,
      navigate: '/grayscale'
    },
    {
      id: 7,
      title: 'S = c*r^y',
      icon: <AiOutlineArrowsAlt />,
      navigate: '/dynamicscale'
    },
    {
      id: 8,
      title: 'Ruído sal e pimenta',
      icon: <GiChiliPepper />,
      navigate: 'saltandpepper'
    },
    {
      id: 9,
      title: 'Filtros',
      icon: <TiFilter />,
      navigate: '/filters'
    },
    {
      id: 10,
      title: 'Limiarização',
      icon: <MdOutlineAutoGraph />,
      navigate: '/thresholding'
    },
    {
      id: 11,
      title: 'Laplaciano',
      icon: <MdOutlinePhotoFilter />,
      navigate: '/laplace'
    },
    {
      id: 12,
      title: 'Sobel',
      icon: <MdOutlineFilterBAndW />,
      navigate: '/sobel'
    },
    {
      id: 13,
      title: 'Equalização',
      icon: <MdEqualizer />,
      navigate: '/equalizateimage'
    },
  ]

  const getMenu = () => {
    return itemsMenu
  }

  const closeModalHSLRGB = () => {
    setOpenModalHSLRGB(false)
  }

  return (
    <AppContext.Provider value={{
      getMenu,
      openModalHSLRGB,
      closeModalHSLRGB
    }}>
      { children }
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  return context
}
 


export default AppContext;