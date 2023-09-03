import { useContext } from "react";
import { UserContext } from "../../../provider/UserContex";
import styles from "../user-menu.module.css";

const UpdateAuto = () => {
  const { data, setData } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        setData({
          ...data,
          auto_profit: data.auto_profit + 5,
          money: data.money - data.auto_price,
          auto_price: parseInt(data.auto_price ** data.auto_multiplier),
        });
      }}
      disabled={data.money < data.auto_price}
      className={`${styles.btn} ${
        data.money >= data.auto_price && styles.active
      }`}
      style={{
        "--width":
          data.money < data.auto_price
            ? `${100 - (data.money / data.auto_price) * 100}%`
            : "0%",
      }}>
      Update auto ({data.auto_price}$)
    </button>
  );
};
export default UpdateAuto;
