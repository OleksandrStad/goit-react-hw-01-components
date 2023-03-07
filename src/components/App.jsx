import user from 'json/user.json';
import { Profile } from 'components/Profile/Profile';




export const App = () => {
  return (
    <div
    // style={{
    //   // height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >

      <Profile
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        avatar={user[0].avatar}
        stats={user[0].stats}
      />


    </div>
  );
};
