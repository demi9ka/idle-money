import { useContext } from "react";
import styles from "./style.module.css";
import { UserContext } from "../provider/UserContex";
import UserMenu from "./user-menu/UserMenu";
import ResetBtn from "./ui/reset-btn/ResetBtn";
import PrestigeLoader from "./ui/prestige-loader/PrestigeLoader";

function App() {
  const { data } = useContext(UserContext);

  return (
    <>
      <PrestigeLoader />
      <div className={styles.wrapper}>
        <div className={styles.info_block}>
          <h1 className={styles.money_count}>{data.money.toFixed(1)}$</h1>
          <div className={styles.boost_wrapper}>
            {data.auto_profit ? (
              <span className={styles.auto_profit}>
                {(data.auto_profit * data.prestige).toFixed(1)}$/sec
              </span>
            ) : (
              ""
            )}

            {data.prestige > 1 ? (
              <span className={styles.prestige}>
                +{((data.prestige - 1) * 100).toFixed(0)}%
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <UserMenu />
      <ResetBtn />
    </>
  );
}

export default App;
