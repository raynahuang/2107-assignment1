import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EmployeeInfo from "./components/EmployeeInfo/EmployeeInfo";

import data from './data';


import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <EmployeeInfo data={data} />
      <Footer />
    </div>
  );
}

export default App;