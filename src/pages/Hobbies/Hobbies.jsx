import football from "./icons/football.png";
import cars from "./icons/car.png";
import travel from "./icons/travel.png";
import music from "./icons/music.png";
import "./Hobbies.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import football1 from "./images/football1.jpg";
import football2 from "./images/football2.jpg";
import cars1 from "./images/cars1.jpg";
import cars2 from "./images/cars2.jpg";
import music1 from "./images/music1.jpg";
import music2 from "./images/music2.jpg";
import travel1 from "./images/travel1.jpg";
import travel2 from "./images/travel2.jpg";

export function Hobbies() {
  return (
    <div className="container">
      <h1>Hobbies</h1>
      <div className="hobbies">
        <div className="first-row">
          <div className="item">
            <img src={football} alt="" />
            <h3>Football</h3>
            <p>
              Football is my favorite sport and a passion for myself. I like to
              watch, play myself or play games with it. From a young age was my
              favorite and now nothing changes.
            </p>
          </div>
          <div className="item">
            <img src={cars} alt="" />
            <h3>Cars</h3>
            <p>
              Cars represent something useful day to day like how everyone sees
              them but for me with a little bonus because I like to learn about
              engines and other components and I dream to have a project car in
              the future.
            </p>
          </div>
        </div>
        <div className="second-row">
          <div className="item">
            <img src={travel} alt="" />
            <h3>Travel</h3>
            <p>
              Travel is something that I miss the most in these times. I saw
              already Italy three times, England two times and a lot of places
              from Romania. On my list are many more countries and I can't wait
              to visit a lot more from this list.
            </p>
          </div>
          <div className="item">
            <img src={music} alt="" />
            <h3>Music</h3>
            <p>
              Music is something that I listen to even now when I write this,
              like in every moment of the day. Indiferent of the genre, the most
              important thing is to sound good to me. All things are better done
              with music in the background.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={football1} className="sliderimg" alt="" />
          <img src={football2} className="sliderimg" alt="" />
          <img src={cars1} className="sliderimg" alt="" />
          <img src={cars2} className="sliderimg" alt="" />
          <img src={music1} className="sliderimg" alt="" />
          <img src={music2} className="sliderimg" alt="" />
          <img src={travel1} className="sliderimg" alt="" />
          <img src={travel2} className="sliderimg" alt="" />
        </AliceCarousel>
      </div>
    </div>
  );
}
