import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <div>
            Заголовок какой-то
            <div>
                <NavLink to='/counting'>Бухгалтерия</NavLink>
                <NavLink to='/myOrders'>Текущие заказы</NavLink>
                <NavLink to='/history'>История</NavLink>
            </div>
        </div>
    )
}