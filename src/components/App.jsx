import user from 'json/user.json';
import data from 'json/data.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';




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


    </div>
  );
};
