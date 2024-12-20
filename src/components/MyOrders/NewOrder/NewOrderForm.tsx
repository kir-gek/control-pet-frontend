import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { addOrder } from "../../../store/myOrdersSlice";

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
    noteOrder: null,
    name: "Бобик",
    age: 4,
    gender: 1,
    type: "собака",
    breed: "чихуа",
    notePet: null,
    ownerFIO: "Петров Петр Петрович",
    phone: "+79998887766",
    address: "Улица Пушкина Дом колотушкина",
    noteOwner: null,
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
      noteOrder: null,
      name: "",
      age: 0,
      gender: 1,
      type: "",
      breed: "",
      notePet: null,
      ownerFIO: "",
      phone: "",
      address: "",
      noteOwner: null,
    });
    handleSubmit();
  };

  return (
    <form>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          value={newOrder.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Дата поступления:
        <input
          type="text"
          name="dateIn"
          value={newOrder.dateIn}
          onChange={handleChange}
        />
      </label>
      <label>
        Пол животного:
        <select name="gender" value={newOrder.gender} onChange={handleChange}>
          <option value="0">Женский</option>
          <option value="1">Мужской</option>
        </select>
      </label>
      <label>
        Возраст:
        <input
          type="number"
          name="age"
          value={newOrder.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Порода:
        <input
          type="text"
          name="breed"
          value={newOrder.breed}
          onChange={handleChange}
        />
      </label>
      <label>
        Владелец (ФИО):
        <input
          type="text"
          name="ownerFIO"
          value={newOrder.ownerFIO}
          onChange={handleChange}
        />
      </label>
      <label>
        Телефон:
        <input
          type="text"
          name="phone"
          value={newOrder.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Адрес:
        <input
          type="text"
          name="address"
          value={newOrder.address}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={addOrderClick}>
        Сохранить{" "}
      </button>
    </form>
  );
};
