import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
    </div>
  );
}

export default App;
