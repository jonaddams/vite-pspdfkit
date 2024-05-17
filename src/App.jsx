import PdfViewerComponent from "./components/PSPDFKitViewer";
import "./App.css";

function App() {
  return (
    <>
      <p>
        This is a simple example of how to use PSPDFKit for Web with Vite and
        React.
      </p>
      <div className="App-viewer">
        <PdfViewerComponent document="document.pdf" />
      </div>
    </>
  );
}

export default App;
