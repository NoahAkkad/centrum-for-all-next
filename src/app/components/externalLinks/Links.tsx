import React from "react";
import { makeStyles } from "@mui/styles"; 
const useStyles = makeStyles({
  root: {
    color: "black",
    marginTop: "4rem",
    width: "80%",
    textAlign: "center"
  },
  links: {
    color: "#0369a1",
    borderBottom: "1px solid black",
    fontSize: "3.8rem"
  },

  container: {
    marginTop: "0.5rem",
    "&:hover": {
      fontWeight: "bold"
    }
  }
});
const urls = [
  {
    path: "https://www.paloma.se/blogg/guide-till-digital-marknadsforing-for-smaforetagare/",
    title: "Digital Marknadsföring Guide"
  },
  // Add other URLs here
];

const Links = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {urls.map((url, index) => (
        <div key={index} className={classes.container}>
          <a href={url.path} className={classes.links}>
            {url.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;