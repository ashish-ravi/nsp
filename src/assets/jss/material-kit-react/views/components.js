import { container, fontAdjust, fontAdjust2 } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  fontAdjust,
  fontAdjust2,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "600",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.413rem",
    maxWidth: "500px",
    margin: "10px 0 0",
    color: "#A2A2A2"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default componentsStyle;
