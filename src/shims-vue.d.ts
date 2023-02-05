/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.svg' {
  const value: any
  export = value
}

declare module '*.wav' {
  const value: any
  export = value
}