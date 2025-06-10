import { MetadataRoute } from "next";
import { allBlogs, allPages } from "contentlayer/generated";
import siteMetadata from "@/data/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }));
  const routes = ["author", "blog", "tags"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // Páginas SEO específicas
  const seoRoutes = [
    "facturacion-combustible-flotas",
    "software-control-flotas"
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const pagesRoutes = allPages.map(page => ({
    url: `${siteUrl}/${page.path.replace('pages/', '')}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...seoRoutes, ...blogRoutes, ...pagesRoutes];
}
