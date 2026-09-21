import { createContentRoute } from '@/lib/content-route'
import { hospitality } from '@/content/locations'

const route = createContentRoute('hospitality', hospitality)
export const generateMetadata = route.generateMetadata
export default route.Page
