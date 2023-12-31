import styles from "./reset-btn.module.css";
import { UserContext, default_user_data } from "../../../provider/UserContex";
import { useContext } from "react";

const ResetBtn = () => {
  const { setData } = useContext(UserContext);
  return (
    <button
      className={styles.reset_btn}
      onClick={() => {
        setData(default_user_data);
      }}>
      reset game
    </button>
  );
};
export default ResetBtn;
