import { useState } from "react";
import "../index.css";
import Friends from "./Friends";
import Add from "./Add";
import Split from "./Split";

const initialFriends = [
  {
    id: 1,
    name: "Muhammad",
    image: "https://i.pravatar.cc/50?u=118836",
    balance: -7,
  },
  {
    id: 2,
    name: "Hasnain",
    image: "https://i.pravatar.cc/50?u=933373",
    balance: 20,
  },
  {
    id: 3,
    name: "Raza",
    image: "https://i.pravatar.cc/50?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenSplit, setIsOpenSplit] = useState(null);
  return (
    <div className="friends-main-container">
      <Friends
        friends={friends}
        isOpenAdd={isOpenAdd}
        onOpenAdd={setIsOpenAdd}
        onOpenSplit={setIsOpenSplit}
      />
      {isOpenAdd && (
        <Add
          isOpenAdd={isOpenAdd}
          onOpenAdd={setIsOpenAdd}
          friends={friends}
          onAddFriends={setFriends}
        />
      )}

      {isOpenSplit && (
        <Split
          splitId={isOpenSplit}
          onSplitId={setIsOpenSplit}
          friends={friends}
          onEditFriend={setFriends}
        />
      )}
    </div>
  );
}

export default App;
