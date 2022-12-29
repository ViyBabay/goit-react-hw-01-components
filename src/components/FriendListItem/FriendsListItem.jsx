import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline = "true" } }) => {
    return (
        <li className={style.item}>
            <span className={style.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>);
};


FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}