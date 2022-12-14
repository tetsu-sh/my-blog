import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage?:string
  date: string
}

const PostHeader = ({ title,coverImage, date}: Props) => {
  return (

    <div className='mt-16'>
      <PostTitle>{title}</PostTitle>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      <div className="max-w-2xl mx-auto">

      </div>
    </div>

  )
}

export default PostHeader
