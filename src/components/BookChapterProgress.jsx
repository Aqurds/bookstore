import '../assets/css/bookchapterprogress.css';

export default function BookChapterProgress() {
  return (
    <div className='book-chapter-progress'>
      <p className='current-chapter'>
        Current Chapter
      </p>
      <p className='chapter-name'>
        Chapter 17
      </p>
      <button className='update-chapter'>
        Update Progress
      </button>
    </div>
  )
}