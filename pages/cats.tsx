import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import getCats from '../firestore/reads'
import Cat from '../types/cat'

export async function getServerSideProps() {
  const cats = await getCats()

  return { props: { cats } }
}

export default function Cats({ cats }: { cats: Cat[] }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -1000 }}
      >
        <div
          style={{
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: '#FEF9EF',
            maxWidth: '720px',
          }}
        >
          <h1>Cats</h1>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {cats?.map((cat) => (
              <div
                key={cat.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '1',
                  minWidth: '240px',
                  gap: '4px',
                }}
              >
                <strong>{cat.name}</strong>
                <Image
                  alt={`${cat.name}-image`}
                  src={cat.image}
                  width={300}
                  height={300}
                  objectFit='cover'
                  style={{ borderRadius: '8px' }}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
