export const getImageGrayscale = (imageData, canvasId) => {
  const canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext('2d')
  canvas.width = imageData.width
  canvas.height = imageData.height

  const data = imageData.data
  let gray

  for(let i = 0; i < data.length; i+=4) {
      gray = data[i] !== data[i+1] || data[i] !== data[i+2]
          ? Math.round((0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2]) / 3)
          : data[i]
      data[i]   = gray
      data[i+1] = gray
      data[i+2] = gray
  }

  ctx.putImageData(imageData, 0, 0)
}