import { createContentRoute } from '@/lib/content-route'
import { propertyManagement } from '@/content/property-management'

const route = createContentRoute('propertyManagement', propertyManagement, { service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
