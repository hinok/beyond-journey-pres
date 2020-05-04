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
} from "spectacle";

import LiveCode from "./components/LiveCode";
import { BaffleCarousel } from "./components/BaffleText";
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

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

const cppCodeBlock = indentNormalizer(`
#include <iostream>
#include <cstdlib>
#include <sstream>
#include <pthread.h>

struct thread_data_t
{
   int  thread_id;
   std::string message;
};

void *print_thread_message(void *thread_arg)
{
   struct thread_data_t *thread_data;
   thread_data = (struct thread_data_t *) thread_arg;

   cout << "Thread ID: " << thread_data->thread_id;
   cout << "Message: " << thread_data->message << endl;

   pthread_exit(NULL);
}

int main()
{
  pthread_t threads[NUM_THREADS];
  struct thread_data_t thread_data[NUM_THREADS];

  for (int i = 0; i < NUM_THREADS; i++)
  {
    auto curried_add = [](int x) -> function<int(int)> { return [=](int y) { return x + y; }; };
    auto answer = curried_add(i)(5);

    std::stringstream message;
    message << "The math result is " << answer << "!";
    thread_data.thread_id = i;
    thread_data.message = message.str();
    int err = pthread_create(&threads, NULL, print_thread_message, (void *)&thread_data[i]);

    if (err)
    {
      exit(-1)
    }
  }

  return 0;
}`);

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
          Just use <CodeSpan color="blueLight">create-react-app</CodeSpan> <span>or</span> <CodeSpan color="blueLight">next.js</CodeSpan>
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
        <Heading color="blueDark">When we started <small>4 years ago...</small></Heading>
        <UnorderedList color="secondary">
          <ListItem>create-react-app &amp; <CodeSpan>next.js</CodeSpan> didn't exist</ListItem>
          <ListItem>webpack 2.x was in beta</ListItem>
          <ListItem>react-router 4.x was in beta</ListItem>
          <ListItem>apollo 0.x</ListItem>
          <ListItem>storybook 2.x</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="codeBackground">
      <LiveCode
        code={`
      const App = () => <h1>Hello World!</h1>;

      render(<App />);
      `}
      />
    </Slide>

    <Slide backgroundColor="#fff">
      <FlexBox height="100%" flexDirection="column">
        <Heading color="blueDark">Before we deploy</Heading>
        <Text color="secondary">
          We need to build first, <CodeSpan color="blueLight">oh my webpack</CodeSpan>
        </Text>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#2c3a42">
      <FlexBox height="100%" flexDirection="column">
        <video autoPlay muted loop>
          <source
            src="https://i.imgur.com/3PLnSkF.mp4"
            type="video/mp4"
          />
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

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight" fontSize="150px">WEBPACK<br />IS HARD</Heading>
        <Text color="#fff">
          If you can, use <CodeSpan>create-react-app</CodeSpan>, <CodeSpan>next.js</CodeSpan> etc.
        </Text>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="blueDark">
      <FlexBox flexDirection="column" height="100%">
        <Heading color="blueLight">It's hard to follow</Heading>
        <Text color="#fff">
          It's hard to rebuild all optimizations and features that next.js or gatsby have built in.
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

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          SPECTACLE
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
      <Notes>
        <p>
          Notes are shown in presenter mode. Open up
          localhost:3000/?presenterMode=true to see them.
        </p>
      </Notes>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/master/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide transitionEffect="slide">
      <Heading>Code Blocks</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [23, 25],
          [40, 42],
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="cpp"
              autoFillHeight
            >
              {cppCodeBlock}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >
              {/* This notes container won't appear for step 0 */}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  This is a note!
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can use the stepper state to render whatever you like as
                  you step through the code.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
      <Text>
        Code Blocks now auto size and scroll when there is an overflow of
        content! They also auto-wrap longer lines.
      </Text>
    </Slide>
    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            Just identify the order with the prop{" "}
            <CodeSpan>elementNum</CodeSpan>!
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Out of order</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill("")
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <Markdown>
        {`
          # Layout Tables in Markdown

          | Browser         | Supported | Versions |
          |-----------------|-----------|----------|
          | Chrome          | Yes       | Last 2   |
          | Firefox         | Yes       | Last 2   |
          | Opera           | Yes       | Last 2   |
          | Edge (EdgeHTML) | No        |          |
          | IE 11           | No        |          |
        `}
      </Markdown>
    </Slide>
    <Markdown containsSlides>
      {`
        ### Even write multiple slides in Markdown
        > Wonderfully formatted quotes

        1. Even create
        2. Lists in Markdown


        - Or Unordered Lists
        - Too!!
        Notes: These are notes
        ---
        ### This slide was also generated in Markdown!

        \`\`\`jsx
        const evenCooler = "is that you can do code in Markdown";
        // You can even specify the syntax type!
        \`\`\`

        ### A slide can have multiple code blocks too.

        \`\`\`c
        char[] someString = "Popular languages like C too!";
        \`\`\`

        Notes: These are more notes
      `}
    </Markdown>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
