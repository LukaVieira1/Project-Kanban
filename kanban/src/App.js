import "./App.css";
import CardInside from "./components/Card-Inside/Card";
import man from "./man.png";
import woman from "./woman.png";
import Background from "./components/Background/Background";
import CardOutside from "./components/CardOutside/CardOutside";

function App() {
  return (
    <Background>
      <div className="outside-cards">
        <CardOutside
          cardColor="blue"
          titleText="To Do"
          titleColor="white"
          icon="ToDo"
        >
          <CardInside person={man} genre="Label" status="To-Do">
            Christmas Banners
          </CardInside>
          <CardInside person={man} genre="Label" status="To-Do">
            Redo Portfolio
          </CardInside>
        </CardOutside>
        <CardOutside
          cardColor="brown"
          titleText="In Progress"
          titleColor="white"
          icon="InProgress"
        >
          <CardInside person={woman} genre="Always" status="In-Progress">
            Coffee Break
          </CardInside>
          <CardInside person={woman} genre="Webflow" status="In-Progress">
            Updating Portfolio
          </CardInside>
        </CardOutside>
        <CardOutside
          cardColor="purple"
          titleText="Review"
          titleColor="white"
          icon="Review"
        >
          <CardInside person={man} genre="Realease" status="Review">
            Realease to Figma Community
          </CardInside>
          <CardInside person={man} genre="Feedback" status="Review">
            User Feedback
          </CardInside>
          <CardInside person={man} genre="Sourcing" status="Review">
            Background images from{" "}
            <a href="https://www.google.com.br">humaaans.com</a>
          </CardInside>
        </CardOutside>
        <CardOutside
          cardColor="green"
          titleText="Done"
          titleColor="black"
          icon="Done"
        >
          <CardInside person={woman} genre="UI" status="Done">
            Style Guide
          </CardInside>
          <CardInside person={woman} genre="UI" status="Done">
            Component Library
          </CardInside>
          <CardInside person={woman} genre="UI" status="Done">
            Sticker Components
          </CardInside>
        </CardOutside>
      </div>
    </Background>
  );
}

export default App;
