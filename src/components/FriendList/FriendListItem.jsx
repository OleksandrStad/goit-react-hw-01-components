import PropTypes from 'prop-types';
import {
    FriendItem,
    FriendName,
    FriendStatus
} from 'components/FriendList/FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
        < FriendItem >
            <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
            <img src={avatar} alt="User avatar" width="48" />
            <FriendName >{name}</FriendName >
        </FriendItem >
    )

};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

};