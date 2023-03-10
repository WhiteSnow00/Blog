import { NextSeo } from "next-seo";
import { getProps, indexFollow } from "next-seo.config";
import { getProjectSlug } from "u/projects";

export default function Head({ params }: { params: { slug: string } }) {
  const data = getProjectSlug(params.slug);
  return (
    <NextSeo
      useAppDir={true}
      {...indexFollow()}
      {...getProps({
        title: data.frontmatter.title,
        desc: data.frontmatter.desc,
        path: `/projects/${params.slug}`,
      })}
    />
  );
}
