import { AnimatePresence, motion } from 'framer-motion'
import CatThumbnail from '../components/CatThumbnail'
import { CRASH_DOC_ID } from '../constants/cats'
import { getCatById } from '../services/cats'
import Cat from '../types/cat'

export async function getServerSideProps() {
  const welcomeCat = await getCatById(CRASH_DOC_ID)

  return { props: { welcomeCat } }
}

export default function Home({ welcomeCat }: { welcomeCat: Cat }) {
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
          Welcome to create-crash-app!
        </h1>
        <CatThumbnail cat={welcomeCat} />
      </motion.div>
    </AnimatePresence>
  )
}
