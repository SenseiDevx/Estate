import './App.css';
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Choose from "./components/Choose/Choose";
import Assobnyak from "./components/Assobnyak/Assobnyak";
import Store from "./components/Store/Store";
import Peoples from "./components/Peoples/Peoples";
import Estate from "./components/Estate/Estate";
import Customers from "./components/Customers/Customers";
import PodFooter from "./components/PodFooter/PodFooter";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Main/>
            <Choose/>
            <Assobnyak/>
            <Store/>
            <Peoples/>
            <Estate/>
            <Customers/>
            <PodFooter/>
            <Footer/>
        </div>
    );
}

export default App;
