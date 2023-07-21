import '../assets/css/bookprogress.css';
import progressbar from '../assets/progressbar.png';

export default function BookProgress() {
  return (
    <div className='book-progress-wrapper'>
      <div className='progress-bar-wrapper'>
        <img className='progress-bar' src={progressbar} />
      </div>
      <p>
        <span className='progress-param'>64%</span> <br/>
        Completed
      </p>
    </div>
  )
}