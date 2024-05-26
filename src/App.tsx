
import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

import './global.css'
import styles from './app.module.css'
import { PostType } from './types/postType'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rafaeldafranca.png",
      name: "Rafael França",
      role: "Analista @rafaelfranca.com"
    },
    content: [
      { type: "paragraph", content: "Hello!!" },
      { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis." },
      { type: "link", content: "rafaelfranca.com" },
    ],
    publishedAt: new Date('2024-05-24 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: " Egestas integer eget aliquet nibh praesent. Scelerisque in dictum non consectetur. Placerat vestibulum lectus mauris ultrices eros in cursus turpis." },
      { type: "link", content: "rocketseat.com.br" },
    ],
    publishedAt: new Date('2024-05-24 20:00:00')
  }
];

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>

    </div>
  )
}