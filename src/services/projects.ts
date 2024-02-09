import { Project } from '@types'
const BASE_URL = 'https://api.npoint.io/cd0d57abcbf2d83157be'

async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data.reverse()
  } catch (error) {
    console.error(error)
    return []
  }
}

async function fetchProjectById(id: number): Promise<Project | null> {
  try {
    const res = await fetch(`${BASE_URL}/${id - 1}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export { getProjects, fetchProjectById }
