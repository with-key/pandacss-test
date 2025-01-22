import { css } from "@biskit/styled-system/css";
import { Button } from "@mold/user";

export default function App() {
  return (
    <>
      <div className={css({ w: 200, h: 200, bg: "red", color: "#fff" })}>
        hello world!
      </div>

      <Button></Button>
    </>
  );
}
