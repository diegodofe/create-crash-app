import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>

      <Link href='/cats' passHref>
        <a href='replaced'>View Cats</a>
      </Link>
    </div>
  )
}
