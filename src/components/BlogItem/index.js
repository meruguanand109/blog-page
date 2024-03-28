import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {data} = props
  const {id, title, author, avatarUrl, imageUrl, topic} = data
  return (
    <Link to={`/blogs/${id}`} className="route-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`item ${id}`} className="item-img" />
        <div className="card">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile">
            <img
              src={avatarUrl}
              alt={`avatarImg ${id}`}
              className="avatarImg"
            />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
