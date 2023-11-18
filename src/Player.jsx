import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px",
        backgroundColor: "lightgrey",
        textDecorationColor: "black",
      }}
    >
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={imageUrl}
          className="border p-2 bg-light"
        />
        <div
          className="position-absolute top-0 end-0 text-white rounded-circle d-flex justify-content-center align-items-center m-2"
          style={{
            width: 40,
            height: 40,
            fontSize: 20,
            fontWeight: "bold",
            backgroundColor: "rgba(175, 11, 55, 0.95)",
          }}
        >
          {jerseyNumber}
        </div>
      </div>
      <Card.Body>
        <Card.Title style={{ color: "#af0b37", fontWeight: "bolder" }}>
          {name}
        </Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Player Name",
  team: "Team Name",
  nationality: "Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "",
};

export default Player;
