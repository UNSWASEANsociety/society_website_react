import {
  Button
} from '@material-ui/core';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Link from 'next/link';
import React from "react";
// import custom from "assets/jss/Homepage/styles.js";
// import content from '../../assets/content/homepage/ceo';
// import FadeIn from '../../../Components/';
// import EmbeddedPlayer from '../../components/Youtube/EmbeddedPlayer';

// const {
  // ceoImage,
// } = content;

import YouTube from 'react-youtube';
import Fade from 'react-reveal/Fade';

const Link = () => {
  return (
    <a href=""></a>
  )
}

const FadeIn = ({ children }) => {
  return (
    <div>
      <Fade left>
        {children}
      </Fade>
    </div>
  );
}

const EmbeddedPlayer = ({ videoId }) => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
    };
    
    return (
      <div>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
    );

}


const ceoImage = "data:image/jpeg;base64,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";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  // Styles
  const padded = {
    "padding": "20px"
  };
  const textCenter = {
    "text-align": "center"
  };
  // const 

  return (
    <div className={classes.sections}>
      <div className={classes.container}>

        <Link href="/CulturalImmersion">
          <a>
            <strong>
              Cultural immersion
            </strong>
          </a>
        </Link>

        {/* Slogan banner */}
        <div className={`${classes.sloganSection} ${classes.textCentered}`}>
          <div className={classes.whiteTitle}>
            <h2>Inspiring the Present</h2>
          </div>
          <div className={`${classes.whiteTitle} ${classes.textCentered}`}>
            <h2>Envisioning the Future</h2>
          </div>
        </div>

        {/* Welcome message */}
        <div className={`${classes.title} ${classes.textCentered}`}>
          <h2>Welcome Message</h2>
        </div>
        <hr />


        <FadeIn>
          <GridContainer>
            <GridItem sm={4} md={4} lg={3} style={padded}>
              <h3 style={textCenter}>A message from our CEO:</h3>
              <img src={ceoImage} />
            </GridItem>
            <GridItem sm={8} md={8} lg={8} style={padded}>
              <h3 style={textCenter}>
                Anthony Paulo Sunjaya
              </h3>
              {/* TODO: Take this out to a markdown file */}
              <div style={padded}>
                It is my pleasure to welcome you to the UNSW ASEAN CONFERENCE 2020. The Conference aims to amalgamate socio-cultural, political and, economic interests all under one roof, whilst actively collaborating with the Australian and ASEAN youth from 10 different countries. 
              </div>
              <div style={padded}>
                The ultimate objective of the conference is to not only embolden and strengthen the ASEAN identity, but also empower and encourage the ASEAN-Australasian youth to more proactively engage, in the increasingly important and mutually beneficial future of the trans-international and transdisciplinary exchange of knowledge.
              </div>

              <div style={padded}>
                The Conference spread over 3 days will present over 40 outstanding speakers from former Prime Ministers, Ministers, CEOs, academics to activists talking about issues that matter to ASEAN and globally today.
              </div>
              <div style={padded}>
                With a wide variety of topics to look forward to from Social Entrepreneurship, Human Rights, Cybersecurity, Climate Change, Women Empowerment to Impacts of COVID-19, there's certainly a topic for you. We look forward to seeing you all on the 10th, 17th and 24th of October 2020.
              </div>
            </GridItem>
          </GridContainer>
        </FadeIn>

        <FadeIn>
          <EmbeddedPlayer style={{"display": "block", "margin": "0 auto"}} videoId="yiYLijzTb5Q" />
        </FadeIn>

        <FadeIn>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <h3>Vision</h3>
              <div>
                Inspiring the Present. Envisioning the Future of ASEAN, Australia and global relations.
              </div>
              <div>
                Download our handbook for free!
              </div>
            </GridItem>
            <GridItem xs={12} sm={8} md={8} lg={8}>
              <h3>
                Mission
              </h3>
              {/* TODO: Take this out to a markdown file */}
              <div>
                The Conference aims to bring together over 2000 participants from ASEAN, Australia and globally to connect and discuss possible solutions about issues that matter to ASEAN and globally today including our joint future beyond the COVID-19 pandemic.  
              </div>
              <Button variant="contained" color="primary">
                Download Handbook
              </Button>
            </GridItem>
          </GridContainer>
        </FadeIn>
      </div>
    </div>
  );
}
