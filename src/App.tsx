import styled from "@emotion/styled";
import heroImg from "./assets/image-header-mobile.jpg";
import heroImgDesktop from "./assets/image-header-desktop.jpg";

type TextWidth = {
  secondary?: boolean;
};
type FontWeight = {
  weightSecondary?: boolean;
};

const Root = styled.div`
  --clr-primary-dark-blue: hsl(244, 38%, 16%);
  --clr-secondary-violet: hsl(277, 64%, 61%);
  --clr-natural-transparent-white-paragraph: hsla(0, 0%, 100%, 0.6);

  --ff-secondary: "Inter", sans-serif;
`;

const Article = styled("article")({
  backgroundColor: "var(--clr-primary-dark-blue)",
});
const ContentWrapper = styled("article")({
  padding: "2rem",
  display: "grid",
  gap: "1.5rem",
});
const HeroImg = styled.img`
  background: var(--clr-secondary-violet);
  opacity: 0.4;
`;
const Header = styled.h1<TextWidth & FontWeight>`
  font-size: ${(props) => (props.secondary ? `1rem` : `1.6rem`)};
  font-weight: ${(props) => (props.weightSecondary ? 500 : 700)};
  text-align: center;
`;
const HeaderSpan = styled.span`
  color: var(--clr-secondary-violet);
`;
const MainParagraph = styled.p`
  text-align: center;
  color: var(--clr-natural-transparent-white-paragraph);
  font-weight: 400;
  /* font-family: "var(--ff-secondary)"; */
`;
const FlexGroup = styled.div``;
const Ul = styled.ul`
  display: grid;
  justify-content: center;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
  text-align: center;
`;
const Li = styled.li``;
const LiParagraph = styled.div`
  color: var(--clr-natural-transparent-white-paragraph);
  font-weight: 400;
  text-transform: uppercase;
`;

function App() {
  return (
    <Root>
      <Article>
        <picture style={{ backgroundColor: "hsl(277, 64%, 61%)" }}>
          <source srcSet="" media="(min-width:600px)" />
          <HeroImg src={heroImg} />
        </picture>
        <ContentWrapper>
          <Header>
            Get <HeaderSpan>insights</HeaderSpan> that help your business grow.
          </Header>
          <MainParagraph>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, custumer experience, and overall efficiency.
          </MainParagraph>
          <FlexGroup>
            <Ul>
              <Li>
                <Header weightSecondary>10k+</Header>
                <LiParagraph>Companies</LiParagraph>
              </Li>
              <Li>
                <Header weightSecondary>314</Header>
                <LiParagraph>Templates</LiParagraph>
              </Li>
              <Li>
                <Header weightSecondary>12M+</Header>
                <LiParagraph>Queries</LiParagraph>
              </Li>
            </Ul>
          </FlexGroup>
        </ContentWrapper>
      </Article>
    </Root>
  );
}

export default App;
