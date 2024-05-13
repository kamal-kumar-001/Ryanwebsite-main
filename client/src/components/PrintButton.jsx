// import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PropTypes from "prop-types";
import { MdPrint } from "react-icons/md";


const PrintButton = ({ contentRef }) => {
  const printContent = () => {
    // Use html2canvas to capture the content to be printed
    html2canvas(contentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size: 210mm x 297mm
      pdf.save("blog_page.pdf");
    });
  };

  return (
    <button onClick={printContent} className="px-6 py-2.5 flex items-center gap-2 rounded-lg bg-primary
    text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed">
      <MdPrint />
     <span>
     Print
      </span> 
    </button>
  );
};
PrintButton.propTypes = {
  contentRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired
};
export default PrintButton;
