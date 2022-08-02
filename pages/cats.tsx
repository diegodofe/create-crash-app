import Image from 'next/image'
import getCats from '../firestore/reads'
import Cat from '../types/cat'

export async function getServerSideProps() {
  const cats = await getCats()

  return { props: { cats } }
}

export default function Cats({ cats }: { cats: Cat[] }) {
  return (
    <div>
      <h1>Cats</h1>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {cats?.map((cat) => (
          <div
            key={cat.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              minWidth: '240px',
            }}
          >
            <p>{cat.name}</p>
            <Image
              alt={`${cat.name}-image`}
              src={cat.image}
              width={300}
              height={300}
              objectFit='cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
