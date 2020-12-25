
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


const useStyles = makeStyles((theme) => ({
    paperleft: {
        padding: '6px 16px',
        spacing: 800,
        marginLeft: "10vw",
        backgroundColor: "#fdd54f",
    },
    paperright: {
        padding: '6px 16px',
        spacing: 800,
        marginRight: "10vw",
        backgroundColor: "#000",
    },
    opposite:{
        marginTop: 25,
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
                        <Typography variant="body2" color="textSecondary">
                        9:30 am
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
                                HELOO
                            </Typography>
                            <Typography align="left">Hi</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className={classes.opposite}>
                        <Typography variant="body2" color="textSecondary">
                        9:30 am
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
                                HELO
                            </Typography>
                            <Typography>Hi</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className={classes.opposite}>
                        <Typography variant="body2" color="textSecondary">
                        9:30 am
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
                                HELOO
                            </Typography>
                            <Typography align="left">Hi</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className={classes.opposite}>
                        <Typography variant="body2" color="textSecondary">
                        9:30 am
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
                                HELO
                            </Typography>
                            <Typography>Hi</Typography>
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
