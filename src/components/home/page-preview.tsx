'use client'

import { usePreview } from "@sanity/lib/preview"
import HomePage from "./page"
import { projectsQuery, techCategoryQuery, techItemsQuery } from "@lib/queries"

function HomePagePreview() {
  const categories = usePreview(null, techCategoryQuery)
  const items = usePreview(null, techItemsQuery)
  const projects = usePreview(null, projectsQuery)

  return <HomePage categories={categories} items={items} projects={projects}/>
}

export default HomePagePreview