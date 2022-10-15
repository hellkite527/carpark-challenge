import { Col } from 'react-bootstrap';
import styles from "./parkingslot.module.scss";

export const ParkingSlot = ({ num, isBusy, carDetail, remove }) => {
  return (
    <Col>
      <div
        className={`${styles.parkingSlot} ${isBusy ? styles.busy : ""}`}
        onClick={() => remove(carDetail)}
      >
        {isBusy ? carDetail.plate : num}
      </div>
    </Col>
  );
};