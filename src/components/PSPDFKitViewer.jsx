import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current; // This `useRef` instance will render the PDF.

    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

      await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        // eslint-disable-next-line react/prop-types
        document: props.document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        // baseUrl: `${window.location.protocol}//${window.location.host}/${import.meta.env.PUBLIC_URL}`,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
    // eslint-disable-next-line react/prop-types
  }, [props.document]);

  // This div element will render the document to the DOM.
  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
