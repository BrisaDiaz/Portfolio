import { TechStack } from '@types'
const BASE_URL = 'https://api.npoint.io/5b5ac9422e8d33a9e00d'

async function getTechStack(): Promise<TechStack[] | null> {
  try {
    const res = await fetch(BASE_URL, { cache: 'no-store' })
    const data = await res.json()
    return data.sort((a: TechStack, b: TechStack) => a.id < b.id)
  } catch (error) {
    console.error(error)
    return null
  }
}

export { getTechStack }
