import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendsList";
import { Transaction } from "./TransactionHistory/Transaction";

import user from "../data/user";
import statistics from "../data/statistics";
import friends from "../data/friends";
import transactions from "../data/transactions";

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
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.followers}
        views={user.views}
        likes={user.likes}
      />

      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />

      <FriendList friends={friends} />

      <Transaction items={transactions} />

      
      
    </div>
  );
};
