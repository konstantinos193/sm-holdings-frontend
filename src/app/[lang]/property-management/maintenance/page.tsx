import { createContentRoute } from '@/lib/content-route'
import { maintenance } from '@/content/property-management'

const route = createContentRoute('maintenance', maintenance, { parents: ['propertyManagement'], service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
