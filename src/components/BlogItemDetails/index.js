import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogData: ''}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formattedData = {
      title: data.title,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      topic: data.topic,
      content: data.content,
      id: data.id,
      author: data.author,
    }
    this.setState({blogData: formattedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, author, content, imageUrl, avatarUrl, id} = blogData
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details-container">
            <h1 className="d-title">{title}</h1>
            <div className="d-profile">
              <img
                src={avatarUrl}
                alt={`avatarImg ${id}`}
                className="d-avatarImg"
              />
              <p className="d-author">{author}</p>
            </div>
            <img src={imageUrl} className="d-image" alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
