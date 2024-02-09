import { TechStack } from '@types'
const BASE_URL = 'https://api.npoint.io/ffffb04a9a39a181c3cb'

async function getTechStack(): Promise<TechStack | null> {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export { getTechStack }
