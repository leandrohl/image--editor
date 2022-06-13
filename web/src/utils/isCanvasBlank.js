export function isCanvasBlank(canvas) {
  const image = !canvas?.getContext('2d')?.getImageData(0, 0, canvas.width, canvas.height)?.data.some(function (channel) {
      return channel !== 0;
   });


  return image
}