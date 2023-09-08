const getCroppedImg = (imageSrc, crop) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const { x, y, width, height } = crop;

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          // You can resolve with the cropped image blob or data URL
          // depending on your requirements
          resolve(blob);
        },
        "image/jpeg", // Adjust the MIME type as needed
        1.0 // Adjust the image quality (1.0 is maximum quality)
      );
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
};

export default getCroppedImg;
