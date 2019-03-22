// SurveyField contains logic to render a single
// label and text input
import React from "react";

export default ({ input, label, type, tag, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      {tag === "input" && (
        <input
          {...input}
          type={type}
          required
          style={{ marginBottom: "5px" }}
        />
      )}
      {tag === "textarea" && <textarea {...input} />}
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
