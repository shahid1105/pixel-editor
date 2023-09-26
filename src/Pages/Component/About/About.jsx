import img from "../../../../public/alif2.jpg";
import img1 from "../../../../public/tuhin.jpg";
import img2 from "../../../../public/sahid.jpg";
const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://wallpaper-house.com/data/out/10/wallpaper2you_376860.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="flex-col hero-content text-center text-neutral-content">
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

        <div className="md:flex mt-20 gap-3">
          <div className="card w-auto glass">
            <div className="avatar fixed -top-8 left-12">
              <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img} />
              </div>
            </div>
            <div className="card-body mt-6">
              <h2 className="">Mahmud Hasan</h2>
              <p className="text-xs">Frontend Developer</p>
            </div>
          </div>
          <div className="card w-auto my-14 md:my-0 glass">
            <div className="avatar fixed -top-8 left-12">
              <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img1} />
              </div>
            </div>
            <div className="card-body mt-6">
              <h2 className="">Al Tahmid</h2>
              <p className="text-xs">Frontend Developer</p>
            </div>
          </div>
          <div className="card w-auto glass">
            <div className="avatar fixed -top-8 left-12">
              <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img2} />
              </div>
            </div>
            <div className="card-body mt-6">
              <h2 className="">Shahid Hasan </h2>
              <p className="text-xs">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
