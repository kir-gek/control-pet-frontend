import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { addOrder } from "../../../store/myOrdersSlice";
import { OrderForm } from "../OrderForm/OrderForm";

interface NewOrderFormProps {
  setActive: (target: boolean) => void;
}
export const NewOrderForm = ({ setActive }: NewOrderFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    // закрываем модальное окно после отправки формы
    setActive(false);
  };

  // Состояние формы
  const [newOrder, setNewOrder] = useState({
    id: 1,
    dateIn: "25 января",
    dateOut: "30 января",
    price: 5000,
    noteOrder: "ytne",
    name: "Бобик",
    age: 4,
    gender: 1,
    type: "собака",
    breed: "чихуа",
    notePet: "yrne",
    ownerFIO: "Петров Петр Петрович",
    phone: "+79998887766",
    address: "Улица Пушкина Дом колотушкина",
    noteOwner: "ytne",
  });

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

  const addOrderClick = () => {
    dispatch(addOrder(newOrder));
    setNewOrder({
      id: 1,
      dateIn: "",
      dateOut: "",
      price: 0,
      noteOrder: "",
      name: "",
      age: 0,
      gender: 1,
      type: "",
      breed: "",
      notePet: "",
      ownerFIO: "",
      phone: "",
      address: "",
      noteOwner: "",
    });
    handleSubmit();
  };

  return (
    <OrderForm newOrder={newOrder} handleChange={handleChange} addOrderClick={addOrderClick} />
  );
};
