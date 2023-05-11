import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import ContainerBox from './Components/ContainerBox';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/shop" element={<ContainerBox />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/banner" element={<Banner />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/menu" element={<MenuLevel />} /> */}
      </Routes>

    </div>
  );
}

export default App;
