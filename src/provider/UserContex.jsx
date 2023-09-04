import { createContext, useState } from "react";

const user_data = {
  money: 0,
  click_profit: 1,
  auto_profit: 0,
};

const game_data = {
  click_price: 10,
  auto_price: 50,
  click_multiplier: 1.09,
  auto_multiplier: 1.1,
};
const prestige_data = {
  prestige: 1,
  prestige_value: 1500,
  prestige_local: 0,
  prestige_multiplier: 1.5,
  prestige_profit: 0.5,
};
export const default_user_data = {
  ...user_data,
  ...game_data,
  ...prestige_data,
};
// localStorage.setItem(
//   "data",
//   JSON.stringify({ ...user_data, ...game_data, ...prestige_data })
// );
const storage_data = JSON.parse(localStorage.getItem("data"));
const default_data = storage_data ? storage_data : default_user_data;
export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [data, setData] = useState(default_data);
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};
