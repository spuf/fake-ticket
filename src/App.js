import React, {useState} from 'react'
import logo from './logo.png'
import './App.css';

function Editable({ value, width }) {
  const [val, setVal] = useState(value);
  const handleCahnge = (event) => setVal(event.target.value)
  return (
    <input value={val} onChange={handleCahnge} style={{width: width+'em'}}/>
  )
}

function App() {
  const data = {
    name: 'Mrs NAME FAMILY',
    passport: '00 0000000',
    ticket: '555-5085454000',
    order: 'JMGABC',
    orderAt: '11 сентября 2019',
    pnr: 'WVJSIV',
    price: '13 649',
    tax: '9 578',
    total: '23 227',
  }
  return (
    <div>
      <table className="table hr">
        <tr>
          <td>
            <img src={logo} width={180} alt="logo"/>
          </td>
          <td className="title">Маршрутная квитанция</td>
        </tr>
      </table>
      <table className="table">
        <tr>
          <td className="label">Пассажир</td>
          <td className="label">Электронный билет</td>
          <td className="label">Номер заказа</td>
        </tr>
        <tr>
          <td>
            <Editable value={data.name} />
          </td>
          <td>
            <Editable value={data.ticket} />
          </td>
          <td>
            <Editable value={data.order} />
          </td>
        </tr>
        <tr>
          <td colSpan={3}>&nbsp;</td>
        </tr>
        <tr>
          <td className="label">Документ</td>
          <td className="label">Дата выписки</td>
          <td className="label">Статус билета</td>
        </tr>
        <tr>
          <td>
            <Editable value={data.passport} />
          </td>
          <td>
            <Editable value={data.orderAt} />
          </td>
          <td>Выписан/Confirmed</td>
        </tr>
      </table>
      <table className="table flight">
        <tr className="flight-head">
          <td colSpan={4}>Бангкок — Москва</td>
        </tr>
        <tr className="flight-label">
          <td className="label">Рейс</td>
          <td className="label">Отправление</td>
          <td className="label">Прибытие</td>
          <td className="label">Тариф</td>
        </tr>
        <tr>
          <td>
            SU 0271
            <br />
            <span className="small">Aeroflot</span>
          </td>
          <td>
            <span className="flight-head flight-small">BKK</span> 10:15
            <br />
            <span className="small bold">13 янв 2020</span>
            <br />
            <span className="small">Бангкок</span>
          </td>
          <td>
            <span className="flight-head flight-small">SVO</span> 16:20
            <br />
            <span className="small bold">13 янв 2020</span>
            <br />
            <span className="small">Шереметьево</span>
          </td>
          <td>
            Бронь <Editable value={data.pnr} width={5}/>
            <br />
            <span className="small">Эконом-Бюджет</span>
            <br />
            <span className="small">C багажом</span>
          </td>
        </tr>
      </table>
      <table className="table">
        <tr>
          <td>Квитанция</td>
          <td>Примечания</td>
        </tr>
        <tr>
          <td className="price-cell">
            <table className="price">
              <tr>
                <td>Тариф</td>
                <td className="price-sum"><Editable value={data.price} width={5}/>.00 руб.</td>
              </tr>
              <tr>
                <td>Таксы</td>
                <td className="price-sum"><Editable value={data.tax} width={5}/>.00 руб.</td>
              </tr>
              <tr>
                <td>
                  Сборы <span className="small">включен НДС 20%</span>
                </td>
                <td className="price-sum">0.00 руб.</td>
              </tr>
              <tr className="price-total">
                <td>Итого за билет</td>
                <td className="price-sum"><Editable value={data.total} width={5}/>.00 руб.</td>
              </tr>
            </table>
          </td>
          <td className="smallest">
            <p>
              Распечатайте маршрутную квитанцию и зарегистрируйтесь на рейс через интернет или на стойке авиакомпании в
              аэропорту. Электронная регистрация обычно начинается за 24 часа. Лучше заранее уточните правила в
              авиакомпании.
            </p>
            <p>
              Чтобы подтвердить расходы на командировку, передайте бухгалтеру распечатанную квитанцию и посадочные
              талоны. Маршрутная квитанция — это бланк строгой отчетности.
              <br />
              Обоснование: письмо Министерства финансов России No 03–03–06/1/717 от 11.10.2007.
            </p>
            <p>Передаточные надписи: НДС А/К 0.00 o. PAX NONREF/HEBO3BPATEH</p>
            <p>Форма оплаты: cash</p>
            <p>Данные агента: VIP SERVICE, PEREVEDENOVSKIJ PER-K D.17/1 MOSCOW, +74956268890, IATA 92230106</p>
          </td>
        </tr>
      </table>

      <table className="table">
        <tr>
          <td className="smallest">8 800 755 79 98 — для звонков по России, 8 499 605 01 21 — телефон в Москве</td>
          <td className="smallest">Tinkoff.ru</td>
        </tr>
      </table>
    </div>
  )
}

export default App
