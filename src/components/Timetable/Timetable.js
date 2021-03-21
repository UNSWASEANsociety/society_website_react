import React from 'react'
import PropTypes from 'prop-types'
import styles from './Timetable.module.scss';
import events from './Data';

const data = [
    {
        title: "Day 1",
        description: "In-Person & Online Event",
        events: events.day1Events
    },
    {
        title: "Day 2",
        description: "In-person Event",
        events: events.day2Events
    },
    {
        title: "Day 3",
        description: "Online Event",
        events: events.day3Events
    }
]
const Timetable = props => {
    return (
        <div>
            <main className={`${styles.st_viewport} ${styles.scrollBar}`}>
            {data.map(eachEventDay => (
                <div className={styles.st_wrap_table} data-table_id="0">
                    <header className={styles.st_table_header}>
                        <h2>{eachEventDay.title}</h2>
                        <div className={styles.st_row}>
                            <div className={`${styles.st_column} ${styles.timeColumn} ${styles.rank}`}>Start</div>
                            <div className={`${styles.st_column} ${styles.timeColumn} ${styles.name}`}>End</div>
                            <div className={`${styles.st_column} ${styles.agendaColumn} ${styles.surname}`}>Agenda</div>
                            <div className={`${styles.st_column} ${styles.descriptionColumn} ${styles.year}`}>Description</div>
                        </div>
                    </header>
                    <div className={styles.st_table}>
                        {eachEventDay.events.map(event => (
                            <div className={styles.st_row}>
                                <div className={`${styles.st_column} ${styles.timeColumn} ${styles.rank}`}>{event.start}</div>
                                <div className={`${styles.st_column} ${styles.timeColumn} ${styles.name}`}>{event.end}</div>
                                <div className={`${styles.st_column} ${styles.agendaColumn} ${styles.surname}`}>{event.agenda}</div>
                                <div className={`${styles.st_column} ${styles.descriptionColumn} ${styles.year}`}>{event.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </main>
        </div>
    )
}

Timetable.propTypes = {

}

export default Timetable
