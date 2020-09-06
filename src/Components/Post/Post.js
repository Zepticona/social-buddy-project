import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';


const Post = (props) => {
    const { title, body, id } = props.postInfo;
    // Get a small part of the main post for display.
    const shortDescription = body.slice(0, 50);
    
    // Material UI Accordion Starts
    const Accordion = withStyles({
        root: {
          border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      })(MuiAccordion)

      const AccordionSummary = withStyles({
        root: {
          backgroundColor: 'rgba(145, 0, 0, .03)',
          borderBottom: '1px solid rgba(0, 0, 0, .125)',
          marginBottom: -1,
          minHeight: 56,
          '&$expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&$expanded': {
            margin: '12px 0',
          },
        },
        expanded: {},
      })(MuiAccordionSummary);

      const AccordionDetails = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiAccordionDetails);

      const [expanded, setExpanded] = React.useState('panel1');

      const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
      // Material UI Accordion Ends

    return (

      <Accordion className="single-post" square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <h3>{id}. {title}</h3>
          </AccordionSummary>
          <AccordionDetails className="post-brief">
              <div><p>{shortDescription} [....] </p></div>
              <div>
                  <Button style={{marginTop: '10px'}} component={Link} to={`posts/${id}`} variant="contained" color="secondary">
                      Read More
                  </Button>
              </div>                
          </AccordionDetails>
      </Accordion>

    );
};

export default Post;