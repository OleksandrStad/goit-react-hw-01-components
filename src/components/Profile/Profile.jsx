import PropTypes from 'prop-types';
import {
    ProfileWrap,
    Avatar,
    ProfileDescr,
    ProfileTitle,
    StatisticList,
    StatisticItem,
    StatisticInfo,
} from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        < ProfileWrap>

            <div>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                < ProfileTitle>{username}</ProfileTitle>
                <ProfileDescr>@{tag}</ProfileDescr>
                <ProfileDescr>{location}</ProfileDescr>
            </div>

            <StatisticList>
                <StatisticItem>
                    <span>Followers</span>
                    <StatisticInfo>{stats.followers}</StatisticInfo>
                </StatisticItem>
                <StatisticItem>
                    <span>Views</span>
                    <StatisticInfo>{stats.views}</StatisticInfo>
                </StatisticItem>
                <StatisticItem>
                    <span>Likes</span>
                    <StatisticInfo>{stats.likes}</StatisticInfo>
                </StatisticItem>
            </StatisticList>
        </ ProfileWrap>
    )

}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

