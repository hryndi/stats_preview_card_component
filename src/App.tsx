import styled from "@emotion/styled";

const Root = styled("div")(() => ({
  "--clr-primary-dark-blue": "hsl(244, 38%, 16%)",
  "--clr-secondary-violet": "hsl(277, 64%, 61%)",
  "--clr-natural-white": "hsl(0, 0%, 100%)",
  "--clr-natural-transparent-white-paragraph": "hsla(0, 0%, 100%, 0.75)",
  "--clr-natural-transparent-white-headings": "hsla(0, 0%, 100%, 0.6)",
  "--ff-secondary": `"Lexend Deca", sans-serif`,
}));

function App() {
  return (
    <Root>
      <h1>Hello World!</h1>
    </Root>
  );
}

export default App;
