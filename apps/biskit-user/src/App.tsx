import { styled } from "@biskit/styled-system/jsx";
import { button } from "@biskit/styled-system/recipes";

export default function App() {
  return (
    <>
      <div className={button({ visual: "edgy" })}>hello world!</div>
      <MyButton variant="funky">hello world!</MyButton>

      <styled.span bg="yellow">hello world!</styled.span>
      <styled.span bg="yellow">hello world!</styled.span>

      <div className={button({})}>hello world!</div>
    </>
  );
}

// styled 방식
const MyButton = styled("button", {
  base: {
    display: "flex",
    border: "3px solid token(colors.red.400)",
  },
  variants: {
    variant: {
      funky: { bg: "red.400", color: "white" },
      edgy: { border: "3px solid token(colors.red.400)" },
    },
  },
});
