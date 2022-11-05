import { useNavigate } from "react-router-dom";
import { useMinifigures } from "../../../context/Minifigures";
import { Part } from "../../../types";

export const Summary = ({ parts }: { parts: Array<Part> }) => {
  const {
    state: { figurine },
  } = useMinifigures();
  const navigate = useNavigate();

  console.log(figurine);

  return (
    <div>
      <h3>Summary</h3>
      <img src={figurine.set_img_url} />
      {parts.map((part) => (
        <div key={part.id}>{part.id}</div>
      ))}
      <button className="button" onClick={() => navigate("/lottery")}>
        go back
      </button>
    </div>
  );
};
