import { Header } from './componentes/Header';
import { Post, PostType }  from './componentes/Post';
import { Sidebar } from './componentes/Sidebar';


import styles from './App.module.css';

import './global.css';



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:'https://media.licdn.com/dms/image/C4D03AQERmfk_iV-dgg/profile-displayphoto-shrink_400_400/0/1587567528318?e=1689206400&v=beta&t=BcO-DZLebHdI_SJdwoW5X9ojuehH31X57bjRMo6Vki0',
      name:'Larissa Yasmim',
      role:'Web Design'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz do curso de ReactJS, da plataforma Rocketseat. O nome do projeto é Ignite Feed 🚀',},
      {type: 'link', content: 'linkedin.com/in/larissayasmimpa // feedreactjs.netlify.com'},
    ],
    publishedAt: new Date('2023-02-17 23:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://www.estudarfora.org.br/wp-content/uploads/2021/01/mando.jpg',
      name:'Danyelle L.',
      role:'Designer'
    },
    content:[
      {type: 'paragraph', content: 'Hey guys 👋',},
      {type: 'paragraph', content: " I just added another project to my portfolio. It's a project I did in the ReactJS course, on the Rocketseat platform. Project name is Ignite Feed 🚀",},
      {type: 'link', content: 'linkedin.com/in/danyelle-lorrane // feedreactjs.netlify.com'},
    ],
    publishedAt: new Date('2023-02-17 23:00:00'),
  },
];



export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>

        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                
                <Post
                    key={post.id} 
                    post={post}
                />
              )
            }) }
        </main>
      </div>  
    </div>
  )
}
