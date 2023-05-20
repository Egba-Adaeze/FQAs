import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
const images = [
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
"https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

]
function slider() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default slider;