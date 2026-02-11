import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router-dom'

type PrototypeModule = {
  default: ComponentType
  routes?: { path: string; Component: ComponentType }[]
}

const modules = import.meta.glob<PrototypeModule>('./*/index.tsx', { eager: true })

export const prototypeNames = Object.keys(modules)
  .map((k) => k.replace('./', '').replace('/index.tsx', ''))
  .sort()

export function getPrototypeRoutes(): RouteObject[] {
  const list: RouteObject[] = []

  for (const name of prototypeNames) {
    const key = `./${name}/index.tsx`
    const mod = modules[key] as PrototypeModule | undefined
    if (!mod?.default) continue
    const Layout = mod.default
    const childRoutes = mod.routes ?? [{ path: '/', Component: () => null }]
    list.push({
      path: `prototypes/${name}`,
      element: <Layout />,
      children: childRoutes.map((r) => {
        const isIndex = r.path === '/' || r.path === ''
        return {
          index: isIndex,
          ...(isIndex ? {} : { path: r.path }),
          element: <r.Component />,
        }
      }),
    })
  }
  return list
}
