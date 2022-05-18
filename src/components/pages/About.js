import React from "react";

function About() {
  return (
    <section className="my-5 about">
      <img
        src={require('../../assets/avatar.jpg')}
        alt="A cartonized version of me with short brown hair, blue eyes, glasses, and pale skin."
        className="avatar"
      />
      <h2>Hello! My name is Lauren</h2>{" "}
      <p className="mx-1">
        I am an receptionist at a diagnostic imaging center from Dallas, TX.
        Currently, I am enrolled in a UT Austin Coding Bootcamp. My hope is to
        work in web development in the near future. I love to play video games,
        hand-make various crafts, and spend time with my husband and our pets.
      </p>
    </section>
  );
}

export default About;
