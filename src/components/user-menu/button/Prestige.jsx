import styles from "../user-menu.module.css";
import { useContext } from "react";
import { UserContext } from "../../../provider/UserContex";
import { default_user_data } from "../../../provider/UserContex";

export default () => {
  const { data, setData } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        setData({
          ...default_user_data,
          prestige: data.prestige + data.prestige_local / 100,
        });
      }}
      className={`${styles.btn} ${
        !data.prestige_local && styles.display_none
      } ${styles.prestige_btn} ${styles.active}`}>
      Prestige (+{data.prestige_local}%)
    </button>
  );
};
