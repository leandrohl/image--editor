export const reRenderImage = (imageData, canvasId) => {
  const canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext('2d')
  canvas.width = imageData.width
  canvas.height = imageData.height
  ctx.putImageData(imageData, 0, 0)
}