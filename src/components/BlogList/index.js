import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {BlogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(eachData => ({
      title: eachData.title,
      id: eachData.id,
      author: eachData.author,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      topic: eachData.topic,
    }))
    this.setState({BlogData: formattedData, isLoading: false})
  }

  render() {
    const {BlogData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          BlogData.map(eachData => (
            <BlogItem data={eachData} key={eachData.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
