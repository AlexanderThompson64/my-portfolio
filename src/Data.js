import iicAppImg from "./img/iicapp.png";
import iicAppScreenshots from "./img/iicappscreenshots.png";

// Styling for images must be done at image import level hence minor styling has been done here to ensure image is reponsive to the viewport.

const desc0 = () => {
  return (
    <p>
      This application was built as part of a university project. The
      application was written to specified client requirements. The apps’
      purpose is to advertise and showcase the charity’s brand while also
      allowing the user to respond to invites for the charities events and
      allowing the charity to collate data on user participation. <br />
      <br />
      The app also facilitates a feedback function where a user can communicate
      directly with the charity and report safeguarding issues via a contact
      page of the app. This application was written in C# making use of Xamarin
      forms and the .NET framework
    </p>
  );
};

const img0 = () => {
  return (
    <div className="img0" style={{marginTop: "-80px", marginBottom: "-50px"}}>
      <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          // data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active text-white">
              <div
                className="container d-flex justify-content-center align-items-center text-center"
                style={{ height: "300px" }}
              >
                <img
                  className="img-fluid rounded"
                  style={{ maxWidth: "100%" }}
                  src={iicAppImg}
                  alt="mobile app project"
                />
              </div>
            </div>
            <div className="carousel-item text-white">
              <div
                className="container d-flex justify-content-center align-items-center"
                style={{ height: "300px" }}
              >
                <img
                  className="img-fluid"
                  style={{ maxWidth: "100%" }}
                  src={iicAppScreenshots}
                  alt="mobile app project"
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev bg-primar"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const data = {
  projects: [
    {
      id: 0,
      name: "IOS/Android Mobile Application",
      tech: "C# / Xammarin Forms / Visual Studio",
      img: img0(),
      description: desc0(),
    },

    {
      id: 1,
      name: "Booking Manager Application",
      tech: "C# / .NET / Polymorphism / Visual Studio / Rider",
      img: ""
    },

    {
      id: 2,
      name: "Maintinance ticket system",
      tech: "React / Firebase / Visual Studio",
      img: <img src={iicAppImg} alt="maintiance ticket app project" />,
    },
  ],
  count: 3,
};

export { data };
