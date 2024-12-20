import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { editOrder } from "../../../store/myOrdersSlice";
import { OrderModel } from "../../../types/Order";
import { OrderForm } from "../OrderForm/OrderForm";

interface NewOrderFormProps {
  order: OrderModel;
  setActive: (target: boolean) => void;
}

export const EditOrderForm = ({ order, setActive }: NewOrderFormProps) => {


  
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    // закрываем модальное окно после отправки формы
    setActive(false);
  };
  // Состояние формы
  const [newOrder, setNewOrder] = useState({
    id: order.id,
    dateIn: order.dateIn,
    dateOut: order.dateOut,
    price: order.price,
    noteOrder: order.noteOrder,
    name: order.name,
    age: order.age,
    gender: order.gender,
    type: order.type,
    breed:  order.breed,
    notePet: order.notePet,
    ownerFIO: order.ownerFIO,
    phone: order.phone,
    address: order.address,
    noteOwner: order.noteOwner

  });

   // Обновление состояния формы при изменении `order`
   useEffect(() => {
    setNewOrder(order);
  }, [order]); //эффект срабатывает только при изменении order

  // Функция для обновления состояния
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]:
        name === "age" || name === "price" || name === "gender"
          ? Number(value)
          : value, // Приведение чисел, name в квадратных скобках, это обычно означает, что вы работаете с динамическим доступом к свойствам объекта.
    }));
  };

  const editOrderClick = () => {
    dispatch(editOrder(newOrder));
    handleSubmit();
  };

  return (
   <OrderForm newOrder={newOrder} handleChange={handleChange} addOrderClick={editOrderClick}/>
  );
};
