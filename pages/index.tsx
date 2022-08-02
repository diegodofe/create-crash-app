import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 1000 }}
      >
        <button type='button'>
          <Link href='/cats' passHref>
            <a href='replaced'>View Cats</a>
          </Link>
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
