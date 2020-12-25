
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';


const useStyles = makeStyles((theme) => ({
    paperleft: {
        padding: '8px 20px',
        spacing: 800,
        [theme.breakpoints.down('sm')]: {
            marginLeft: "-2vw",
        },
        marginLeft: "10vw",
        backgroundColor: "#fdd54f",
    },
    paperright: {
        padding: '10px 20px',
        spacing: 800,
        [theme.breakpoints.down('sm')]: {
            marginRight: "-2vw",
        },
        marginRight: "10vw",
        backgroundColor: "#000",
    },
    opposite:{
        marginTop: "1vh",
    },

    content: {
        align: "right"
    },

    colourright: {
        color: "#fdd54f"
    },

    colourleft: {
        color: "#000"
    }
}));


export default function Timelinew() {
const classes = useStyles();

    return (
        <div>
            <Timeline align = "alternate">

                <TimelineItem>
                    <TimelineOppositeContent className={classes.opposite}>
                        <Typography variant="body1" color="textSecondary">
                        February 19th, 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <AssignmentLateIcon></AssignmentLateIcon>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper  elevation={4} className={classes.paperright}>
                            <Typography variant="h6" component="h1" align = "left" className={classes.colourright}>
                                Deadline for Supplementary Material 
                            </Typography>
                            <Typography align="left">Deadline for the Admission Information Form, required documents, and English language results (if applicable) for all programs except Conditional Admission to Pharmacy, Optometry, and Pharmacy.</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className={classes.opposite}>
                        <Typography variant="body1" color="textSecondary">
                        April 15th, 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent> 
                        <Paper elevation={4} className={classes.paperleft}>
                            <Typography variant="h6" component="h1" align="right" className={classes.colourleft}>
                                Ontario Bursary
                            </Typography>
                            <Typography>Deadline for Ontario students to apply for an entrance bursary.</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className={classes.opposite}>
                        <Typography variant="body1" color="textSecondary">
                        mid-May, 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper  elevation={4} className={classes.paperright}>
                            <Typography variant="h6" component="h1" align = "left" className={classes.colourright}>
                                Offers of Admission sent out
                            </Typography>
                            <Typography align="left"></Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className={classes.opposite}>
                        <Typography variant="body1" color="textSecondary">
                        June 1st, 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent> 
                        <Paper elevation={4} className={classes.paperleft}>
                            <Typography variant="h6" component="h1" align="right" className={classes.colourleft}>
                                Deadline for Admission and Residence
                            </Typography>
                            <Typography>Deadline to accept an offer of admission and guaranteed residence. You must accept both offers to guarantee residence.</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <Link href='https://uwaterloo.ca/registrar/important-dates/calendar' target="_blank">
                <Button size='large' variant='contained' color='primary'>
                    Calender
                </Button>
            </Link>


        </div>

    )
}
