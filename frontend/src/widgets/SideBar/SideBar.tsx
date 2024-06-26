import styles from './SideBar.module.scss';

const navMenu = [
    {
        title: 'Главная',
        url: '#',
    },
    {
        title: 'Записи',
        url: '#',
    },
    {
        title: 'Аналитика',
        url: '#',
    },
    {
        title: 'Настройки',
        url: '#',
    },
];

function SideBar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.balance}>
                <span className={styles.balanceText}>Баланс</span>
                <p className={styles.balanceCount}>78 060,00 ₽</p>
            </div>
            <nav className={styles.navigate}>
                {navMenu.map(({ title, url }) => (
                    <a
                        key={title}
                        href={url}
                        className={`${styles.navigateLink} ${
                            title === 'Главная' ? styles.active : null
                        }`}
                    >
                        {title}
                    </a>
                ))}
            </nav>
            <button className={styles.logOutBtn}>Выйти</button>
        </div>
    );
}

export default SideBar;
