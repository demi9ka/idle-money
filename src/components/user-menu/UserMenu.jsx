import styles from "./user-menu.module.css";
import MainBtn from "./button/MainBtn";
import UpdateClick from "./button/UpdateClick";
import UpdateAuto from "./button/UpdateAuto";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../provider/UserContex";
import Prestige from "./button/Prestige.jsx";
import checkPrestige from "../../script/checkPrestige";
export default () => {
  const { setData } = useContext(UserContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevdata) => {
        localStorage.setItem("data", JSON.stringify(prevdata));
        const profit = prevdata.auto_profit * prevdata.prestige;

        return {
          ...prevdata,
          money: prevdata.money + profit,
          ...checkPrestige(prevdata),
        };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  () => clearTimeout(timeout);

  return (
    <div className={styles.menu}>
      <MainBtn />
      <UpdateClick />
      <UpdateAuto />
      <Prestige />
    </div>
  );
};
