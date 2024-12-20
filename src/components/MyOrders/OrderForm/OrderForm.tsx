import { OrderModel } from '../../../types/Order'
import s from './OrderForm.module.css'

interface OrderFormProps {
    newOrder: OrderModel;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    addOrderClick: () => void;
  }

export const OrderForm = ({newOrder, handleChange, addOrderClick}: OrderFormProps) => {
    return(
        <form>
      <div className={s.main}>
        <div className={s.order} >
          Заказ<p></p>
          <label>
            Дата поступления:
            <input
              type="text"
              name="dateIn"
              value={newOrder.dateIn}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Дата окончания:
            <input
              type="text"
              name="dateOut"
              value={newOrder.dateOut}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Цена:
            <input
              type="number"
              name="price"
              value={newOrder.price}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Комментарий к заказу:
            <input
              type="text"
              name="noteOrder"
              value={newOrder.noteOrder}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className={s.animal}>
          
          Животное <p></p>
          <label>
            Имя животново:
            <input
              type="text"
              name="name"
              value={newOrder.name}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Возраст:
            <input
              type="number"
              name="age"
              value={newOrder.age}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Пол животного:
            <select
              name="gender"
              value={newOrder.gender}
              onChange={handleChange}
            >
              <option value="0">Женский</option>
              <option value="1">Мужской</option>
            </select>
          </label>
          <br></br>
          <label>
            Тип животного:
            <input
              type="text"
              name="type"
              value={newOrder.type}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Порода:
            <input
              type="text"
              name="breed"
              value={newOrder.breed}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Комментарий к животному:
            <input
              type="text"
              name="notePet"
              value={newOrder.notePet}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={s.owner}>
          Владелец <p></p>
          <label>
            Владелец (ФИО):
            <input
              type="text"
              name="ownerFIO"
              value={newOrder.ownerFIO}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Телефон:
            <input
              type="text"
              name="phone"
              value={newOrder.phone}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Адрес:
            <input
              type="text"
              name="address"
              value={newOrder.address}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Комментарий к хоязину:
            <input
              type="text"
              name="noteOwner"
              value={newOrder.noteOwner}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button type="button" onClick={addOrderClick}>
        Сохранить{" "}
      </button>
    </form>
    )
}