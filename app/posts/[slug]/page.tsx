import { getPostSlug, getSortedPostSlugs } from "u/posts";
import { MDXComponent } from "c/MDXComponent";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import codeTitle from "u/rehypeCodeTitle";
import { ArticleJsonLd } from "next-seo";
import Script from "next/script";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const content = getPostSlug(slug);
  const source = await serialize(content.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        codeTitle,
        rehypePrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    },
  });

  return (
    <>
      <img
        src="/misc/lottie.svg"
        className="w-48 z-[6] absolute left-0 top-0 hidden lg:block"
      />
      <main className="relative prose prose-img:w-full prose-invert prose-code:font-mono prose-pre:rounded-xl prose-headings:font-heading prose-headings:border-b-2 prose-headings:border-neutral-800 prose-h2:py-3 prose-h3:py-3 prose-h4:py-3 prose-h5:py-3 prose-img:rounded-xl prose-img:border-2 prose-img:border-neutral-800 prose-h1:text-center pt-48 pb-5 mx-auto max-w-4xl px-5">
        <h1 className="rounded-xl text-3xl p-5 border-2 border-neutral-800 mb-0">
          {content.frontmatter.title}
        </h1>
        <div className="flex flex-row justify-between items-center py-1 mt-3">
          <p className="my-0 font-display font-semibold">
            {content.frontmatter.date}
          </p>
          <div className="flex flex-row justify-center items-center gap-3">
            {content.frontmatter.tag.map((tag: string) => (
              <p
                key={tag}
                className="my-0 w-fit uppercase bg-teal-300 bg-opacity-40 px-2.5 rounded-full py-0.5 text-white text-xs font-heading font-semibold"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <MDXComponent source={source} />
      </main>
      <ins className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3762669166645243"
        data-ad-slot="3424870960"
      >
      </ins>
      <ArticleJsonLd
        useAppDir={true}
        type="BlogPosting"
        url={`https://www.irvanma.me/posts/${slug}`}
        title={content.frontmatter.title}
        datePublished={content.frontmatter.date}
        dateModified={content.frontmatter.date}
        authorName={[
          {
            name: "Irvan Malik",
            url: "https://www.irvanma.me",
          },
        ]}
        images={[]}
        description={content.frontmatter.desc}
        isAccessibleForFree={true}
      />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3762669166645243"
      crossOrigin="anonymous" />
      <Script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getSortedPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
