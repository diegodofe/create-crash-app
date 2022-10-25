import { AnimatePresence, motion } from 'framer-motion'
import SiuThumbnail from '../components/SiuThumbnail'
import { CRASH_DOC_ID } from '../constants/cats'
import siu from '../public/siu.mp3'
import { getCatById } from '../services/cats'

export async function getServerSideProps() {
  const welcomeCat = await getCatById(CRASH_DOC_ID)

  return { props: { welcomeCat } }
}

export default function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
        }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 1000 }}
      >
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 46px)' }}>
          Welcome to create-siuuu-app!
        </h1>
        <audio src={siu} autoPlay loop>
          <track kind='captions' />
        </audio>
        <SiuThumbnail />
      </motion.div>
    </AnimatePresence>
  )
}
