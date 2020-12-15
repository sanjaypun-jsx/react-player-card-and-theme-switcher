import React from "react";
import styled from "styled-components";
import { Icons } from "./icons";

const Span = styled.p`
  color: white;
  text-align: left;
  padding: 0px 20px;
  font-size: 20px;
`;
const Icon = styled.i`
  font-size: 40px;
  padding: 0px 20px 20px 20px;
  text-align: center;
  cursor: pointer;
`;
const ProfileCards = ({ name, isDark }) => {
  return (
    <div
      style={{
        maxHeight: "500px",
        maxWidth: "300px",
        margin: "20px",
        backgroundImage: isDark
          ? "linear-gradient(62deg, #1a1a2e 0%, #322f3d 100%)"
          : "linear-gradient(62deg, #FF9A8B 0%, #FF6A88 100%)",
        borderRadius: "20px 0px 20px 0px",
        boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      }}
    >
      <img
        src={name.img}
        alt={name.name}
        style={{
          maxHeight: 300,
          maxWidth: "100%",
          borderRadius: "20px 0px 0px 0px"
        }}
      />
      <div
        style={{
          marginTop: -70,
          marginLeft: "-70%"
        }}
      >
        <i
          className="fas fa-plus-circle"
          style={{
            fontSize: 40,
            borderRadius: "50%",
            padding: 20,
            color: "white"
          }}
        />
      </div>
      <Span style={{ color: isDark ? "white" : "black" }}>
        {name.name}
        <br />
        <span style={{ fontSize: 15 }}>{name.job}</span>
      </Span>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {Icons.map((icon) => {
          return (
            <Icon
              style={{ color: isDark ? "white" : "black" }}
              key={icon.icon}
              className={icon.icon}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProfileCards;
