import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Grid, Typography, Button } from "@material-ui/core"

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="NSP"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 180,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/rt_1.png").default}>
        <div className={classes.container}>
          
          <Grid>
              <Grid container>
                <Grid item md={4}>
                <div className={classes.brand}>
                  <Typography className={classes.title}>Run and Transform</Typography>
                </div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={9}>
                  <div className={classes.brand}>
                  <Typography className={classes.subtitle}>Balance today’s needs with tomorrow’s opportunities.</Typography>
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={9}>
                  <div>
                  <Button variant="contained" style={{borderRadius: 10, backgroundColor: "white", color: "#0CA1C9", marginTop: 30, borderRadius: 40, padding: 15, fontSize:"1rem"}}>Get inspired</Button>
                  </div>
                </Grid>
              </Grid>
          </Grid>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />

        <div style={{backgroundImage: "url(" + "https://9b74456f2e4bcbc20970-51751c7e8fb38e7c8b474cab6c7dc602.ssl.cf5.rackcdn.com/2021-02/rectangle-2_1.png" + ")" }}>
          <div className={classes.container} style={{ color:"white", paddingTop: 100, paddingBottom: 100}}>
            <Grid>
              <Grid container>
              <Grid item md={1} xs={1} sm={1}></Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography className={classes.fontAdjust} style={{ fontWeight:800, textAlign: "center"}}>Helping 40,000 companies worldwide run and transform,</Typography>
                  <Typography className={classes.fontAdjust} style={{ fontWeight:800, textAlign: "center"}}>including 98 of the Fortune 100</Typography>
                </Grid>
                <Grid item md={1} xs={1} sm={1}></Grid>
              </Grid>
              <Grid container style={{marginTop:60}}>
                <Grid item md={3} sm={6} xs={12} style={{borderRight:"1px solid white", padding: 20}}>
                  <Typography variant={"h1"} style={{fontWeight:900, textAlign: "center"}}>9</Typography>
                  <Grid container>
                    <Grid item md={12}>
                      <Typography className={classes.fontAdjust2} style={{textAlign:"center"}}>of the top 10 investment companies</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} sm={6} xs={12} style={{borderRight:"1px solid white", padding: 20}}>
                  <Typography variant={"h1"} style={{fontWeight:900, textAlign: "center"}}>10</Typography>
                  <Grid container>
                    <Grid item md={12}>
                      <Typography className={classes.fontAdjust2} style={{textAlign:"center"}}>of the top 10</Typography>
                      <Typography className={classes.fontAdjust2} style={{textAlign:"center"}}>telecommunications</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} sm={6} xs={12} style={{borderRight:"1px solid white",  padding: 20}}>
                  <Typography variant={"h1"} style={{fontWeight:900, textAlign: "center"}}>10</Typography>
                  <Grid container>
                    <Grid item md={12}>
                      <Typography className={classes.fontAdjust2} style={{textAlign:"center"}}>of the top 10</Typography>
                      <Typography className={classes.fontAdjust2} style={{textAlign:"center"}}>pharmaceuticals</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} sm={6} xs={12} style={{borderRight:"1px solid white",  padding: 20}}>
                  <Typography variant={"h1"} style={{fontWeight:900, textAlign: "center"}}>10</Typography>
                  <Grid container>
                    <Grid item md={12}>
                      <Typography className={classes.fontAdjust2} style={{textAlign:"center"}}>of the top 10</Typography>
                      <Typography className={classes.fontAdjust2} style={{textAlign:"center"}}>aerospace and defense</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

              
          </div>
        </div>
        
        
      </div>
      <Footer />
    </div>
  );
}
