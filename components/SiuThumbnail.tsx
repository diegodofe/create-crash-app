import Image from 'next/image'
import siu from '../public/siu_img.jpeg'

export default function SiuThumbnail() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Image
        alt='ronny-image'
        src={siu}
        width={200}
        height={200}
        objectFit='cover'
        style={{ borderRadius: '8px' }}
        priority
      />
      <h3>{`<--- CRISTIANO RONALDO`}</h3>
    </div>
  )
}
