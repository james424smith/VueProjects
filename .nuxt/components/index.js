export { default as ListItem } from '../..\\components\\listItem.vue'

export const LazyListItem = import('../..\\components\\listItem.vue' /* webpackChunkName: "components_listItem" */).then(c => c.default || c)
