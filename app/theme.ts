import { extendTheme, ThemeConfig, defineStyleConfig } from '@chakra-ui/react'

const sunriseColors = {
  sunriseYellow: '#FFDD57',
  sunriseOrange: '#FF8C42',
  sunrisePink: '#FF6F91',
  sunrisePurple: '#D4A5A5',
  sunriseBlue: '#69A2D9',
  sunriseSky: '#F9F9F9',
  sunrisePeach: '#F5A7B8',
  sunriseRed: '#FF4C61',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const buttonStyles = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'md',
    _focus: {
      boxShadow: 'outline',
    },
  },
  variants: {
    solid: {
      bg: sunriseColors.sunriseOrange,
      color: 'white',
      _hover: {
        bg: sunriseColors.sunriseYellow,
        transform: 'scale(1.05)',
      },
      _active: {
        bg: sunriseColors.sunrisePink,
      },
    },
    outline: {
      borderColor: sunriseColors.sunrisePink,
      color: sunriseColors.sunrisePink,
      _hover: {
        borderColor: sunriseColors.sunriseOrange,
        color: sunriseColors.sunriseOrange,
      },
    },
    ghost: {
      color: sunriseColors.sunrisePurple,
      _hover: {
        bg: sunriseColors.sunrisePeach,
        color: 'white',
      },
    },
  },
  sizes: {
    lg: {
      height: '48px',
      fontSize: 'lg',
      px: '32px',
    },
    md: {
      height: '40px',
      fontSize: 'md',
      px: '24px',
    },
    sm: {
      height: '32px',
      fontSize: 'sm',
      px: '16px',
    },
  },
})

const theme = extendTheme({
  config,
  colors: {
    sunrise: sunriseColors,
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
  styles: {
    global: {
      'html, body': {
        background: `linear-gradient(to bottom, ${sunriseColors.sunrisePink}, ${sunriseColors.sunriseOrange})`, // Pink and Orange gradient background
        color: sunriseColors.sunrisePurple, // Text color contrast
        fontFamily: "'Roboto', sans-serif",
        lineHeight: '1.6',
        minHeight: '100vh',
      },
      h1: {
        color: sunriseColors.sunriseOrange,
        fontSize: '3xl',
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
      h2: {
        color: sunriseColors.sunrisePink,
        fontSize: '2xl',
        fontWeight: 'semibold',
        marginBottom: '1rem',
      },
      h3: {
        color: sunriseColors.sunriseYellow,
        fontSize: 'xl',
        fontWeight: 'semibold',
        marginBottom: '1rem',
      },
      p: {
        color: sunriseColors.sunrisePurple,
        fontSize: 'md',
        marginBottom: '1rem',
      },
      a: {
        color: sunriseColors.sunriseBlue,
        textDecoration: 'underline',
        _hover: {
          textDecoration: 'none',
          color: sunriseColors.sunriseRed,
        },
      },
    },
  },
  components: {
    Button: buttonStyles,
    Input: {
      baseStyle: {
        field: {
          borderColor: sunriseColors.sunrisePink,
          _hover: {
            borderColor: sunriseColors.sunriseOrange,
          },
          _focus: {
            borderColor: sunriseColors.sunriseYellow,
            boxShadow: '0 0 0 1px #FFDD57',
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: sunriseColors.sunrisePink,
        _focus: {
          borderColor: sunriseColors.sunriseYellow,
          boxShadow: '0 0 0 1px #FFDD57',
        },
      },
    },
    Badge: {
      variants: {
        subtle: {
          bg: sunriseColors.sunrisePeach,
          color: sunriseColors.sunriseBlue,
        },
        solid: {
          bg: sunriseColors.sunriseYellow,
          color: 'white',
        },
      },
    },
    Tag: {
      baseStyle: {
        colorScheme: sunriseColors.sunrisePurple, // Use your custom color here
      },
    },
    Card: {
      baseStyle: {
        backgroundColor: sunriseColors.sunrisePeach,
        borderColor: sunriseColors.sunrisePurple,
        borderWidth: '2px',
        borderRadius: '5px',
        boxShadow: 'md',
        padding: '4rem',
      },
      variants: {
        elevation: {
          boxShadow: 'lg',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        h1: {
          fontSize: '3xl',
          color: sunriseColors.sunriseOrange,
        },
        h2: {
          fontSize: '2xl',
          color: sunriseColors.sunrisePink,
        },
        h3: {
          fontSize: 'xl',
          color: sunriseColors.sunriseYellow,
        },
      },
    },
  },
})

export default theme
