import { createContentRoute } from '@/lib/content-route'
import { preveza } from '@/content/locations'

const route = createContentRoute('preveza', preveza, { parents: ['locations'] })
export const generateMetadata = route.generateMetadata
export default route.Page
