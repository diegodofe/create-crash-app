import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase'
import Cat from '../types/cat'

export default async function getCats() {
  const catCollection = collection(db, 'cats')
  const catSnapshot = await getDocs(catCollection)
  return catSnapshot.docs.map((doc) => {
    const cat = { id: doc.id, ...doc.data() } as unknown as Cat
    return cat
  })
}
