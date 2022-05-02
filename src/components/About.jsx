import React from "react";

export default function About() {
  return (
    <div style={{ marginTop: "80px" }}>
      <img
        src={require("../assets/down.png")}
        style={{ marginBottom: "20px" }}
      />
      <h1>About</h1>
      <p
        style={{
          textAlign: "center",
          width: "40%",
          margin: "auto",
          lineHeight: "1.5",
        }}
      >
        Lof a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to
        using 'Content here, content here', making it look like readable
        English. Many desktop publishing packages and web page editors now use
        Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions
        have evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like). oertukehifskjfiuhf fyuif uisdfhuifiuf{" "}
      </p>
      <img src={require("../assets/up.png")} style={{ marginTop: "20px" }} />
    </div>
  );
}
