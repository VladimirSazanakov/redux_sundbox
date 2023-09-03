import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const initPost: Post = {
  userId: 0,
  id: 0,
  title: '',
  body: ''

}

export const CreateArticle = () => {
  // const { slug } = useParams();
  // console.log(slug);

  // const [post, setPost] = useState<Post>(initPost);

  // useEffect(() => {
  //   fetch(`http://jsonplaceholder.typicode.com/posts/${slug}`)
  //     .then(res => res.json())
  //     .then(data => { setPost(data); console.log(data) })
  // }, [])

  return (
    <div>
      <h1>
        Create Article Page
      </h1>


      <p>This Page for Training react Routing</p>
    </div>
  )
}