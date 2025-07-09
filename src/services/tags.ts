import { ProjectsTags } from '@types'
const BASE_URL = 'https://api.npoint.io/919ce5c8cac91fefee98'

async function getTags(): Promise<ProjectsTags | null> {
  try {
    const res = await fetch(BASE_URL, { cache: 'no-store' })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export { getTags }
