import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

export type EventType = {
  from: string;
  to: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content: React.ReactNode;
};

export type PropsType = {
  events: EventType[];
};

export default function Timeline(props: PropsType) {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  if (isSmDown)
    return (
      <Box>
        {props.events.map((event: EventType, index: number) => {
          const dateOnLeft = true;

          return (
            <Box key={index} sx={{ mt: index === 0 ? 0 : 5 }}>
              <Box
                sx={{
                  color: 'primary.main',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {event.from}
                  {event.to ? ' - ' : ''}
                  {event.to}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  component="div"
                  variant="h5"
                  sx={{ color: 'primary.main' }}
                >
                  {event.title}
                </Typography>
                <Typography component="div" sx={{ color: 'primary.main' }}>
                  {event.subtitle}
                </Typography>
                {event.content}
              </Box>
            </Box>
          );
        })}
      </Box>
    );

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(-50%, 0)',
          left: '50%',
          width: theme.spacing(1.5),
          height: '100%',
          backgroundColor: 'primary.light',
          borderRadius: 1,
        }}
      />

      {props.events.map((event: EventType, index: number) => {
        const dateOnLeft = true;

        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: !dateOnLeft ? 'row' : 'row-reverse',
              position: 'relative',
              backgroundColor: 'transparent',
              p: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: !dateOnLeft ? 'flex-end' : 'flex-start',
              }}
            >
              <Box>
                <Typography
                  component="div"
                  variant="h5"
                  sx={{ color: 'primary.main' }}
                >
                  {event.title}
                </Typography>
                <Typography component="div" sx={{ color: 'primary.main' }}>
                  {event.subtitle}
                </Typography>
                {event.content}
              </Box>
            </Box>
            <Box
              sx={{
                mt: 0.5,
                position: 'relative',
                width: theme.spacing(15),
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  width: theme.spacing(2),
                  height: theme.spacing(2),
                  borderRadius: '50%',
                  border: 4,
                  borderColor: 'primary.dark',
                  backgroundColor: 'primary.light',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 1,
                  transform: 'translate(0, -50%)',
                  top: '50%',
                  left: !dateOnLeft ? '50%' : undefined,
                  right: dateOnLeft ? '50%' : undefined,
                  border: `dashed 2px ${theme.palette.primary.dark}`,
                  width: '50%',
                  borderRadius: '2px',
                }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: !dateOnLeft ? 'flex-start' : 'flex-end',
              }}
            >
              <Box
                sx={{
                  pl: 2,
                  pr: 2,
                  color: 'primary.main',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {event.from}
                  {event.to ? ' - ' : ''}
                  {event.to}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
