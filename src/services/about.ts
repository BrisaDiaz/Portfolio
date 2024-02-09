import { AboutInfo } from '@types'
const BASE_URL = 'https://api.npoint.io/a96c4811a7c601cbfef0'

async function getAboutInfo(): Promise<AboutInfo | null> {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}
export { getAboutInfo }
