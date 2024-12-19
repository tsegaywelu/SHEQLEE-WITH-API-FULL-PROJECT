import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichText = ({ showtext, value, onChange, warn, placeholder }) => {
  return (
    <div>
      <h2 className="text-2xl text-start font-kantumruy font-medium">
        {showtext} {warn && <span className="text-red-700">*</span>}
      </h2>
      <div>
        <ReactQuill
          theme="snow"
          modules={{
            toolbar: [
              ["bold", "italic", "strike"], // Bold, italic, strikethrough
              [{ list: "ordered" }, { list: "bullet" }], // Ordered and unordered lists
              [{ align: [] }], // Alignment options
              [{ script: "sub" }, { script: "super" }], // Subscript and superscript
            ],
          }}
          placeholder={placeholder}
          style={{
            // background: "red",
            borderRadius: "5px",
            minHeight: "266px",
            padding: "10px 0px",
          }}
          value={value}
          onChange={(content) => onChange(content)}
        />
      </div>
    </div>
  );
};

export default RichText;
