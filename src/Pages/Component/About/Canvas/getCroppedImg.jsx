const getCroppedImg = (imageSrc, crop) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const { x, y, width, height } = crop;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

      // Convert the cropped image to a data URL
      const croppedImageUrl = canvas.toDataURL("image/jpeg", 1.0); // Adjust the MIME type and image quality as needed

      resolve(croppedImageUrl);
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
};

export default getCroppedImg;
