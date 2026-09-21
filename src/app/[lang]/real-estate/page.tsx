import { createContentRoute } from '@/lib/content-route'
import { realEstate } from '@/content/real-estate'

const route = createContentRoute('realEstate', realEstate, { service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
