import { BsBookFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import '../assets/css/header.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'category', text: 'Categories' },
];

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className='nav-logo'>
        <BsBookFill className='logo-main' />
        <h1 className='logo-main-text'>BookStore</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-main">
          {links.map((link) => {
            return (
              <li key={link.text}>
                <a href={link.path}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='user-wrapper'>
          <BiSolidUser className='user-icon'/>
      </div>
    </div>
  );  
};
export default Navbar;
