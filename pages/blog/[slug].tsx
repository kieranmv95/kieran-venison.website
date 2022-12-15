import Head from "next/head";
import md from "markdown-it";
import Footer from "../../components/Footer";
import Grid from "../../components/Grid";
import Header from "../../components/Header";
import Social from "../../components/Social";
import { prettyDate } from "../../helpers/prettyDate";
import styles from "../../styles/pages/blogPost.module.scss";

//import prism js
import "prismjs";

//prismjs theme
import "prismjs/themes/prism-tomorrow.css";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Post = {
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
  content: any;
};

export default function BlogPost({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Grid>
          <div className={styles.blockSpacing}>
            <p>{prettyDate(new Date(post.frontmatter.date))}</p>
            <h1 className={styles.postTitle}>{post.frontmatter.title}</h1>

            <div
              className={styles.blogPostContent}
              dangerouslySetInnerHTML={{ __html: md().render(post.content) }}
            />
          </div>
        </Grid>
        <Footer />
        <Social />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "blog");
  const files = fs.readdirSync(postsDirectory, "utf-8");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const postsDirectory = path.join(process.cwd(), "blog");
  const file = fs.readFileSync(`${postsDirectory}/${slug}.md`, "utf-8");

  const { data: frontmatter, content } = matter(file);

  return {
    props: {
      post: {
        frontmatter,
        content,
      },
    },
  };
}