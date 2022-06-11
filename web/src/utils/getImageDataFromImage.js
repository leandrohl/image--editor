

export const getImageDataFromImage = (idCanvas) => {
  const canvas = document.getElementById(idCanvas);
  let ctx = canvas.getContext('2d')
  const { width, height } = ctx.canvas
  let data = ctx.getImageData(0, 0, width, height);
  return data
}