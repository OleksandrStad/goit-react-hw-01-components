import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';




export const App = () => {
  return (
    <div>
      <Profile
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        avatar={user[0].avatar}
        stats={user[0].stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  )
};
