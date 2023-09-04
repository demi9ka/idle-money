import styles from './style.module.css'
import UserMenu from './user-menu/UserMenu'
import ResetBtn from './ui/reset-btn/ResetBtn'
import PrestigeLoader from './ui/prestige-loader/PrestigeLoader'
import UserInfo from './user-info/UserInfo'

function App() {
    return (
        <>
            <PrestigeLoader />
            <div className={styles.screen}>
                <UserInfo />
                <UserMenu />
            </div>

            <ResetBtn />
        </>
    )
}

export default App
