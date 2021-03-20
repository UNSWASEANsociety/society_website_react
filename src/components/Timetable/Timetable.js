import React from 'react'
import PropTypes from 'prop-types'
import styles from './Timetable.module.scss';
import events from './Data';

const data = [
    {
        title: "Day 1",
        description: "In-Person & Online Event",
        events: events.day1Events
    }
]
const Timetable = props => {
    return (
        <div>
            <main className={styles.st_viewport}>
            {data.map(eachEventDay => (
                <div className={styles.st_wrap_table} data-table_id="0">
                    <header className={styles.st_table_header}>
                        <h2>{eachEventDay.title}</h2>
                        <div className={styles.st_row}>
                            <div className={`${styles.st_column} ${styles.rank}`}>Start</div>
                            <div className={`${styles.st_column} ${styles.name}`}>End</div>
                            <div className={`${styles.st_column} ${styles.surname}`}>Agenda</div>
                            <div className={`${styles.st_column} ${styles.year}`}>Description</div>
                        </div>
                    </header>
                    <div className={styles.st_table}>
                        {eachEventDay.events.map(event => (
                            <div className={styles.st_row}>
                                <div className={`${styles.st_column} ${styles.rank}`}>{event.start}</div>
                                <div className={`${styles.st_column} ${styles.name}`}>{event.end}</div>
                                <div className={`${styles.st_column} ${styles.surname}`}>{event.agenda}</div>
                                <div className={`${styles.st_column} ${styles.year}`}>{event.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className={styles.st_wrap_table} data-table_id="3">
                <header className={styles.st_table_header}>
                <h2>Native STICKY</h2>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>Rank</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Name</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Surname</div>
                    <div className={`${styles.st_column} ${styles.year}`}>Year</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Section</div>
                </div>
                </header>
                <div className={styles.st_table}>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>John</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Doe</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1973</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Germany</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Lena</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Eifel</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1996</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Germany</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Jonas</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Nacht</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1968</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Swiss</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Vanessa</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Schneider</div>
                    <div className={`${styles.st_column} ${styles.year}`}>2004</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Russia</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>laura</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Beike</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1952</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Sweden</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Max</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Luke</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1971</div>
                    <div className={`${styles.st_column} ${styles.section}`}>USA</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Jonas</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Kunze</div>
                    <div className={`${styles.st_column} ${styles.year}`}>2015</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Germany</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Janina</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Endres</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1955</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Belgium</div>
                </div>
                </div>
            </div>
            <div className={styles.st_wrap_table} data-table_id="4">
                <header className={styles.st_table_header}>
                <h2>CSS3 *~'</h2>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>Rank</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Name</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Surname</div>
                    <div className={`${styles.st_column} ${styles.year}`}>Year</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Section</div>
                </div>
                </header>
                <div className={styles.st_table}>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>John</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Doe</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1973</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Germany</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Max</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Luke</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1971</div>
                    <div className={`${styles.st_column} ${styles.section}`}>USA</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Jonas</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Kunze</div>
                    <div className={`${styles.st_column} ${styles.year}`}>2015</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Germany</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Jonas</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Nacht</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1968</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Swiss</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Vanessa</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Schneider</div>
                    <div className={`${styles.st_column} ${styles.year}`}>2004</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Russia</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Janina</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Endres</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1955</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Belgium</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>Lena</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Eifel</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1996</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Germany</div>
                </div>
                <div className={styles.st_row}>
                    <div className={`${styles.st_column} ${styles.rank}`}>0</div>
                    <div className={`${styles.st_column} ${styles.name}`}>laura</div>
                    <div className={`${styles.st_column} ${styles.surname}`}>Beike</div>
                    <div className={`${styles.st_column} ${styles.year}`}>1952</div>
                    <div className={`${styles.st_column} ${styles.section}`}>Sweden</div>
                </div>
                </div>
            </div>
            </main>
        </div>
    )
}

Timetable.propTypes = {

}

export default Timetable
