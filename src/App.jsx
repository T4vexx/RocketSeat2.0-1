import { Header } from './components/Header'
import { Post } from './components/Post'

import style from "./App.module.css"
import "./global.css"
import { Sidebar } from './components/sidebar'

function App() {

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Fernandes"
            content="sadkmsdk asmdkam a amdkam a aksmdka dakm dkamd kasmkas"
          />
          <Post 
            author="Gabriel Buzzi"
            content="sadkmsdk asmdkam a amdkam a aksmdka dakm dkamd kasmkas"
          />
        </main>
      </div>
    </>
  )
}

export default App
