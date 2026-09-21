import { createContentRoute } from '@/lib/content-route'
import { owners } from '@/content/real-estate'

const route = createContentRoute('owners', owners)
export const generateMetadata = route.generateMetadata
export default route.Page
