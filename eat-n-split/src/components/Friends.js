export default function Friends({
  friends,
  isOpenAdd,
  onOpenAdd,
  onOpenSplit,
}) {
  return (
    <>
      <div className="all-friends-container">
        {friends.map((friend) => (
          <RenderFriends
            key={friend.id}
            friend={friend}
            onOpenSplit={onOpenSplit}
          />
        ))}
      </div>
      {!isOpenAdd && (
        <div className="add-friend">
          <button onClick={() => onOpenAdd((prev) => !prev)}>Add Friend</button>
        </div>
      )}
    </>
  );
}

function RenderFriends({ friend, onOpenSplit }) {
  return (
    <div className="friend-container">
      <div className="friend-container-data">
        <img src={friend.image} alt="pic" />
        <div>
          <p className="name">{friend.name}</p>
          {friend.balance === 0 ? (
            <p className="balance">You and {friend.name} are even</p>
          ) : friend.balance < 0 ? (
            <p className="balance" style={{ color: "#AC2E2E" }}>
              You owe {friend.name} Rs. {Math.abs(friend.balance)}
            </p>
          ) : (
            <p className="balance" style={{ color: "#1D933C" }}>
              {friend.name} owes you Rs. {friend.balance}
            </p>
          )}
        </div>
      </div>
      <button onClick={() => onOpenSplit(friend.id)}>Select</button>
    </div>
  );
}
