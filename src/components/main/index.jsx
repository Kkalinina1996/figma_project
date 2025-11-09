import React from "react";
import styles from "./styles.module.css";

// === Импорты иконок ===
import searchIcon from "../../assets/icon/search.svg";
import pinIcon from "../../assets/icon/pin.svg";
import disney from "../../assets/icon/disney.svg";
import facebook from "../../assets/icon/facebook.svg";
import microsoft from "../../assets/icon/microsoft.svg";
import sony from "../../assets/icon/sony.svg";
import cocacola from "../../assets/icon/cocacola.svg";

import finance from "../../assets/icon/finance.svg";
import truck from "../../assets/icon/truck.svg";
import design from "../../assets/icon/design.svg";
import restaurant from "../../assets/icon/restaurant.svg";
import media from "../../assets/icon/media.svg";
import support from "../../assets/icon/support.svg";
import manager from "../../assets/icon/manager.svg";
import sales from "../../assets/icon/sales.svg";

// === Цвета брендов ===
const companyColors = {
  Facebook: "#004F9D",
  Sony: "#808080",
  CocaCola: "#E41E26",
  Microsoft: "#737373",
  Disney: "#1D75BC",
};

// === Категории ===
const categories = [
  { id: 1, icon: finance, title: "Финансы" },
  { id: 2, icon: truck, title: "Грузоперевозки" },
  { id: 3, icon: design, title: "Дизайн" },
  { id: 4, icon: restaurant, title: "Ресторанный бизнес" },
  { id: 5, icon: media, title: "Мультимедиа" },
  { id: 6, icon: support, title: "Служба поддержки" },
  { id: 7, icon: manager, title: "Менеджмент" },
  { id: 8, icon: sales, title: "Продажи" },
];

// === Вакансии ===
const jobs = [
  {
    id: 1,
    category: "Финансы",
    color: "#007AFF",
    title: "Менеджер по управлению финансами в крупной компании",
    location: "Осака, Япония",
    company: "Sony",
    days: "3 дня назад",
    logo: sony,
  },
  {
    id: 2,
    category: "Продажи",
    color: "#C678DD",
    title: "Специалист по продажам",
    location: "Коасан, Япония",
    company: "Facebook",
    days: "7 дней назад",
    logo: facebook,
  },
  {
    id: 3,
    category: "Мультимедиа",
    color: "#FF3B30",
    title: "Системный администратор",
    location: "Токио, Япония",
    company: "Sony",
    days: "3 дня назад",
    logo: sony,
  },
  {
    id: 4,
    category: "Дизайн",
    color: "#FF3B30",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    location: "Йокогама, Япония",
    company: "Facebook",
    days: "7 дней назад",
    logo: facebook,
  },
  {
    id: 5,
    category: "Служба поддержки",
    color: "#34C759",
    title: "Оператор колл центра",
    location: "Томаму, Япония",
    company: "CocaCola",
    days: "1 день назад",
    logo: cocacola,
  },
  {
    id: 6,
    category: "Грузоперевозки",
    color: "#000000",
    title: "Водитель на дальние дистанции",
    location: "Кобе, Япония",
    company: "CocaCola",
    days: "1 день назад",
    logo: cocacola,
  },
];

const Main = () => {
  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <h1>Один клик и работа в кармане</h1>
        <div className={styles.searchBar}>
          <div className={styles.inputGroup}>
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder="Должность или компания" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.inputGroup}>
            <img src={pinIcon} alt="location" />
            <input type="text" placeholder="Город, Страна" />
          </div>
          <button className={styles.searchButton}>Поиск</button>
        </div>
      </section>

      {/* LOGO BAR */}
      <section className={styles.logoBar}>
        <p>Партнёры нашего сервиса</p>
        <div className={styles.logos}>
          <img src={disney} alt="Disney" />
          <img src={facebook} alt="Facebook" />
          <img src={microsoft} alt="Microsoft" />
          <img src={sony} alt="Sony" />
          <img src={cocacola} alt="CocaCola" />
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={styles.categories}>
        <h2>Работа по категориям</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.categoryCard}>
              <img src={cat.icon} alt={cat.title} />
              <p>{cat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOBS SECTION */}
      <section className={styles.jobs}>
        <h2 className={styles.jobsTitle}>Новые вакансии</h2>
        <p className={styles.jobsSubtitle}>
          Найди работу своей мечты прямо сейчас
        </p>

        <div className={styles.jobsGrid}>
          {jobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <span
                  className={styles.jobDot}
                  style={{ backgroundColor: job.color }}
                />
                <span className={styles.jobCategory}>{job.category}</span>
              </div>

              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.jobLocation}>📍 {job.location}</p>

              <div className={styles.jobFooter}>
                <span
                  className={styles.jobCompany}
                  style={{
                    color: companyColors[job.company] || "#004F9D",
                  }}
                >
                  {job.company}
                </span>
                <span>, {job.days}</span>
              </div>

            </div>
          ))}
        </div>

        <button className={styles.allJobsButton}>Все вакансии</button>
      </section>
    </main>
  );
};

export default Main;
