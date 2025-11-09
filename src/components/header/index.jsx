import styles from "./styles.module.css";
import CoolJobIcon from "../../assets/icon/Cooljob.svg";
function Header() {
  return (
    <header className={styles.header}>
      <img src={CoolJobIcon} alt="" className={styles.cooljobIcon} />
      <nav>
        <ul>
          <li>
            <a href="">Поиск работы</a>
          </li>
          <li>
            <a href="">Поиск стартапов</a>
          </li>
        </ul>
        <div>
          <a href="">Регистрация</a>
          <button>Вход</button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
