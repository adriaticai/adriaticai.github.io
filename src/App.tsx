import "./App.css";
import {
  ThemeProvider, AnchorNav, CTABanner, Button, Hero
} from "@primer/react-brand";

const App = () => (
  <ThemeProvider
    colorMode="light"
    style={{ backgroundColor: 'var(--brand-color-canvas-default)' }}
  >
    <AnchorNav enableDefaultBgColor>
      <AnchorNav.Link href="about">About</AnchorNav.Link>
      <AnchorNav.Link href="products">Products</AnchorNav.Link>
      <AnchorNav.Link href="labs">Labs</AnchorNav.Link>
      <AnchorNav.Link href="blog">Blog</AnchorNav.Link>
      <AnchorNav.Link href="contact">Contact</AnchorNav.Link>
      <AnchorNav.Action href="register">Sign up</AnchorNav.Action>
    </AnchorNav>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <CTABanner
        backgroundImageSrc={{
          narrow: "images/hero.png",
          regular: "images/hero.png",
          wide: "images/hero.png"
        }}
        backgroundColor="red"
        align="center"
      >
        <CTABanner.Heading>
          <b>AI</b> without infrastructure is <b>useless</b>
        </CTABanner.Heading>
        <CTABanner.Description variant="default" style={{ fontSize: 20 }}>
          <b>
            Keep your company delivering lasting value<br />
          </b>
        </CTABanner.Description>
        <CTABanner.ButtonGroup>
          <Button>I'm interested</Button>
        </CTABanner.ButtonGroup>
      </CTABanner>
      <Hero />
      <CTABanner>
        <CTABanner.Heading size="3">
          AI will become ubiquitous.
          <br />
          Deliver value to stand out
        </CTABanner.Heading>
      </CTABanner>
    </div>
  </ThemeProvider>
);

export default App;
