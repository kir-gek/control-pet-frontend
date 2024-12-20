import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrders } from "../../store/myOrdersSlice";
import { OrderModel } from "../../types/Order";
import { NewOrderModal } from "./NewOrder/NewOrderModal";
import { useState } from "react";
import { NewOrderForm } from "./NewOrder/NewOrderForm";
import s from "./MyOrders.module.css";
import { AppDispatch } from "../../store/store";
import { EditOrderForm } from "./EditOrder/EditOrderForm";

export const MyOrders = () => {
  const orders = useSelector(getOrders);
  const [modalActive, setModalActive] = useState(false);

  const ordersJSX = orders.orders.length ? (
    orders.orders.map((el) => (
      <OrdersComponent
        id={el.id}
        dateIn={el.dateIn}
        dateOut={el.dateOut}
        price={el.price}
        noteOrder={el.noteOrder}
        name={el.name}
        age={el.age}
        gender={el.gender}
        type={el.type}
        breed={el.breed}
        notePet={el.notePet}
        ownerFIO={el.ownerFIO}
        phone={el.phone}
        address={el.address}
        noteOwner={el.noteOwner}
      />
    ))
  ) : (
    <h4>Нет текущих заказов</h4>
  );

  return (
    <div>
      {ordersJSX}
      <button onClick={() => setModalActive(true)}>Добавить заявку</button>
      <NewOrderModal active={modalActive} setActive={setModalActive}>
        <NewOrderForm setActive={setModalActive} />
      </NewOrderModal>
    </div>
  );
};

const OrdersComponent = (props: OrderModel) => {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const order:OrderModel = props;
  const deleteOrderClick = (id: number) => {
    dispatch(deleteOrder({ id }));
  };

  return (
    <div className={s.order}>
      <div>
        <h3>Заказ номер {props.id}</h3>
        <p className="font-medium">Дата начала: {props.dateIn}</p>
        <p className="font-medium">Дата окончания: {props.dateOut}</p>
        <p className="font-medium">Номер заказа: {props.id}</p>
        <p className="font-medium">Цена: {props.price}</p>
      </div>
      <div>
        <h3>Животное</h3>
        <p className="font-medium">Имя животного: {props.name}</p>
        <p className="font-medium">Возраст: {props.age}</p>
        <p className="font-medium">Пол: {props.gender}</p>
        <p className="font-medium">Вид: {props.type}</p>
        <p className="font-medium">Порода: {props.breed}</p>
        <p className="font-medium">
          заметка: {props.notePet ? props.notePet : "пуста"}
        </p>
      </div>
      <div>
        <h3>Хозяин</h3>
        <p className="font-medium">ФИО: {props.ownerFIO}</p>
        <p className="font-medium">телефон: {props.phone}</p>
        <p className="font-medium">адрес: {props.address}</p>
        <p className="font-medium">
          заметка: {props.noteOwner ? props.noteOwner : "пуста"}
        </p>
      </div>
      <div>
        <button className={s.delete} onClick={() => deleteOrderClick(props.id)}>
          УДОЛИ
        </button>
        <button onClick={() => setModalActive(true)}>Редактировать</button>
        <NewOrderModal active={modalActive} setActive={setModalActive}>
          <EditOrderForm order={order} setActive={setModalActive} />
        </NewOrderModal>
      </div>
    </div>
  );
};
