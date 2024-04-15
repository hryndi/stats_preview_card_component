import styled from "@emotion/styled";
import heroImg from "./assets/image-header-mobile.jpg";
import heroImgDesktop from "./assets/image-header-desktop.jpg";

type TextWidth = {
  secondary?: boolean;
};
type FontWeight = {
  weightSecondary?: boolean;
};
type FontAlignLeft = {
  deskLeft?: boolean;
};

const Root = styled.div`
  --clr-primary-dark-blue: hsl(244, 38%, 16%);
  --clr-secondary-violet: hsl(277, 64%, 61%);
  --clr-natural-transparent-white-paragraph: hsla(0, 0%, 100%, 0.6);

  --ff-secondary: "Inter", sans-serif;
`;

const Article = styled.article`
  background-color: var(--clr-primary-dark-blue);
  border-radius: 0.6rem;
  overflow: hidden;
  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: minmax(250px, 540px) minmax(320px, auto);
    max-width: 1100px;
    direction: rtl;
  }
`;
const ContentWrapper = styled.article`
  padding: 2.2rem;
  display: grid;
  gap: 1.5rem;
  direction: ltr;
  @media (min-width: 600px) {
    padding: 2.5rem;
  }
  @media (min-width: 900px) {
    padding: 4rem;
  }
`;

const HeroImg = styled.img`
  background: var(--clr-secondary-violet);
  opacity: 0.4;
  display: block;
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;
const Header = styled.h1<TextWidth & FontWeight & FontAlignLeft>`
  font-size: ${(props) => (props.secondary ? `1.35rem` : `2.2rem`)};
  font-weight: ${(props) => (props.weightSecondary ? 500 : 700)};
  text-align: center;

  @media (min-width: 600px) {
    text-align: ${(props) => (props.deskLeft ? `left` : `center`)};
  }
`;
const HeaderSpan = styled.span`
  color: var(--clr-secondary-violet);
`;
const MainParagraph = styled.p<FontAlignLeft>`
  text-align: center;
  color: var(--clr-natural-transparent-white-paragraph);
  font-weight: 300;
  @media (min-width: 600px) {
    text-align: ${(props) => (props.deskLeft ? `left` : `center`)};
    font-size: 1rem;
    max-width: 90%;
  }
`;
const FlexGroup = styled.div``;
const Ul = styled.ul`
  display: grid;
  justify-content: center;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
  text-align: center;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: start;
    min-width: 100%;
    /* margin-top: 1.8rem; */
    gap: 1rem;
  }
  @media (min-width: 700px) {
    margin-top: 2.5rem;
  }
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
          <source srcSet={heroImgDesktop} media="(min-width:600px)" />
          <HeroImg src={heroImg} />
        </picture>
        <ContentWrapper>
          <Header deskLeft>
            Get <HeaderSpan>insights</HeaderSpan> that help your business grow.
          </Header>
          <MainParagraph deskLeft>
            Discover the benefits of data analytics and make better decisions regarding revenue, custumer experience,
            and overall efficiency.
          </MainParagraph>
          <FlexGroup>
            <Ul>
              <Li>
                <Header secondary weightSecondary>
                  10k+
                </Header>
                <LiParagraph>Companies</LiParagraph>
              </Li>
              <Li>
                <Header secondary weightSecondary>
                  314
                </Header>
                <LiParagraph>Templates</LiParagraph>
              </Li>
              <Li>
                <Header secondary weightSecondary>
                  12M+
                </Header>
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
