import { createContentRoute } from '@/lib/content-route'
import { guestManagement } from '@/content/property-management'

const route = createContentRoute('guestManagement', guestManagement, { parents: ['propertyManagement'], service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
