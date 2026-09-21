import { createContentRoute } from '@/lib/content-route'
import { about } from '@/content/company'

const route = createContentRoute('about', about)
export const generateMetadata = route.generateMetadata
export default route.Page
