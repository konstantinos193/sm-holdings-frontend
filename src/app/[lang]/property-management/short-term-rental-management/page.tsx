import { createContentRoute } from '@/lib/content-route'
import { shortTermRentalManagement } from '@/content/property-management'

const route = createContentRoute('shortTermRentalManagement', shortTermRentalManagement, { parents: ['propertyManagement'], service: true })
export const generateMetadata = route.generateMetadata
export default route.Page
