import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
    )
  }

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
}

export default FriendList;