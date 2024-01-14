import { useRef, useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactSVG } from "react-svg";

// Import Swiper styles
import "swiper/css";
// IMG
import hero1 from "./img/hero1.png";
import hero2 from "./img/hero2.png";
import ben1 from "./img/tag.svg";
import ben2 from "./img/pay.svg";
import ben3 from "./img/construction-worker.svg";
import ben4 from "./img/repair.svg";
import pc from "./img/pc-tower.svg";
import vga from "./img/video-card.svg";
import asic from "./img/asic.svg";
import ssd from "./img/ssd.svg";
import cpu from "./img/cpu.svg";
import mother from "./img/motherboard.svg";
import power from "./img/power-supply.svg";
import ram from "./img/ram.svg";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const googleMap = useRef(null);

  const executeScroll = () => googleMap.current.scrollIntoView();

  const mobileBurger = classNames(
    "fixed transition-all top-0 flex z-10 flex-col items-center justify-between w-full h-screen p-2 max-w-72 bg-dark-violet gap-y-4",
    {
      "right-0": openMenu,
      "-right-full": !openMenu,
    }
  );

  return (
    <div className="flex flex-col w-full font-ubuntu">
      {openModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-dark-violet bg-opacity-90">
          <div className="flex flex-col w-full max-w-sm p-2 bg-white rounded-md h-fit gap-y-2">
            <h3 className="text-xl font-semibold text-center text-dark-violet">
              Замовити зворотній дзвінок
            </h3>
            <form className="flex flex-col w-full gap-y-2">
              <input
                type="text"
                placeholder="Ваше ім'я"
                className="p-2 text-white rounded-md bg-dark-violet bg-opacity-90"
              />
              <input
                type="tel"
                placeholder="Ваше номер телефону"
                className="p-2 text-white rounded-md bg-dark-violet bg-opacity-90"
              />
              <input
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(false);
                }}
                type="submit"
                className="flex items-center justify-center w-full p-2 text-base font-semibold text-center text-white transition-colors border rounded cursor-pointer border-rosy bg-rosy hover:text-rosy hover:bg-white"
                value={"Зателефонуйте мені"}
              />
            </form>
          </div>
        </div>
      )}
      {/* Hero */}
      <div className="flex flex-col w-full bg-dark-violet">
        {/* Container */}
        <div className="w-full p-2 mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between w-full py-2">
            {/* Logo */}
            <span className="text-lg font-bold text-white">LOGO</span>
            {/* Desktop head */}
            <div className="items-center hidden mx-4 lg:flex w-fit gap-x-10">
              <div className="flex flex-col items-start justify-start w-full text-xs font-medium text-white">
                <span className="text-nowrap">
                  м.Київ,вул.Вадима Гетьмана 27
                </span>
                <span className="text-nowrap">
                  Час роботи ПН-ПТ з 10:00 до 20:00
                </span>
                <span
                  className="font-semibold cursor-pointer text-rosy hover:underline"
                  onClick={executeScroll}
                >
                  Подивитись на карті
                </span>
              </div>
              <div className="flex flex-col items-start justify-start w-full text-xs font-medium text-white">
                <a
                  className="inline-flex items-center hover:underline gap-x-1"
                  href="#"
                >
                  +38 (099)-999-99-99
                </a>
                <a href="#" className="inline-flex gap-x-2 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                  Telegram
                </a>
                <span
                  onClick={() => setOpenModal(true)}
                  className="cursor-pointer text-rosy hover:underline"
                >
                  Замовити зворотній дзвінок
                </span>
              </div>
            </div>
            {/* Burger BTN */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              type="button"
              className="block p-2 transition-colors rounded lg:hidden w-fit h-fit hover:bg-indigo bg-opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
            {/* Burger menu */}
            <div className={mobileBurger}>
              {/* Close */}
              <button
                onClick={() => setOpenMenu(!openMenu)}
                type="button"
                className="p-2 ml-auto transition-colors rounded w-fit h-fit hover:bg-indigo bg-opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
              {/* Content */}
              <div className="flex flex-col w-full gap-y-8">
                <div className="flex flex-col items-center justify-center w-full text-base font-medium text-white gap-y-2">
                  <span>м.Київ,вул.Вадима Гетьмана 27</span>
                  <span>Час роботи ПН-ПТ з 10:00 до 20:00</span>
                  <span
                    onClick={() => {
                      setOpenMenu(!openMenu);
                      executeScroll();
                    }}
                    className="font-semibold cursor-pointer text-rosy hover:underline"
                  >
                    Подивитись на карті
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center w-full text-base font-medium text-white gap-y-2">
                  <a className="hover:underline" href="#">
                    +38 (099)-999-99-99
                  </a>
                  <a href="#" className="inline-flex gap-x-2 hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-telegram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                    </svg>
                    Telegram
                  </a>
                  <span className="text-rosy hover:underline">
                    Замовити зворотній дзвінок
                  </span>
                </div>
              </div>
              {/* Bottom path */}
              <span className="text-lg font-bold text-white">LOGO</span>
            </div>
          </div>
          {/* Hero */}
          <div className="flex flex-col w-full">
            {/* Form */}
            <div className="flex flex-col w-full gap-4 lg:flex-row">
              <form className="flex flex-col w-full mt-8 gap-y-2">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">
                    Викупимо ваш пристрій
                  </h2>
                  <span className="text-base font-medium text-white lg:text-lg">
                    Хочете продати техніку?
                  </span>
                </div>
                <div className="flex flex-col mt-4 gap-y-1">
                  <span className="text-xs font-medium text-white lg:text-sm">
                    Заповніть форму і наші спеціалісти зв'яжуться з вами
                  </span>
                  <div className="grid w-full grid-cols-12 gap-2">
                    <input
                      className="w-full col-span-6 px-2 py-1 text-sm rounded"
                      type="text"
                      placeholder="Ім'я"
                    />
                    <input
                      className="w-full col-span-6 px-2 py-1 text-sm rounded"
                      type="tel"
                      placeholder="Телефон"
                    />
                    <textarea
                      className="w-full col-span-12 px-2 py-1 text-sm rounded"
                      placeholder="Назва або опис товару"
                      rows={4}
                    ></textarea>
                    <input
                      type="submit"
                      className="flex items-center justify-center w-full col-span-12 p-2 text-base font-semibold text-center text-white transition-colors border rounded cursor-pointer border-rosy bg-rosy hover:text-rosy hover:bg-white"
                      value={"Дізнатись ціну"}
                    />
                  </div>
                </div>
              </form>
              {/* Slider */}

              <Swiper
                className="flex items-center w-full max-w-full min-w-0 mt-8 mb-4 text-white border border-white h-72"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={true}
                loop={true}
                direction={"horizontal"}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="">
                  <div className="relative flex items-center justify-center w-full h-full max-w-full min-w-0 p-4">
                    {/* <img className="object-contain w-full h-full" src={hero1}/> */}
                    <span>Slide 1</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative flex items-center justify-center w-full h-full max-w-full min-w-0 p-4">
                  <div className="relative flex items-center justify-center w-full h-full max-w-full min-w-0 p-4">
                    {/* <img className="object-contain w-full h-full" src={hero2}/> */}
                    <span>Slide 2</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative flex items-center justify-center w-full h-full max-w-full min-w-0 p-4">
                  <div className="relative flex items-center justify-center w-full h-full max-w-full min-w-0 p-4">
                    {/* <img className="object-contain w-full h-full" src={hero2}/> */}
                    <span>Slide 3</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Benefits */}
            <div className="grid w-full grid-cols-12 gap-6 my-4">
              {/* Ben1 */}
              <div className="flex w-full col-span-12 p-1 sm:col-span-6 gap-x-2 lg:col-span-3">
                {/* IMG */}
                <div className="flex items-center justify-center w-12 h-12">
                  <ReactSVG
                    src={ben1}
                    beforeInjection={(svg) => {
                      svg.setAttribute("width", 40);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full gap-y-1">
                  <span className="font-semibold text-white text-md">
                    Конкурентні ціни
                  </span>
                  <span className="text-xs font-medium text-white">
                    Вигідні пропозиції
                  </span>
                </div>
              </div>
              {/* Ben 2 */}
              <div className="flex w-full col-span-12 p-1 sm:col-span-6 gap-x-2 lg:col-span-3">
                {/* IMG */}
                <div className="flex items-center justify-center w-12 h-12">
                  <ReactSVG
                    src={ben2}
                    beforeInjection={(svg) => {
                      svg.setAttribute("width", 40);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full gap-y-1">
                  <span className="font-semibold text-white text-md">
                    Гроші одразу
                  </span>
                  <span className="text-xs font-medium text-white">
                    Оплата одразу після перевірки
                  </span>
                </div>
              </div>
              {/* Ben3 */}
              <div className="flex w-full col-span-12 p-1 sm:col-span-6 gap-x-2 lg:col-span-3">
                {/* IMG */}
                <div className="flex items-center justify-center w-12 h-12">
                  <ReactSVG
                    src={ben2}
                    beforeInjection={(svg) => {
                      svg.setAttribute("width", 40);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full gap-y-1">
                  <span className="font-semibold text-white text-md">
                    Безпечні угоди
                  </span>
                  <span className="text-xs font-medium text-white">
                    Можливий демонтаж вашого об'єкту
                  </span>
                </div>
              </div>
              {/* Ben4 */}
              <div className="flex w-full col-span-12 p-1 sm:col-span-6 gap-x-2 lg:col-span-3">
                {/* IMG */}
                <div className="flex items-center justify-center w-12 h-12">
                  <ReactSVG
                    src={ben4}
                    beforeInjection={(svg) => {
                      svg.setAttribute("width", 40);
                    }}
                  />
                </div>
                <div className="flex flex-col w-full gap-y-1">
                  <span className="font-semibold text-white text-md">
                    Викуп неробочої теніки
                  </span>
                  <span className="text-xs font-medium text-white">
                    Купляємо частково несправні комплектуючі
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What we buy */}
      <div className="flex flex-col w-full bg-rosy">
        {/* Container */}
        <div className="w-full px-2 py-8 mx-auto max-w-7xl">
          <div className="grid w-full grid-cols-12 gap-2 lg:gap-x-8">
            {/* PC */}
            <div className="flex flex-col items-center justify-center col-span-6 p-1 sm:col-span-3 gap-y-2">
              <ReactSVG
                src={pc}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "100%");
                  svg.setAttribute("fill", "white");
                }}
              />
              <span className="text-lg font-bold text-white">Комп'ютери</span>
            </div>
            {/* VGA */}
            <div className="flex flex-col items-center justify-center col-span-6 p-1 sm:col-span-3 gap-y-2">
              <ReactSVG
                src={vga}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "100%");
                  svg.setAttribute("height", "auto");
                  svg.setAttribute("fill", "white");
                }}
              />
              <span className="text-lg font-bold text-white">Відеокарти</span>
            </div>
            {/* SSD */}
            <div className="flex flex-col items-center justify-center col-span-6 p-1 sm:col-span-3 gap-y-2">
              <ReactSVG
                src={ssd}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "100%");
                  // svg.setAttribute("height", 60);
                  svg.setAttribute("fill", "white");
                }}
              />
              <span className="text-lg font-bold text-white">Накопичувачі</span>
            </div>
            {/* Power */}
            <div className="flex flex-col items-center justify-center col-span-6 p-1 sm:col-span-3 gap-y-2">
              <ReactSVG
                src={vga}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "100%");
                  svg.setAttribute("height", "auto");
                  svg.setAttribute("fill", "white");
                }}
              />
              <span className="text-lg font-bold text-white">
                Майнінг ферми
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="flex flex-col w-full bg-indigo">
        {/* Container */}
        <div className="flex flex-col w-full px-2 py-8 mx-auto max-w-7xl gap-y-4">
          <h2 className="text-xl font-semibold text-center text-white lg:text-2xl">
            Комісійний магазин комп'ютерної техніки "Назва"
          </h2>
          <p className="p-2 text-base font-medium text-center text-white">
            Темпи розвитку сучасних технологій не знижуються, лише зростають. З
            такою ж швидкістю старіють і побутова техніка, комп'ютери, гаджети.
            Два роки – і девайс, як правило, вже потребує заміни. А ефективна
            модернізація, якщо і можлива, обійдеться дорожче, ніж покупка нового
            комп'ютера або ноутбука.
          </p>
          <p className="p-2 text-base font-medium text-center text-white">
            І ось тут можливість продати застарілу техніку стає дуже доречною.
            Здаючи техніку компанії, яка займається цим професійно ви
            позбавляєте себе витрати часу і сил на пошуки покупця на барахолках,
            від зустрічей і переговорів, які можуть затягтися і, взагалі, ні до
            чого не привести.
          </p>
          <p className="p-2 text-base font-medium text-center text-white">
            Хто наші клієнти? Найчастіше стару техніку продають з наступних
            причин:
          </p>
          <ul className="flex flex-col items-center justify-center p-2 text-base font-medium text-center text-white list-disc gap-y-4">
            <li>
              Коли потрібно поновити техніку: смартфон, ноутбук, комп'ютер. Ви
              хочете придбати новий, отримавши перед цим гроші за морально
              застарілий гаджет
            </li>
            <li>
              Нашими клієнтами часто стають після кількох невдалих спроб
              самостійно продати фотоапарат чи комп'ютер після невдалих пошуків
              покупців
            </li>
            <li>
              Коли терміново потрібна готівка, завжди є варіант продати
              електроінструменти, що не використовуються, морально застарілий
              телевізор або старий комп'ютер
            </li>
            <li>
              Також ми пропонуємо варіант обміну старої техніки на нову із
              доплатою
            </li>
            <li>
              Когда вы обнаружили дома неиспользуемую технику в упаковке,
              подаренную, но так и не понадобившуюся. Очень частая причина
            </li>
            <li>
              Нашими послугами користуються компанії, яким через обставини
              потрібно терміново позбутися робочої офісної техніки
            </li>
            <li>
              Також до нас часто звертаються компанії, що займаються сервісом
              комп'ютерної та побутової техніки
            </li>
          </ul>
          <span className="mt-2 text-sm font-medium text-center text-white">
            Навіть якщо ви не потребуєте матеріальної компенсації за техніку, а
            просто хочете позбутися непотрібного вам застарілого гаджета,
            користуючись послугами скупки електронної техніки, ви дбаєте про
            екологію та майбутнє дітей.
          </span>
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col w-full bg-dark-violet">
        {/* Container */}
        <div className="flex flex-col w-full px-2 py-8 mx-auto max-w-7xl gap-y-4">
          <h2 className="text-xl font-semibold text-center text-white lg:text-2xl">
            Треба продати швидше?
          </h2>
          <div className="grid w-full grid-cols-12 gap-y-4">
            <div className="flex flex-col items-center col-span-6 sm:col-span-4">
              <span className="text-base font-semibold text-white lg:text-lg">
                Адреса
              </span>
              <span className="mt-2 text-xs font-semibold text-white lg:text-base">
                м.Київ,
              </span>
              <span className="text-xs font-semibold text-white lg:text-base">
                вул.Вадима Гетьмана 27
              </span>
            </div>
            <div className="flex flex-col items-center col-span-6 sm:col-span-4">
              <span className="text-base font-semibold text-white lg:text-lg">
                Час роботи
              </span>
              <span className="mt-2 text-xs font-semibold text-white lg:text-base">
                з 10:00 до 20:00
              </span>
              <span className="text-xs font-semibold text-white lg:text-base">
                Понеділок - Пятниця
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-full col-span-12 sm:col-span-4 gap-y-2">
              <span className="text-base font-semibold text-white lg:text-lg">
                Зворотній зв'язок
              </span>
              <a
                href="#"
                className="inline-flex text-xs font-semibold text-rosy gap-x-2 hover:underline lg:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
                +38 (099)-999-99-99
              </a>
              <a
                href="#"
                className="inline-flex text-xs font-semibold text-rosy gap-x-2 lg:text-base hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
                +38 (099)-999-99-99
              </a>
            </div>
          </div>
          {/* MAP */}
          <div className="w-full h-fit" ref={googleMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1042725526268!2d30.44227438850896!3d50.43915839833712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cea077242231%3A0xdeca15f0ddd47b66!2z0LLRg9C70LjRhtGPINCS0LDQtNC40LzQsCDQk9C10YLRjNC80LDQvdCwLCAyNywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1705269055665!5m2!1suk!2sua"
              width="100%"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
