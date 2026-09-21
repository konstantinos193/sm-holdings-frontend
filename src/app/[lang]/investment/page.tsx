import { createContentRoute } from '@/lib/content-route'
import { investment } from '@/content/real-estate'

const route = createContentRoute('investment', investment, { service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
