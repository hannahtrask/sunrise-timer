import { Box, Heading, Link } from '@chakra-ui/react'
import { LocationManager } from '@/components/LocationManager'

export default async function Home() {
  return (
    <Box
      style={{
        height: '100vh',
        padding: '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Heading as="h2" size="2xl">
          how much time until the sun comes up again?
        </Heading>
      </Box>
      <LocationManager />
      <Link
        href="https://sunrisesunset.io/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#fff',
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          right: 0,
          padding: '1rem',
        }}
      >
        This app powered by SunriseSunset.io →
      </Link>
    </Box>
  )
}
