import styles from './user-info.module.css'
import { useContext } from 'react'
import { UserContext } from '../../provider/UserContex'
const UserInfo = () => {
    const { data } = useContext(UserContext)
    return (
        <div>
            <h1 className={styles.money_count}>{data.money.toFixed(1)}$</h1>
            <div className={styles.boost_wrapper}>
                {data.auto_profit ? (
                    <span className={styles.auto_profit}>
                        {(data.auto_profit * data.prestige).toFixed(1)}
                        $/sec
                    </span>
                ) : (
                    ''
                )}

                {data.prestige > 1 ? (
                    <span className={styles.prestige}>
                        +{data.prestige.toFixed(1)}x
                    </span>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
export default UserInfo
