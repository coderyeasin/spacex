import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './components/Home/Explore/Explore';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore/:id" element={<Explore />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
