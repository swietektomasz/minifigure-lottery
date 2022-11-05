import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      Lego minigifs mystery box
      <button className="button" onClick={() => navigate("/lottery")}>
        Let's go!
      </button>
    </div>
  );
};
