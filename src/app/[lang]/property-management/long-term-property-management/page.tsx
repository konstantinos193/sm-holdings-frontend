import { createContentRoute } from '@/lib/content-route'
import { longTermPropertyManagement } from '@/content/property-management'

const route = createContentRoute('longTermPropertyManagement', longTermPropertyManagement, { parents: ['propertyManagement'], service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
