import { useContext } from "react";
import styles from "./prestige-loader.module.css";
import { UserContext } from "../../../provider/UserContex";

const PrestigeLoader = () => {
  const { data } = useContext(UserContext);
  return (
    <div className={styles.loader_wrapper}>
      <div
        className={styles.loader}
        style={{
          "--width": `${
            data.money < data.prestige_value
              ? (data.money / data.prestige_value) * 100
              : 100
          }%`,
        }}>
        {((data.money / data.prestige_value) * 100).toFixed(1)}%
      </div>
    </div>
  );
};
export default PrestigeLoader;
