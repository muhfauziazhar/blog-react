import React from "react";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBContainer>
        <MDBTypography note noteColor="primary">
          OurMoments merupakan final project dari Muhammad Fauzi Azhar
          dalam kegiatan Progate Fast Track Bootcamp Backend.
          <br></br>Blog ini menggunakan library ReactJS, framework
          ExpressJS, dan database MySQL.
        </MDBTypography>
      </MDBContainer>
    </div>
  );
};

export default About;
