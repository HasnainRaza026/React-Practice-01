import { useState } from "react";
import "../index.css";
import Friends from "./Friends";
import Add from "./Add";
import Split from "./Split";

const initialFriends = [
  {
    id: 1,
    name: "Clark",
    image: "https://i.pravatar.cc/50?u=118836",
    balance: -7,
  },
  {
    id: 2,
    name: "Sarah",
    image: "https://i.pravatar.cc/50?u=933372",
    balance: 20,
  },
  {
    id: 3,
    name: "Anthony",
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

      {isOpenSplit && <Split onSplit={setIsOpenSplit} friends={friends} />}
    </div>
  );
}

export default App;
