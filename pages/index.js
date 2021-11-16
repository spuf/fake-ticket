import Head from 'next/head'
import Image from 'next/image'
import Chance from 'chance'
import { useState } from 'react'

const chance = new Chance()

function Editable({ value, width }) {
  const [val, setVal] = useState(value)
  const handleCahnge = (event) => setVal(event.target.value)
  return (
    <span>
      <input value={val} onChange={handleCahnge} style={{ width: width + 'em' }} />
      <style jsx>{`
        input {
          border: none;
          background-color: yellow;
          font-size: inherit;
          font-weight: inherit;
          text-align: inherit;
          width: 90%;
        }
        @media print {
          input {
            background-color: white !important;
          }
        }
      `}</style>
    </span>
  )
}

function NumberFormat(n) {
  return n.toLocaleString('ru')
}

export default function Home() {
  const total = chance.natural({ min: 20000, max: 25000 })
  const tax = Math.round(0.4123 * total)

  const data = {
    name: 'Mrs NAME FAMILY',
    passport: '00 0000000',
    ticket:
      chance.natural({ min: 10 ** 2, max: 10 ** 3 - 1 }) + '-' + chance.natural({ min: 10 ** 10, max: 10 ** 11 - 1 }),
    order: chance.string({ pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length: 6 }),
    orderAt: '11 декабря 2019',
    pnr: chance.string({ pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length: 5 }),
    price: NumberFormat(total - tax),
    tax: NumberFormat(tax),
    total: NumberFormat(total),
    flightNumber: 'SU 0271',
    flightCompany: 'Aeroflot',
    flightFrom: 'BKK',
    flightFromCity: 'Бангкок',
    flightFromAirport: 'Бангкок',
    flightFromTime: '10:15',
    flightFromDate: '5 фев 2020',
    flightTo: 'SVO',
    flightToCity: 'Москва',
    flightToAirport: 'Шереметьево',
    flightToTime: '16:20',
    flightToDate: '5 фев 2020',
  }

  return (
    <div>
      <Head>
        <title>fake-ticket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <table className="table hr">
          <tr>
            <td>
              <Image src="/logo.png" width={180} height={58} alt="logo" />
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
            <td colSpan={4}>
              {data.flightFromCity} — {data.flightToCity}
            </td>
          </tr>
          <tr className="flight-label">
            <td className="label">Рейс</td>
            <td className="label">Отправление</td>
            <td className="label">Прибытие</td>
            <td className="label">Тариф</td>
          </tr>
          <tr>
            <td>
              {data.flightNumber}
              <br />
              <span className="small">{data.flightCompany}</span>
            </td>
            <td>
              <span className="flight-head flight-small">{data.flightFrom}</span> {data.flightFromTime}
              <br />
              <span className="small bold">{data.flightFromDate}</span>
              <br />
              <span className="small">{data.flightFromAirport}</span>
            </td>
            <td>
              <span className="flight-head flight-small">{data.flightTo}</span> {data.flightToTime}
              <br />
              <span className="small bold">{data.flightToDate}</span>
              <br />
              <span className="small">{data.flightToAirport}</span>
            </td>
            <td>
              Бронь <Editable value={data.pnr} width={5} />
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
                  <td className="price-sum">
                    <Editable value={data.price} width={5} />
                    .00 руб.
                  </td>
                </tr>
                <tr>
                  <td>Таксы</td>
                  <td className="price-sum">
                    <Editable value={data.tax} width={5} />
                    .00 руб.
                  </td>
                </tr>
                <tr>
                  <td>
                    Сборы <span className="small">включен НДС 20%</span>
                  </td>
                  <td className="price-sum">0.00 руб.</td>
                </tr>
                <tr className="price-total">
                  <td>Итого за билет</td>
                  <td className="price-sum">
                    <Editable value={data.total} width={5} />
                    .00 руб.
                  </td>
                </tr>
              </table>
            </td>
            <td className="smallest">
              <p>
                Распечатайте маршрутную квитанцию и зарегистрируйтесь на рейс через интернет или на стойке авиакомпании
                в аэропорту. Электронная регистрация обычно начинается за 24 часа. Лучше заранее уточните правила в
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

      <style jsx>{`
        .table {
          width: 100%;
          margin-bottom: 1.2em;
          padding-bottom: 1.2em;
          border-spacing: 0;
        }

        .hr {
          border-bottom: 1px lightgray solid;
        }
        .table td {
          padding: 0.1em;
        }

        .title {
          font-size: 1.8em;
          text-align: center;
        }

        .label {
          font-size: 0.7em;
        }
        .small {
          font-size: 0.7em;
        }
        .smallest {
          font-size: 0.6em;
        }
        .bold {
          font-weight: bold;
        }

        .flight {
          border: 1px lightgray solid;
        }
        .flight td {
          padding: 1em;
          width: 20%;
        }
        .flight-head {
          background-color: rgb(53, 60, 73);
          color: whitesmoke;
          font-size: 1.2em;
          padding: 0.2em;
        }
        .flight-label {
          background-color: rgb(246, 247, 248);
          border: 1px grey solid;
        }
        .flight-label .label {
          padding-left: 1.5em;
        }
        .flight-small {
          font-size: 0.9em;
        }

        .price {
          font-size: 0.8em;
          width: 100%;
          line-height: 1.8em;
        }
        .price-cell {
          width: 40%;
          vertical-align: top;
          padding-right: 2em !important;
        }
        .price-sum {
          text-align: right;
        }
        .price-total {
          font-weight: bold;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 1.5em;
          font-family: Arial, Helvetica, sans-serif;
          width: 740px;
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}
