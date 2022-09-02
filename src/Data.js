import iicAppImg from "./img/iicapp.png";
import iicAppScreenshots from "./img/iicappscreenshots.png";
import BookingManagerAppScreenshot from "./img/bookingManagerAppScreenshot.png";
import BookingManagerAppScreenshot2 from "./img/bookingManagerAppScreenshot2.png";
import TicketAppScreenshot from "./img/ticketAppScreenshot.png"
import TicketAppScreenshot2 from "./img/ticketAppScreenshot2.png"

const desc0 = () => {
  return (
    <p>
      This application was built as part of a university project. The
      application was written to specified client requirements. The apps’s
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

const desc1 = () => {
  return (
    <p>
      This booking manager application was created whilst at university. The
      project was created as part of an assessment to demonstrate understanding
      of polymorphism and Object-Oriented Programming.
      <br />
      <br />
      The application makes use of an abstract class which is then inherited by
      two other classes. This allows the user to create a booking for a room and
      to then specify a type of booking when creating the booking. The user will
      then be able to manage this through a list of bookings utilizing CRUD
      features.
    </p>
  );
};

const desc2 = () => {
  return (
    <p>
      This application was created as part of an end of module assessment, the
      purpose of this application is to demonstrate knowledge of the React
      framework, REST Api’s and google firebase. <br/><br/> The application utilises CRUD
      features to allow users to create tickets and administrators to update and
      delete tickets.{" "}
    </p>
  );
};

// Styling for images must be done at image import level hence minor styling has been done here to ensure image is reponsive to the viewport.

const data = {
  projects: [
    {
      id: 0,
      name: "IOS/Android Mobile Application",
      tech: "C# / Xammarin Forms / Visual Studio",
      img1: (
        <img
          className="img-fluid"
          src={iicAppImg}
          alt="Crossplatform Mobile App"
          style={{ maxWidth: "85%" }}
        />
      ),
      img2: (
        <img
          className="img-fluid"
          src={iicAppScreenshots}
          alt="Crossplatform Mobile App"
          style={{ maxWidth: "85%" }}
        />
      ),
      description: desc0(),
    },

    {
      id: 1,
      name: "Booking Manager Application",
      tech: "C# / .NET / Polymorphism / Visual Studio / Rider",
      img1: (
        <img
          className="img-fluid mb-2"
          src={BookingManagerAppScreenshot}
          alt="Crossplatform Mobile App"
          style={{ maxWidth: "80%" }}
        />
      ),
      img2: (
        <img
          className="img-fluid"
          src={BookingManagerAppScreenshot2}
          alt="Crossplatform Mobile App"
          style={{ maxWidth: "85%" }}
        />
      ),
      description: desc1(),
    },

    {
      id: 2,
      name: "Maintinance ticket system",
      tech: "React / Firebase / Visual Studio",
      img1: (
        <img
          className="img-fluid"
          src={TicketAppScreenshot}
          alt="Crossplatform Mobile App"
          style={{ maxWidth: "85%" }}
        />
      ),
      img2: (
        <img
          className="img-fluid"
          src={TicketAppScreenshot2}
          alt="Crossplatform Mobile App"
          style={{ maxWidth: "85%" }}
        />
      ),
      description: desc2(),
    },
  ],
  count: 3,
};

export { data };
