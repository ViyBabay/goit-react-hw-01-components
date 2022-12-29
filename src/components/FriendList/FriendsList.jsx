import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendsListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={style.friendList}>
   {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
</ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};