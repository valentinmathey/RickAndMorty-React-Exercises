import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/public/Footer';
import Main from './Components/public/Main';
import { NavBar } from './Components/public/NavBar';
import { Detail } from './Components/public/Detail';
import { UserForm } from './Components/public/UserForm.js';

function App() {

    
    return (
        <div>

            <Router>
                <NavBar />
                <Routes>
                    <Route exact path={"/"} element={<Main />} />
                    <Route exact path={"/detail/:id"} element={<Detail />} />
                    <Route exact path={"/user-form"} element={<UserForm />} />
                </Routes>
                <Footer />
            </Router>

        </div>

    );
}

export default App; 