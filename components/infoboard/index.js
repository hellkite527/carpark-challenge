export const InfoBoard = ({ availableSlotsCount }) => {
  return (
    <div className="text-center mb-3">
      <h3>00 Parking Lot</h3>
      <div>
        Available slots: <span>{availableSlotsCount}</span>
      </div>
    </div>
  );
};