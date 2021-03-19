import {
    Button
  } from '@material-ui/core';
  import { makeStyles } from "@material-ui/core/styles";
  import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
  // core components
  import GridContainer from "components/Grid/GridContainer.js";
  import GridItem from "components/Grid/GridItem.js";
  import React from "react";
  import FadeIn from 'components/FadeIn/FadeIn';
  import EmbeddedPlayer from 'components/EmbeddedPlayer/EmbeddedPlayer';
  import styling from './CulturalImmersionSection.module.scss';
  import Timetable from '../../../components/Timetable/Timetable';

  const Link = ({children}) => {
    return (
      <a href="">
        {children}
      </a>
    )
  }
  
  const ceoImage = "https://images.unsplash.com/photo-1564106273110-e2965fcabb74?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF2aWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  
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
          <Timetable />
        <div className={classes.container}>
        </div>
      </div>
    );
  }
  