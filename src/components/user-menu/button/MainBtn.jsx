import { useContext } from 'react'
import { UserContext } from '../../../provider/UserContex'
import styles from '../user-menu.module.css'
import checkPrestige from '../../../script/checkPrestige'

const MainBtn = () => {
    const { data, setData } = useContext(UserContext)
    return (
        <button
            onClick={() => {
                const profit = data.click_profit * data.prestige

                setData({
                    ...data,
                    money: data.money + profit,
                    ...checkPrestige(data, true),
                })
            }}
            className={`${styles.main_btn} ${styles.btn} ${styles.active}`}
        >
            Click! +{(data.click_profit * data.prestige).toFixed(1)}$
        </button>
    )
}
export default MainBtn
