import React from "react";
import { expertise_list } from "./data";
import * as Icon from "react-icons/fa";

export const Expertise = () => {
  return (
    <div style={{ padding: "15% 7%" }}>
      <h1>I work with</h1>
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {expertise_list.map((expertise, indx) => {
          return (
            <div
              key={indx}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <span style={{ paddingRight: 20 }}>{expertise.icon}</span>
              <span style={{marginBottom: 3}}>{expertise.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
