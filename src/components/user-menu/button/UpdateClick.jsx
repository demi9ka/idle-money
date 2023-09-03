import { useContext } from "react";
import { UserContext } from "../../../provider/UserContex";
import styles from "../user-menu.module.css";
const UpdateClick = () => {
  const { data, setData } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        setData({
          ...data,
          click_profit: data.click_profit + 1,
          money: data.money - data.click_price,
          click_price: parseInt(data.click_price ** data.click_multiplier),
        });
      }}
      className={`${styles.btn} ${
        data.money >= data.click_price && styles.active
      }`}
      style={{
        "--width":
          data.money < data.click_price
            ? `${100 - (data.money / data.click_price) * 100}%`
            : "0%",
      }}
      disabled={data.money < data.click_price}>
      Update click ({data.click_price}$)
    </button>
  );
};
export default UpdateClick;
