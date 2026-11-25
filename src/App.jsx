import { Fragment } from "react";
import ImageGallery from "./components/ImageGallery";
import images from "./data/images";
import "./App.css";

function App() {
  return (
    // Fragment groups siblings without adding an extra <div> to the DOM.
    <Fragment>
      <header className="page-header">
        <h1>Image Gallery</h1>
        <p>{images.length} photos</p>
      </header>
      <main className="page-main">
        <ImageGallery images={images} />
      </main>
    </Fragment>
  );
}

export default App;