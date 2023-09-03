import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const ArticleList = () => {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => { setPosts(data); console.log(posts) })
  }, [])

  const url = 'iuwiuerdhsjfh';

  const list = posts.map((post: any) => {
    return <Link key={post.id} to={`/article/${post.id}`}><li>{post.title}</li>
    </Link>
  })

  console.log(list);

  return (
    <div>
      <h1>
        ArticleList Page
      </h1>
      <p>This Page for Training react Routing</p>

      {list}
      <Link to={`/article/${url}`} >Test link</Link>
    </div>
  )
}