import React from "react";
import ReactDOM from "react-dom";

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
  Quote,
} from "spectacle";

import vsDark from "prism-react-renderer/themes/vsDark";

import LiveCode from "./components/LiveCode";
import { BaffleCarousel } from "./components/BaffleText";
import GithubLink from "./components/GithubLink";
import beyondImage from "./images/beyond.png";
import beyond2Image from "./images/beyond2.png";

import beyondWww1Image from "./images/beyond-www-1.png";
import beyondWww2Image from "./images/beyond-www-2.png";
import beyondWww3Image from "./images/beyond-www-3.png";
import beyondWww4Image from "./images/beyond-www-4.png";
import beyondWww5Image from "./images/beyond-www-5.png";
import beyondWww6Image from "./images/beyond-www-6.png";
import beyondWww7Image from "./images/beyond-www-7.png";

import be1Image from "./images/be-1.png";
import be2Image from "./images/be-2.png";
import createReactAppGithubImage from "./images/create-react-app-github.png";
import nextjsGithubImage from "./images/nextjs-github.png";
import technologiesImage from "./images/technologies.png";
import webpackImage from "./images/webpack.png";
import nextjsTwitter1Image from "./images/nextjs-twitter-1.png";
import nextjsTwitter2Image from "./images/nextjs-twitter-2.png";
import reactHotLoaderGithubImage from "./images/react-hot-loader-github.png";
import beyondWwwMismatchImage from "./images/beyond-www-mismatch-warning.png";
import reactGithubMismatchImage from "./images/react-github-mismatch.png";
import reactHelmetNytImage from "./images/react-helmet-nyt.png";
import apolloImage from "./images/apollo.jpg";
import sentryChunkErrorsImage from "./images/sentry-chunk-errors.png";
import apolloGithub1Image from "./images/apollo-github-1.png";
import apolloGithub2Image from "./images/apollo-github-2.png";
import twitterLogoSvg from "./images/twitter-logo.svg";
import githubLogoImage from "./images/GitHub-Mark-120px-plus.png";

import webpackCssSample from "raw-loader!./code-samples/webpack-css-sample";
import babelConfigSample from "raw-loader!./code-samples/babel-config-sample";
import reactToolboxDefaultCheckerSample from "raw-loader!./code-samples/react-toolbox-defaultChecker-sample";
import reactToolboxDefaultCheckerFixSample from "raw-loader!./code-samples/react-toolbox-defaultChecker-fix-sample";
import compareAppVersionsSample from "raw-loader!./code-samples/compare-app-versions-sample";

const technologiesGroups = [
  {
    name: "Code",
    list: ["es6+", "typescript", "flow", "elm", "coffeescript"],
  },
  {
    name: "Frameworks",
    list: [
      "none aka jquery",
      "react.js",
      "angular 2+",
      "ember",
      "vuejs",
      "backbone",
      "aurelia",
      "web components (polymer)",
      "web components (native)",
    ],
  },
  {
    name: "CSS",
    list: ["css", "css modules", "css in js"],
  },
  {
    name: "Bundlers",
    list: [
      "webpack",
      "system.js",
      "parcel",
      "browserify",
      "gulp.js",
      "grunt.js",
      "makefile",
    ],
  },
  {
    name: "Api",
    list: ["rest", "graphql", "falcor"],
  },
  {
    name: "Api clients",
    list: ["relay", "apollo", "lokka", "fetch or xhr"],
  },
  {
    name: "State management",
    list: ["setState", "redux", "mobx"],
  },
  {
    name: "redux side effects",
    list: ["redux-thunk", "redux-saga", "redux-observable", "middlewares"],
  },
  {
    name: "css processing",
    list: ["sass/scss", "less", "stylus", "postcss", "cssnext"],
  },
  {
    name: "Routing",
    list: [
      "react-router",
      "router5",
      "rrtr",
      "react-router-component",
      "react-mini-router",
      "universal router",
    ],
  },
  {
    name: "Forms",
    list: ["none", "formik", "redux-form"],
  },
  {
    name: "Testing",
    list: ["jest", "mocha", "karma", "jasmime", "sinon", "chai"],
  },
];

const appCodeSample = `
const App = () => <h1>Hello World!</h1>;

render(<App />);
`;

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: "'Montserrat', Helvetica, Arial, sans-serif",
    text: "Helvetica, Arial, sans-serif",
    beyondHeading: "'PT Serif', serif",
    beyondText: "'Muli', Helvetica, Arial, sans-serif",
  },
  colors: {
    primary: "#ffffff",
    secondary: "#424242",
    tertiary: "#78909C",
    quartenary: "#90A4AE",
    quinary: "#B0BEC5",
    senary: "#CFD8DC",

    blueDark: "#182983",
    blueLight: "#26C6DA",
    codeBackground: "#1e1e1e",
    beyond: "#FFD750",
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = ({ slideNumber, numberOfSlides }) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width="100%"
  >
    <Box padding="2">
      <FullScreen />
    </Box>
    <Text fontSize="20px">
      {slideNumber + 1} / {numberOfSlides}
    </Text>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide backgroundColor="beyond">
      <FlexBox flexDirection="column" height="100%">
        <Heading fontFamily="beyondHeading" color="black">
          Beyond’s journey
        </Heading>
        <Text fontFamily="beyondText" color="secondary" textAlign="center">
          to server-side rendered application with <br /> react.js, graphql,
          webpack and ...
        </Text>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="beyond"
      backgroundImage={`url(${beyondImage})`}
      backgroundSize="contain"
      backgroundPosition="right bottom"
      backgroundOpacity={1}
    />

    <Slide
      backgroundColor="beyond"
      backgroundImage={`url(${beyond2Image})`}
      backgroundSize="contain"
      backgroundPosition="right bottom"
      backgroundOpacity={1}
    >
      <FlexBox height="100%" flexDirection="column">
        <Box width="60%">
          <Heading textAlign="center" color="black" fontSize="40px">
            We’re the UK’s trusted companion for everything after life. Whether
            you’re looking to sort out your will or you’ve recently lost
            someone, we’re here to help.
          </Heading>
        </Box>
      </FlexBox>
    </Slide>

    {[
      beyondWww1Image,
      beyondWww2Image,
      beyondWww3Image,
      beyondWww4Image,
      beyondWww5Image,
      beyondWww6Image,
      beyondWww7Image,
    ].map((image) => (
      <Slide
        key={image}
        backgroundColor="#fff"
        backgroundImage={`url(${image})`}
        backgroundSize="contain"
        backgroundPosition="center center"
        backgroundOpacity={1}
      />
    ))}

    <Slide backgroundColor="#edf3f8">
      <Box style={{ overflow: "scroll", flex: "1 0 0" }}>
        <img src={be1Image} style={{ maxWidth: "100%" }} />
        <img src={be2Image} style={{ maxWidth: "100%" }} />
      </Box>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">#1 Problem</Heading>
        <Heading fontSize="30px" color="primary">
          What technologies should we choose?
        </Heading>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="blueDark">
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {technologiesGroups.map((group, index) => (
          <FlexBox
            flex={1}
            key={index}
            flexDirection="column"
            style={{
              backgroundColor:
                (index + 1) % 2 === 0
                  ? "rgba(255, 255, 255, 0.1)"
                  : "transparent",
            }}
          >
            <Text
              textAlign="left"
              fontSize="10px"
              letterSpacing="0.2em"
              color="blueLight"
              style={{ textTransform: "uppercase" }}
            >
              {group.name}
            </Text>
            <Text fontSize="20px">
              <BaffleCarousel
                texts={group.list}
                duration={2000}
                textChangeDuration={4000}
              />
            </Text>
          </FlexBox>
        ))}
      </Grid>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${technologiesImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark">Why 🤔</Heading>
        <Text color="secondary">
          Just use <CodeSpan color="blueLight">create-react-app</CodeSpan>{" "}
          <span>or</span> <CodeSpan color="blueLight">next.js</CodeSpan>
        </Text>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="codeBackground">
      <FlexBox height="100%" flexDirection="column">
        <video autoPlay muted loop>
          <source
            src="https://media.giphy.com/media/zZeCRfPyXi9UI/giphy.mp4"
            type="video/mp4"
          />
        </video>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${createReactAppGithubImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${nextjsGithubImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark">The stack</Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr 1fr"
          alignItems="center"
          justifyContent="center"
          gridRowGap={1}
        >
          <FlexBox paddingTop={0} flex={1}>
            <UnorderedList color="secondary">
              <ListItem>ES6+</ListItem>
              <ListItem>React.js</ListItem>
              <ListItem>CSS Modules / SCSS</ListItem>
              <ListItem>GraphQL / Apollo</ListItem>
            </UnorderedList>
          </FlexBox>
          <FlexBox paddingTop={0} flex={1}>
            <UnorderedList color="secondary">
              <ListItem>Webpack</ListItem>
              <ListItem>redux / redux-saga</ListItem>
              <ListItem>react-router</ListItem>
              <ListItem>
                <del>redux-form</del> ⇒ formik
              </ListItem>
            </UnorderedList>
          </FlexBox>
        </Grid>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark">Why not CSS-in-JS?</Heading>
        <Text color="secondary">When the project started, we could pick:</Text>
        <UnorderedList fontSize="30px" color="secondary">
          <ListItem>
            <GithubLink href="https://github.com/cssinjs/jss">JSS</GithubLink>
          </ListItem>
          <ListItem>
            <FlexBox justifyContent="left" width="100%">
              <GithubLink href="https://github.com/FormidableLabs/radium">
                <s>Radium</s>
              </GithubLink>{" "}
              <Text fontSize="20px" color="tertiary" style={{ padding: 0 }}>
                (maintenance status now, no future development)
              </Text>
            </FlexBox>
          </ListItem>
          <ListItem>
            <GithubLink href="https://github.com/rebassjs/rebass">
              Rebass
            </GithubLink>
          </ListItem>
          <ListItem>
            <FlexBox justifyContent="left" width="100%">
              <GithubLink href="https://github.com/rtsao/csjs">
                <s>CSJS</s>
              </GithubLink>{" "}
              <Text fontSize="20px" color="tertiary" style={{ padding: 0 }}>
                (no development since 2017)
              </Text>
            </FlexBox>
          </ListItem>
          <ListItem>
            <GithubLink href="https://github.com/css-modules/css-modules">
              CSS Modules{" "}
              <Appear elementNum={0}>
                <Text fontSize="20px" color="tertiary" style={{ padding: 0 }}>👈 Picked</Text>
              </Appear>
            </GithubLink>
          </ListItem>
          <ListItem>
            <GithubLink href="https://github.com/Khan/aphrodite">
              Aphrodite
            </GithubLink>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark" style={{ marginBottom: 0, paddingBottom: 0 }}>
          CSS-in-JS
        </Heading>
        <Text color="secondary" fontSize="24px">
          Past - Present by{" "}
          <a
            className="link"
            href="https://www.youtube.com/watch?v=W-zVPl7CGrY&feature=youtu.be"
          >
            Max Stoiber @Agent Conf
          </a>
        </Text>
        <Grid
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr 1fr"
          alignItems="center"
          justifyContent="center"
          gridRowGap={1}
        >
          <UnorderedList fontSize="24px" color="secondary">
            <ListItem>
              <span className="date">Nov 14:</span> JSS
            </ListItem>
            <ListItem>
              <span className="date">Nov 14:</span> @vjeux (conference pres)
            </ListItem>
            <ListItem>
              <span className="date">Jan 15:</span> <s>Radium</s>
            </ListItem>
            <ListItem>
              <span className="date">Feb 15:</span> Rebass
            </ListItem>
            <ListItem>
              <span className="date">May 15:</span> CSS Modules (not technically
              CSS-in-JS)
            </ListItem>
            <ListItem>
              <span className="date">Sep 15:</span> <s>CSJS</s>
            </ListItem>
            <ListItem>
              <span className="date">Oct 15:</span> Aphrodite
            </ListItem>
            <ListItem>
              <span className="date">Jun 16:</span> Fela
            </ListItem>
            <ListItem>
              <span className="date">Jul 16:</span> <s>Glamor</s>
            </ListItem>
            <ListItem>
              <span className="date">Oct 16:</span> jsxstyle
            </ListItem>
          </UnorderedList>
          <UnorderedList fontSize="24px" color="secondary">
            <ListItem>
              <span className="date">Oct 16:</span> styled-components
            </ListItem>
            <ListItem>
              <span className="date">Dec 16:</span> styletron
            </ListItem>
            <ListItem>
              <span className="date">Dec 16:</span> styled-jsx
            </ListItem>
            <ListItem>
              <span className="date">Mar 17:</span> Astroturf
            </ListItem>
            <ListItem>
              <span className="date">Apr 17:</span> <s>Glamorous</s>
            </ListItem>
            <ListItem>
              <span className="date">May 17:</span> styled-components v2
            </ListItem>
            <ListItem>
              <span className="date">Jul 17:</span> Emotion
            </ListItem>
            <ListItem>
              <span className="date">Sep 17:</span> Linaria
            </ListItem>
            <ListItem>
              <span className="date">Nov 18:</span> Emotion v10
            </ListItem>
            <ListItem>
              <span className="date">Jun 19:</span> theme-ui
            </ListItem>
          </UnorderedList>
        </Grid>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark">Potential problems* CSS-in-JS</Heading>
        <UnorderedList color="secondary">
          <ListItem>
            watch out for performance issues (
            <a
              className="link"
              title="The unseen performance costs of modern CSS-in-JS libraries in React apps by Aggelos Arvanitakis"
              href="https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps/"
            >
              #1
            </a>
            ,{" "}
            <a
              className="link"
              title="Reddit's issue with styled-components"
              href="https://www.reddit.com/r/redesign/comments/8smbob/an_update_on_performance/e10rd4h?utm_source=share&utm_medium=web2x"
            >
              #2
            </a>
            ,{" "}
            <a
              className="link"
              title="Performance tests"
              href="http://necolas.github.io/react-native-web/benchmarks/"
            >
              #3
            </a>
            ,{" "}
            <a
              className="link"
              title="Stop using CSS in JavaScript for web development"
              href="https://medium.com/@gajus/stop-using-css-in-javascript-for-web-development-fa32fb873dcc"
            >
              #4
            </a>
            ,{" "}
            <a
              className="link"
              title="Styled components V4: the good, the bad, and something completely different."
              href="https://medium.com/ansarada-thinking/styled-components-v4-the-good-the-bad-and-something-completely-different-e891139e0138"
            >
              #5
            </a>
            )
          </ListItem>
          <ListItem>no cacheable stylesheets (when CSS included in JS)</ListItem>
          <ListItem>more total bytes sent (CSS + runtime lib)</ListItem>
          <ListItem>no async loading of CSS (when CSS included in JS)</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark">
          When we started <small>4 years ago...</small>
        </Heading>
        <UnorderedList color="secondary">
          <ListItem>
            <CodeSpan>create-react-app</CodeSpan> &amp;{" "}
            <CodeSpan>next.js</CodeSpan> didn't exist
          </ListItem>
          <ListItem>
            <CodeSpan>webpack 2.x</CodeSpan> was in beta
          </ListItem>
          <ListItem>
            <CodeSpan>react-router</CodeSpan> 4.x was in beta
          </ListItem>
          <ListItem>
            <CodeSpan>apollo</CodeSpan> 0.x
          </ListItem>
          <ListItem>
            <CodeSpan>storybook</CodeSpan> 2.x
          </ListItem>
          <ListItem>CSS-in-JS was still super new...</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="codeBackground">
      <LiveCode code={appCodeSample} />
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark">Before deployment</Heading>
        <Text color="secondary">
          Build first, <CodeSpan color="blueLight">oh my webpack...</CodeSpan>
        </Text>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#2c3a42">
      <FlexBox height="100%" flexDirection="column">
        <video autoPlay muted loop>
          <source src="https://i.imgur.com/3PLnSkF.mp4" type="video/mp4" />
        </video>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${webpackImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">#2 Problem</Heading>
        <Heading fontSize="30px" color="primary">
          Configuring webpack is hard, really hard...
        </Heading>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="codeBackground">
      <Heading color="blueLight">CSS &amp; Webpack</Heading>
      <CodePane
        fontSize={18}
        language="javascript"
        theme={vsDark}
        autoFillHeight
      >
        {webpackCssSample}
      </CodePane>
    </Slide>

    <Slide backgroundColor="codeBackground">
      <Heading color="blueLight">babel.config.js</Heading>
      <CodePane
        fontSize={18}
        language="javascript"
        theme={vsDark}
        autoFillHeight
      >
        {babelConfigSample}
      </CodePane>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight" fontSize="150px">
          WEBPACK
          <br />
          IS HARD
        </Heading>
        <Text color="#fff">
          If you can, use <CodeSpan>create-react-app</CodeSpan>,{" "}
          <CodeSpan>next.js</CodeSpan> etc.
        </Text>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">It's hard to follow</Heading>
        <Text color="#fff">
          It's hard to rebuild all optimizations and features that{" "}
          <CodeSpan>next.js</CodeSpan> or <CodeSpan>gatsby</CodeSpan> have built
          in.
        </Text>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${nextjsTwitter1Image})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${nextjsTwitter2Image})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueDark">SSR &amp; Webpack</Heading>
        <Heading fontSize="30px" color="secondary">
          We need to build our application twice
        </Heading>
        <OrderedList color="secondary">
          <ListItem>client (browsers)</ListItem>
          <ListItem>server (node.js)</ListItem>
        </OrderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueDark">Uncharted territory</Heading>
        <UnorderedList color="secondary">
          <ListItem>hot reloading for client and server</ListItem>
          <ListItem>the same css hashes for client and server</ListItem>
          <ListItem>mock packages that cannot be used on server</ListItem>
          <ListItem>serve production hashed files (.css, .js)</ListItem>
          <ListItem>graphql errors handling</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">#3 Sometimes works</Heading>
        <Grid
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr 1fr"
          alignItems="center"
          justifyContent="center"
          gridRowGap={1}
        >
          <Heading fontSize="30px" color="primary">
            Development build
          </Heading>
          <Heading fontSize="30px" color="primary">
            ❌ Doesn't work
          </Heading>
          <Heading fontSize="30px" color="primary">
            Production build
          </Heading>
          <Heading fontSize="30px" color="primary">
            ✅ Works
          </Heading>
        </Grid>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueDark">react-hot-loader</Heading>
        <Heading fontSize="30px" color="secondary">
          Tweak React components in real time.
        </Heading>
        <Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xsSnOQynTHs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${reactHotLoaderGithubImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="codeBackground">
      <Heading color="blueLight">react-toolbox's defaultChecker</Heading>
      <CodePane
        fontSize={18}
        language="javascript"
        theme={vsDark}
        autoFillHeight
      >
        {reactToolboxDefaultCheckerSample}
      </CodePane>
    </Slide>

    <Slide backgroundColor="codeBackground">
      <Heading color="blueLight">Fix, provide customChecker</Heading>
      <CodePane
        fontSize={18}
        language="javascript"
        theme={vsDark}
        autoFillHeight
      >
        {reactToolboxDefaultCheckerFixSample}
      </CodePane>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">#4 Problem</Heading>
        <Heading fontSize="30px" color="primary">
          DOM mismatch
        </Heading>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${beyondWwwMismatchImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${reactGithubMismatchImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueDark">A bit longer explanation</Heading>
        <UnorderedList>
          <ListItem>
            <GithubLink href="https://github.com/facebook/react/issues/11128">
              React 16 client side render doesn't update DOM's style that comes
              from SSR #11128
            </GithubLink>
          </ListItem>
          <ListItem>
            <GithubLink href="https://github.com/facebook/react/issues/10591">
              Document that you can't rely on React 16 SSR patching up
              differences #10591
            </GithubLink>
          </ListItem>
          <ListItem>
            <GithubLink href="https://github.com/facebook/react/issues/11189">
              Need a hook for hydration mismatch #11189
            </GithubLink>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">#5 Problem</Heading>
        <Heading fontSize="30px" color="primary">
          react-helmet &amp; SSR
        </Heading>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${reactHelmetNytImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Box width="60%">
          <Quote color="secondary">
            [...] when viewing the HTML of a page, you might see the correct
            page content with the wrong meta tags. Or the correct page content
            with empty values for the meta tags.
          </Quote>
          <Text fontSize="20px" color="tertiary">
            <a
              className="link"
              href="https://open.nytimes.com/the-future-of-meta-tag-management-for-modern-react-development-ec26a7dc9183"
            >
              The Future of Meta Tag Management for Modern React Development:
              Introducing React-Helmet-Async
            </a>{" "}
            by Scott Taylor (Lead Software Engineer at The New York Times)
          </Text>
        </Box>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Heading>Solution</Heading>
        <Text>
          <GithubLink href="https://github.com/staylor/react-helmet-async#readme">
            <CodeSpan>react-helmet-async</CodeSpan>
          </GithubLink>
        </Text>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">#5 Problem</Heading>
        <Heading fontSize="30px" color="primary">
          Houston, we have a problem
        </Heading>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${apolloImage})`}
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${apolloGithub1Image})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${apolloGithub2Image})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">#6 Problem</Heading>
        <Heading fontSize="30px" color="primary">
          chunk loading errors
        </Heading>
      </FlexBox>
    </Slide>

    <Slide
      backgroundColor="#fff"
      backgroundImage={`url(${sentryChunkErrorsImage})`}
      backgroundSize="contain"
      backgroundPosition="center center"
      backgroundOpacity={1}
    />

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueDark">Deploy with fallback</Heading>
        <UnorderedList color="secondary">
          <ListItem>
            on Monday (<CodeSpan>a.12zxc.js, b.25asd.js</CodeSpan>)
          </ListItem>
          <ListItem>
            on Tuesday (<CodeSpan>a.12zxc.js, b.98jkl.js, c.45bnm.js</CodeSpan>)
          </ListItem>
          <ListItem>
            Users from monday doesn't know about{" "}
            <CodeSpan>b.98jkl.js, c.45bnm.js</CodeSpan>
          </ListItem>
          <ListItem>We need to cover that case</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="codeBackground">
      <Heading>Solution</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [2, 2],
          [3, 6],
          [8, 8],
          [25, 32],
        ]}
      >
        {(value, step) => (
          <Box position="relative" className="fix-codepane">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="javascript"
              autoFillHeight
            >
              {compareAppVersionsSample}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >
              {step === 0 && (
                <Text fontSize="1.5rem" margin="0rem">
                  It's a root component
                </Text>
              )}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  <a
                    className="link"
                    href="https://reactjs.org/docs/react-component.html#componentdidcatch"
                  >
                    https://reactjs.org/docs/react-component.html#componentdidcatch
                  </a>
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  Check if catched error is a chunk loading error
                </Text>
              )}

              {step === 3 && (
                <Text fontSize="1.5rem" margin="0rem">
                  Fetch newest deployed version from API, if `result` is{" "}
                  <CodeSpan fontSize="1.5rem" color="blueLight">
                    true
                  </CodeSpan>
                  , it means that something went wrong and we render UI in an
                  error state. If `result` is{" "}
                  <CodeSpan fontSize="1.5rem" color="blueLight">
                    false
                  </CodeSpan>
                  , we can reload the page and fetch newest webpack runtime with
                  information about all new chunks.
                </Text>
              )}

              {step === 4 && (
                <Text fontSize="1.5rem" margin="0rem">
                  Reload the page.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueDark">Thanks!</Heading>
        <Text color="secondary">Questions?</Text>
        <Text color="secondary" fontSize="30px">
          Dawid Karabin, Wrocław 2020
        </Text>
        <FlexBox>
          <Box>
            <a href="https://twitter.com/hinoczek">
              <img src={twitterLogoSvg} width="60px" />
            </a>
          </Box>
          <Box>
            <a href="https://github.com/hinok">
              <img src={githubLogoImage} width="36px" />
            </a>
          </Box>
        </FlexBox>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
