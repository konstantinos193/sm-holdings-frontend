import { createContentRoute } from '@/lib/content-route'
import { propertyValuation } from '@/content/real-estate'

const route = createContentRoute('propertyValuation', propertyValuation, { parents: ['realEstate'], service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
