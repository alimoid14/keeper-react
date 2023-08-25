import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
}
