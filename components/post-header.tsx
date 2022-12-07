import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date}: Props) => {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <PostTitle>{title}</PostTitle>

      <div className="max-w-2xl mx-auto">

        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>

    </section>
  )
}

export default PostHeader
