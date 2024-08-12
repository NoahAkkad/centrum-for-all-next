import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqcontent } from "../../utils/faq";
import "./Faq.module.css";

const Faq = ({ city }) => {
  return (
    <div className="faqRoot">
      <h2 className="title">Vanliga frågor</h2>
      <div className="root">
        {faqcontent?.map((el, i) => (
          <Accordion key={i} className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordionSummary"
            >
              <Typography className="heading" variant="h6">
                {el.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordionDetails">
              <Typography
                variant="subtitle1"
                className="contentText"
              >
                {!city
                  ? el.text.replaceAll("i City", "")
                  : el.text.replaceAll("City", city)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
