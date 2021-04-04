import React from "react";
import Section from "./Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "./SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: 0,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function TestimonialsSection(props) {
  const classes = useStyles();

  const items = [
    {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQF8UmzWhBiNJQ/profile-displayphoto-shrink_100_100/0/1588276202188?e=1623283200&v=beta&t=K4JpIaFDcj1nZKAW2Jmokiwkn2jcSzduAw1zc9kWSR8",
      name: "Pooja Sund",
      testimonial:
        "Salman was one of the professionals behind the success of the MSP event organized today. I was impressed with his potential, understanding of leadership concepts such as empathy, team building, personal branding, etc.",
      company: "Microsoft",
    },
    {
      avatar: "",
      name: "Nazmul Mumtahin",
      testimonial:
        "I had the pleasure of receiving expert consultation from Salman on a solution developed using Microsoft’s Azure cloud services. Salman’s passion for cloud solutions coupled with his tech knowledge has ensured that the project has gone as smoothly as possible with minimal interruptions.",
      company: "Switchd",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body1" component="p">
                    "{item.testimonial}"
                  </Typography>
                </CardContent>
                <CardHeader
                  className={classes.header}
                  avatar={
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  }
                  title={item.name}
                  subheader={item.company}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;
