import React from "react";
import { css } from "@biskit/styled-system/css";

export const Button = () => {
  return (
    <button
      className={css({
        color: "red.400",
        w: "120px",
        h: "40px",
        bg: "green.400",
        borderRadius: "10px",
      })}
    >
      click me
    </button>
  );
};
