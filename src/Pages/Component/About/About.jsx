const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://wallpaper-house.com/data/out/10/wallpaper2you_376860.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">About</h1>
          <p className="mb-5">
            A pixel editor is a type of graphic editing software used for
            creating and editing images at the pixel level. It's often used for
            tasks like pixel art, icon design, and low-resolution graphics.
            While Adobe Photoshop is a versatile and powerful tool for image
            editing, it's not traditionally used for pixel art due to its focus
            on high-resolution imagery. However, you can still create pixel art
            in Photoshop with the right techniques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
