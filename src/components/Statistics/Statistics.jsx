import PropTypes from 'prop-types';
import style from './Statistic.module.css';
import { getRandomHexColor } from './Random.js'

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.section}> {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statWrap}>{stats.map(stat => <li className={style.StatItem} key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
        <span className={style.label}>{stat.label}</span>
        <span className={style.percentage}>{stat.percentage}</span>
      </li>)}
      </ul>
    </section>  
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
};