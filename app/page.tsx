import { Box, Link } from '@chakra-ui/react'
import { LocationManager } from '@/components/LocationManager'

export default async function Home() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        <LocationManager />
      </Box>
      <Box
        style={{
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link
          href="https://sunrisesunset.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff' }}
        >
          This app powered by SunriseSunset.io →
        </Link>
      </Box>
    </Box>
  )
}
