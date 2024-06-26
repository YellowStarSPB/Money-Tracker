import Meat from '../../assets/img/meat.svg';
import styles from './LastEntries.module.scss';

function LastEntries() {
    return (
        <div className={styles.lastEntries}>
            <h3 className={styles.title}>Последние записи</h3>

            <div className={styles.dateBox}>
                {/* блок каждой даты */}
                <span className={styles.date}>01.12.2023</span>
                {/* список трат */}
                <div className={styles.items}>
                    <div className={styles.item}>
                        <img className={styles.itemImg} src={Meat} alt="icon" />
                        <div className={styles.itemInfo}>
                            <h3 className={styles.itemTitle}>Продукты</h3>
                            <p className={styles.itemSubtitle}>Наличные</p>
                        </div>
                        <p className={`${styles.itemMoneyInfo} ${styles.expenses}`}>
                            -1 500,00 ₽
                        </p>
                        <button className={styles.editButton}></button>
                    </div>

                    <div className={styles.item}>
                        <img className={styles.itemImg} src={Meat} alt="icon" />
                        <div className={styles.itemInfo}>
                            <h3 className={styles.itemTitle}>Рестораны и кафе</h3>
                            <p className={styles.itemSubtitle}>Наличные</p>
                        </div>
                        <p className={`${styles.itemMoneyInfo} ${styles.expenses}`}>
                            -764,63 ₽
                        </p>
                        <button className={styles.editButton}></button>
                    </div>
                </div>
            </div>

            <div className={styles.dateBox}>
                {/* блок каждой даты */}
                <span className={styles.date}>15.12.2023</span>
                {/* список трат */}
                <div className={styles.items}>
                    <div className={styles.item}>
                        <img className={styles.itemImg} src={Meat} alt="icon" />
                        <div className={styles.itemInfo}>
                            <h3 className={styles.itemTitle}>Коммунальные услуги</h3>
                            <p className={styles.itemSubtitle}>Карта</p>
                        </div>
                        <p className={`${styles.itemMoneyInfo} ${styles.expenses}`}>
                            -100000,00 ₽
                        </p>
                        <button className={styles.editButton}></button>
                    </div>

                    <div className={styles.item}>
                        <img className={styles.itemImg} src={Meat} alt="icon" />
                        <div className={styles.itemInfo}>
                            <h3 className={styles.itemTitle}>Зарплата</h3>
                            <p className={styles.itemSubtitle}>Карта</p>
                        </div>
                        <p className={`${styles.itemMoneyInfo} ${styles.income}`}>
                            +764,63 ₽
                        </p>
                        <button className={styles.editButton}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastEntries;
