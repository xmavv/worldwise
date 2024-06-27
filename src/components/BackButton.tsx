import Button from "./Button.tsx";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        navigate(-1);
        e.preventDefault();
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
