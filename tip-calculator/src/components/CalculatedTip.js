export default function CalculatedTip({
  totalBill,
  totalTip,
  setBill,
  setYouSatisfac,
  setFrndSatisfac,
}) {
  const handleReset = () => {
    setBill("");
    setYouSatisfac({
      satisfaction: "Dissatisfied",
      tip: 0,
    });
    setFrndSatisfac({
      satisfaction: "Dissatisfied",
      tip: 0,
    });
  };

  return (
    <div className="calculated-container">
      {totalBill ? (
        <>
          <p className="calculated-tip">
            You Should Pay ${totalBill + totalTip}
          </p>
          <p className="calculated-tip">
            (${totalBill} + ${totalTip} tip)
          </p>
        </>
      ) : (
        <>
          <p className="calculated-tip">Please Enter the Bill</p>
          <p className="calculated-tip">($Bill + $Tip)</p>
        </>
      )}

      <div className="calculated-reset">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
