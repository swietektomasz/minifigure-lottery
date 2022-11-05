import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Lego minigifs mystery box
      <button onClick={() => navigate("/lottery")}>Let's go!</button>
    </div>
  );
};
