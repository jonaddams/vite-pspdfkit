import PdfViewerComponent2 from "./components/PSPDFKitViewer2";
import "./App.css";

function App2() {
  return (
    <>
      <p>
        This is a simple example of how to use PSPDFKit for Web with Vite and
        React.
      </p>
      <div className="App-viewer">
        <PdfViewerComponent2 document="document.pdf" />
      </div>
    </>
  );
}

export default App2;
