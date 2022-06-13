export const getImageGrayscale = (imageData) => {
  const data = imageData.data
  let gray
  let grayscaleData = []

  for(let i = 0; i < data.length; i+=4) {
      gray = (data[i] + data[1] + data[2]) / 3
      grayscaleData[i]   = gray
      grayscaleData[i+1] = gray
      grayscaleData[i+2] = gray
      grayscaleData[i+3] = 255
  }

  return grayscaleData
}