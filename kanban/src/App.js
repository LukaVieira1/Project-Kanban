import "./App.css";
import CardInside from "./components/Card-Inside/Card";

function App() {
  return (
    <body>
      <div background="black">
        {/* TO DO */}
        <CardInside person="man" genre="Label" status="To-Do">
          Christmas Banners
        </CardInside>
        <CardInside person="man" genre="Label" status="To-Do">
          Redo Portfolio
        </CardInside>
        {/* In Progress */}
        <CardInside person="woman" genre="Always" status="In-Progress">
          Coffee Break
        </CardInside>
        <CardInside person="woman" genre="Webflow" status="In-Progress">
          Updating Portfolio
        </CardInside>
        {/* Review */}
        <CardInside person="man" genre="Realease" status="Review">
          Realease to Figma Community
        </CardInside>
        <CardInside person="man" genre="Feedback" status="Review">
          User Feedback
        </CardInside>
        <CardInside person="man" genre="Sourcing" status="Review">
          Background images from{" "}
          <a href="https://www.google.com.br">humaaans.com</a>
        </CardInside>
        {/* Done */}
        <CardInside person="woman" genre="UI" status="Done">
          Style Guide
        </CardInside>
        <CardInside person="woman" genre="UI" status="Done">
          Component Library
        </CardInside>
        <CardInside person="woman" genre="UI" status="Done">
          Sticker Components
        </CardInside>
      </div>
    </body>
  );
}

export default App;
