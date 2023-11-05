import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import NavbarUser from "../components/Navbar-user/NavbarUser";
import { BsTrash3Fill } from "react-icons/bs";

function Status() {
  const [status, setStatus] = useState("รอดำเนินการ");
  const [showCancelButton, setShowCancelButton] = useState(true);

  const handleCancelButton = () => {
    const confirmed = window.confirm(
      "แน่ใจนะว่าจะยกเลิก? ทางเราจะไม่คืนเงินทุกกรณี"
    );

    if (confirmed) {
      setStatus("คุณยังไม่ทำการจอง"); // Update status when canceled
      setShowCancelButton(false);
    }
  };

  const handleReviewButton = () => {
    // Handle the logic for the review button here when the status is "เสร็จสิ้น"
  };

  return (
    <>
      <NavbarUser />
      <br />
      <br />
      <br />
      <br />
      <div className="content-wrapper">
        <div className="container-xl flex-grow-1 container-p-y">
          <div className="card mb-4">
            <h5 className="card-header">ตรวจสอบสถานะ</h5>
            <div className="card-body">
              <Toast className="m-3">
                <Toast.Header closeButton={false}>
                  <strong className="me-auto">สถานะ</strong>
                </Toast.Header>
                <Toast.Body>{status}</Toast.Body>
                {showCancelButton && status !== "เสร็จสิ้น" ? (
                  <div className="d-flex justify-content-center m-3">
                    <Button
                      className="d-flex justify-content-center align-items-center"
                      variant="danger"
                      onClick={handleCancelButton}
                    >
                      <BsTrash3Fill />
                      ยกเลิก
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center m-3">
                    <Button
                      className="d-flex justify-content-center align-items-center"
                      variant="primary"
                      onClick={handleReviewButton}
                    >
                      Review
                    </Button>
                  </div>
                )}
              </Toast>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
