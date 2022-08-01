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
      {cats?.map((cat) => (
        <div key={cat.id}>
          <h5>{cat.name}</h5>
          <Image
            alt={`${cat.name}-image`}
            src={cat.image}
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  )
}
