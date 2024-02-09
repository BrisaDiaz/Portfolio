import { FooterData, HeaderData, HeroData } from '@types'
const BASE_URL = 'https://api.npoint.io/bd4c4bedfdc921abbf77'

async function getFooterData(): Promise<FooterData | null> {
  try {
    const res = await fetch(`${BASE_URL}/footer`)
    const data = await res.json()
    const contactUrl = data.contact_links_url
    const contactRes = await fetch(contactUrl)
    const contactLinks = await contactRes.json()
    delete data.contact_links_url

    return { ...data, contact_links: contactLinks }
  } catch (error) {
    console.error(error)
    return null
  }
}

async function getHeaderData(): Promise<HeaderData | null> {
  try {
    const res = await fetch(`${BASE_URL}/header`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

async function getHeroData(): Promise<HeroData | null> {
  try {
    const res = await fetch(`${BASE_URL}/hero`)
    const data = await res.json()
    const contactUrl = data.contact_links_url
    const contactRes = await fetch(contactUrl)
    const contactLinks = await contactRes.json()
    delete data.contact_links_url

    return { ...data, contact_links: contactLinks }
  } catch (error) {
    console.error(error)
    return null
  }
}
export { getFooterData, getHeaderData, getHeroData }
