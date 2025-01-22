import React from "react";
import { css } from "@biskit/styled-system/css";

export const Button = () => {
  return (
    <button
      className={css({
        color: "red",
      })}
    >
      click me
    </button>
  );
};
