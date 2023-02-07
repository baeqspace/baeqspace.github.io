import './App.css';
import {useState, useEffect, useRef} from 'react'
import Article from './comp/Article/Article'

function App() {
  const [articles, setArticles] = useState([])

  const fetchData = async (count)=>{
    let header = new Headers()
    header.append('Content-Type', 'application/json')
    let data = await fetch(`/content/${count}`,{method: 'GET', headers: header}).then(d => d.json())
    if (data.msg === 'done') {return}
    setArticles([...articles, data])
  }

  useEffect(()=>{
    if (articles.length === 0) {fetchData(1); return}
    const observer = new IntersectionObserver(async (ent) => {
      if (ent[0].isIntersecting) {
        observer.disconnect()
        fetchData(articles.length + 1)
      }
    })
    let lastArticle = document.querySelector('.article:last-of-type')
    observer.observe(lastArticle)
  }, [articles])

  return (
    <div className="App">
      <p className="greet-1">Welcome to the Habr RSS parser!</p>
      <p className="greet-2">Here are the latest news...</p>
      <div className="arts-cont">
        {articles.map((a,i)=> {
          return <Article link={a.link} text={a.title}></Article>
        })}
      </div>
    </div>
  );
}

export default App;
