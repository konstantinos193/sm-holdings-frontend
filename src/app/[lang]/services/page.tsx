import { createContentRoute } from '@/lib/content-route'
import { services } from '@/content/company'

const route = createContentRoute('services', services)
export const generateMetadata = route.generateMetadata
export default route.Page
