import React from 'react';
import { Box, Typography, Tooltip, Theme, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { makeStyles, createStyles } from '@mui/styles';

import Timeline from './components/Timeline';

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    slideContainer: {
      position: 'relative',
      width: theme.spacing(25 * 4),
      borderRadius: theme.spacing(7.5),
      overflow: 'hidden',
    },
    slideAnimated: {
      animation: `$slide 10s linear infinite`,
    },
    '@keyframes slide': {
      '0%': {
        left: 0,
      },
      '100%': {
        left: '-100%',
      },
    },
  })
);

const MAX_WIDTH = 1000;

const events = [
  {
    from: 'July 2020',
    to: 'Present',
    title: 'Software Engineer',
    subtitle: 'Vitalxchange Inc.',
    content: (
      <Box>
        <Typography component="div">
          <ul>
            <li>
              Build a management tool for the company’s main platform using
              Reactjs, Firebase, GraphQL and Kibana.
            </li>
            <li>
              Design scalable document-based database schemas for fast queries.
            </li>
            <li>Write secured and optimized GraphQL query resolvers.</li>
            <li>
              Research and design a recommendation system for matching offers on
              the platform to customers.
            </li>
          </ul>
        </Typography>
      </Box>
    ),
  },
  {
    from: 'Summer 2019',
    to: '',
    title: 'Full-stack Developer Intern',
    subtitle: 'Resolve TOK Inc.',
    content: (
      <Box>
        <Typography component="div">
          <ul>
            <li>
              Worked with team to create a website for a social media platform
              using Reactjs and Firebase
            </li>
            <li>
              Revamped UI design and improved front-end code for better
              performance, reusability and capability for future update while
              maintaining proper backend functionalities
            </li>
          </ul>
        </Typography>
      </Box>
    ),
  },
  {
    from: '2016',
    to: '2020',
    title: 'Computer Science Student',
    subtitle: 'Denison University - GPA: 3.69',
    content: (
      <Box>
        <Typography component="div">
          <ul>
            <li>
              Relevant coursework: Algorithm Design, Theory of Computation, Data
              Structures, Database Systems, Operating System, Natural Language
              Processing, Natural Computing, Software Engineer
            </li>
            <li>
              Teaching assistant: Reinforced students’ knowledge on course
              materials. Assisted a class of 20+ students with in-class
              materials by explaining difficult concepts using comprehensible
              examples
            </li>
          </ul>
        </Typography>
      </Box>
    ),
  },
];

const icons = [
  'react-icon.svg',
  'graphql-icon.svg',
  'firebase-icon.svg',
  'kibana-icon.svg',
];

const skills = [
  'Algorithms',
  'Problem solving',
  'JavaScript',
  'C++',
  'Python',
  'React Native',
  'ReactJS',
  'HTML',
  'CSS',
  'ES6',
  'Firebase',
  'GraphQL',
  'Elasticsearch',
];

const MyTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
  },
}));

function App() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        color: 'secondary.contrastText',
        minHeight: '100vh',
        pb: theme.spacing(20),
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          minHeight: theme.spacing(60),
          p: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box className={classes.slideContainer}>
              <Box
                className={classes.slideAnimated}
                sx={{ whiteSpace: 'nowrap', position: 'relative' }}
              >
                {icons.concat(icons).map((name) => (
                  <Box
                    key={name}
                    sx={{
                      width: theme.spacing(25),
                      display: 'inline-block',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      alt={name}
                      src={'/' + name}
                      height={theme.spacing(20)}
                      width="auto"
                      style={{
                        transform: 'translate(-50%,0)',
                        marginLeft: '50%',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, rgba(38,50,56,0) 50%, ${theme.palette.secondary.main} 100%)`,
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ maxWidth: MAX_WIDTH, margin: 'auto', mt: 2 }}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            I'm a developer with a background in problem solving and experience
            with ReactJS, GraphQL, Firebase,{' '}
            <div style={{ display: 'inline-block' }}>
              Elasticsearch (Kibana)
            </div>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Socials />
      </Box>

      <Box sx={{ margin: 'auto', mt: 10, pl: 2, pr: 2, maxWidth: MAX_WIDTH }}>
        <Typography variant="h4" align="center" color="primary.main">
          <strong>Work experience and education</strong>
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Timeline events={events} />
        </Box>
      </Box>

      <Box sx={{ margin: 'auto', mt: 10, maxWidth: MAX_WIDTH }}>
        <Typography variant="h4" align="center" color="primary.main">
          <strong>Skills</strong>
        </Typography>
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {skills.map((skill: string) => (
            <Box
              key={skill}
              sx={{
                p: 2,
                m: 1,
                backgroundColor: 'secondary.light',
                borderRadius: 8,
              }}
            >
              <Typography variant="h5">{skill}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" color="primary.main">
          <strong>Contact me</strong>
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Socials />
        </Box>
      </Box>
    </Box>
  );
}

export default App;

const Socials = () => {
  const theme = useTheme();

  const socials = [
    {
      url: 'https://www.linkedin.com/in/hiep-phan-11b58a130',
      title: 'Check out my LinkedIn',
      icon: (
        <i
          className="fa-brands fa-linkedin"
          style={{ color: theme.palette.secondary.contrastText }}
        ></i>
      ),
    },
    {
      url: 'mailto:phan.hiepq@gmail.com',
      title: 'Contact me via email',
      icon: (
        <i
          className="fas fa-envelope"
          style={{ color: theme.palette.secondary.contrastText }}
        ></i>
      ),
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {socials.map((social: any) => (
        <Box
          sx={{
            pl: 2,
            pr: 2,
            color: theme.palette.secondary.main,
            fontSize: theme.spacing(5),
          }}
        >
          <MyTooltip title={social.title}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  width: theme.spacing(10),
                  height: theme.spacing(10),
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'secondary.light',
                }}
              >
                {social.icon}
              </Box>
            </a>
          </MyTooltip>
        </Box>
      ))}
    </Box>
  );
};
