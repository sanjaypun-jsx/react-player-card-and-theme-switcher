import React, { useState } from "react";
import ProfileCards from "./profileCards";
import "./styles.css";
import { Names } from "./names";
import { Col, Row, Switch } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const handleChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{ backgroundColor: isDark ? "#222831" : "white", height: 700 }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: isDark ? "white" : "black" }}>
          Switch Theme to {isDark ? "light" : "dark"}
        </h1>
        <Switch onChange={handleChange} style={{ cursor: "pointer" }} />
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Rubik"
        }}
      >
        <Row>
          {Names.map((name) => {
            return (
              <Col
                key={name.name}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                span={8}
                xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={8}
              >
                <ProfileCards name={name} isDark={isDark} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
