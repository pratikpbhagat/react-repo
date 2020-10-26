import React from 'react';
import styles from './Weekly.module.css';

const Weekly = () => {

    const daysOfWeek = [
        { day: 'Sunday', time: '0.0' },
        { day: 'Monday', time: '10.0' },
        { day: 'Tuesday', time: '9.0' },
        { day: 'Wednesday', time: '11.0' },
        { day: 'Thursday', time: '12.0' },
        { day: 'Friday', time: '9.0' },
        { day: 'Saturday', time: '3.0' }
    ];

    return (
        <div className={styles.Weekly}>
            <h4>Overview for the week of ...</h4>
            <div className={styles.WeeklyTable}>
                <div className={styles.WeeklyTableAccounts}>
                    <div>
                        Projects
                    </div>
                    <div>
                        Project Name 1
                    </div>
                    <div>
                        Project Name 2
                    </div>
                </div>
                <div className={styles.WeeklyTableData}>
                    {daysOfWeek.map((data) => (
                        <div>
                            <div className={styles.WeeklyTableHeader}>{data.day}</div>
                            <div>{data.time}</div>
                            <div>{data.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Weekly;