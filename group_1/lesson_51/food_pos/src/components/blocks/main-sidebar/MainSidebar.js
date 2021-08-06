import './MainSidebar.scss';
import logoImg from '../../../static/images/logo.svg';

function MainSidebar() {

  return (
    <aside className="main-sidebar">
      {/* Logo */}
      <img src={logoImg} />
      {/* Nav */}
      <nav class="main-nav">
        <ul>
          <li>
            <a href="#">
              <i className="icon-Home" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-Discount" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-Message" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-Notification" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-Setting" />
            </a>
          </li>
        </ul>
      </nav>
      {/* Bottom nav */}
      <nav class="main-nav">
        <ul>
          <li>
            <a href="#">
              <i className="icon-Log-Out" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default MainSidebar
