import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichText = ({ showtext, value, onChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-start">
        {showtext} <span className="text-red-700">*</span>
      </h2>
      <div>
        <ReactQuill
          theme="snow"
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }],
              ["bold", "italic", "strike"], // Bold, italic, strikethrough
              [{ list: "ordered" }, { list: "bullet" }], // Ordered and unordered lists
              [{ align: [] }], // Alignment options
              [{ script: "sub" }, { script: "super" }],
              // [{ header: 2 }], // Headers
              // [{ color: [] }, { background: [] }], // Text and background color
            ],
          }}
          placeholder="Description..."
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            minHeight: "180px",
            padding: "10px",
          }}
          value={value}
          onChange={(content) => onChange(content)}
        />
      </div>
    </div>
  );
};

export default RichText;
