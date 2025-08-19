import "./App.css";

import Title from "./components/Title";
import Counter from "./components/Counter";

import useCountdown from "./hooks/useCountdown";

import peterPark from "./assets/BLU_A109417189_Tom-Holland-Films-Scenes-For-Spider-Man-In-Glasgow-Scotland-03-Aug-2025jpg-JS10.webp";

function App() {
  const [day, hour, minute, second] = useCountdown("Jul 30, 2026 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${peterPark})` }}>
      <div className="container">
        <Title title="Lançamento Homem-Aranha: Um Novo Dia" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
