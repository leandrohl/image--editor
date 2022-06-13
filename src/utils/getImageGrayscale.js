export const getImageGrayscale = (imageData) => {
  const data = imageData.data
  let gray
  let grayscaleData = []

  for(let i = 0; i < data.length; i+=4) {
      gray = data[i] !== data[i+1] || data[i] !== data[i+2]
      ? Math.round((0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2]) / 3)
      : data[i]
      grayscaleData[i]   = gray
      grayscaleData[i+1] = gray
      grayscaleData[i+2] = gray
  }

  return grayscaleData
}