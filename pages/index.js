import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import Date from "../components/date"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Matt</strong>. My days consist of freelance
          writing, the gig economy, and learning about software development.
        </p>
        <p>
          You can follow my coding progress on{" "}
          <a href="https://github.com/emkeidi" target="blank">
            GitHub
          </a>
          .
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
