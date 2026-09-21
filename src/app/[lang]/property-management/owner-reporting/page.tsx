import { createContentRoute } from '@/lib/content-route'
import { ownerReporting } from '@/content/property-management'

const route = createContentRoute('ownerReporting', ownerReporting, { parents: ['propertyManagement'], service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
