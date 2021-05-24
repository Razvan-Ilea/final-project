import football from "./football.png";
import cars from "./car.png";
import travel from "./travel.png";
import music from "./music.png";
import "./Hobbies.css";

export function Hobbies() {
  return (
    <div className="container">
      <h1>Hobbies</h1>
      <div className="hobbies">
        <div>
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
        <div>
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
    </div>
  );
}
