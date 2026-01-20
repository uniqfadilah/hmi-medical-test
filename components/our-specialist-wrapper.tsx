import { getSpecialistFeatured } from '@/lib/queries'
import OurSpecialist from './our-specialist'

export default async function OurSpecialistWrapper() {
  const specialists = await getSpecialistFeatured()

  return <OurSpecialist specialists={specialists} />
}
