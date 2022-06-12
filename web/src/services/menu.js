import { MdInvertColors, MdColorLens, MdFormatColorFill} from 'react-icons/md'
import {TiFilter} from 'react-icons/ti'
import {BsArrowDownUp} from 'react-icons/bs'
import { VscColorMode } from 'react-icons/vsc'
import { IoMdColorWand } from 'react-icons/io'
import { AiOutlineArrowsAlt } from 'react-icons/ai'
import { GiChiliPepper } from 'react-icons/gi'



export const getMenu = () => {

  const ItemsMenu = [
    {
      id: 1,
      title: 'Inverter Imagem',
      icon: <MdInvertColors />,
      navigate: '/invertimage'
    },
    {
      id: 2,
      title: 'Separar canais RGB',
      icon: <MdColorLens />,
      navigate: '/separatechannels'
    },
    {
      id: 3,
      title: 'Ver pixels',
      icon: <IoMdColorWand />,
      navigate: '/viewpixels'
    },
    {
      id: 4,
      title: 'Binarização de imagem',
      icon: <VscColorMode />,
      navigate: '/invertimage'
    },
    {
      id: 5,
      title: 'Converter para tons de cinza',
      icon: <MdFormatColorFill />,
      navigate: '/binarization'
    },
    {
      id: 6,
      title: 'Filtros',
      icon: <TiFilter />,
      navigate: '/filters'
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
      navigate: '/saltandpepper'
    }
  ]

  return ItemsMenu
}