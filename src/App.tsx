import "./App.css";
import {
  ThemeProvider, AnchorNav, CTABanner, Button, IDE, Hero
} from "@primer/react-brand";

const App = () => (
  <ThemeProvider
    colorMode="auto"
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
    <CTABanner
      backgroundImageSrc={{
        narrow: "images/hero.png",
        regular: "images/hero.png",
        wide: "images/hero.png"
      }}
      align="center"
    >
      <CTABanner.Heading className="">
        From “we use AI” to ROI
      </CTABanner.Heading>
      <CTABanner.Description variant="default">
        <b>
          Deliver lasting value to your customers.<br />When AI becomes ubiquitous, it will
          be the value you deliver with it that matters most.
        </b>
      </CTABanner.Description>
      <CTABanner.ButtonGroup>
        <Button>I'm interested</Button>
        <Button>I'm not interested</Button>
      </CTABanner.ButtonGroup>
    </CTABanner>
    <Hero />
    <CTABanner>
      <CTABanner.Heading size="3">
        Hype is great.<br />
        Get hyped about value
      </CTABanner.Heading>
    </CTABanner>
    <IDE variant="glass" height={500}>
      <IDE.Editor
        showReplayButton={false}
        files={[{
          name: "Program.cs",
          alternativeText: "A C# program",
          code: `using System;

Console.WriteLine("Let's write some code");`.split('\n')
        }]}
      />
    </IDE>
  </ThemeProvider>
);

export default App;
