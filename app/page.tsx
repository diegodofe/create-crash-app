import Link from 'next/link'

export default function Page() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <p>Github</p>

      <Link href='/preview'>Click to see a cat</Link>
    </div>
  )
}
