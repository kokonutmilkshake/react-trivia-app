import Home from './pages/Home';
import GeneratePage from './pages/GeneratePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './pages/NoPage';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />   {/* equivalent to <Route path='/' element={<Home />} /> */}
                    <Route path='/home' element={<Home />} />
                    <Route path='/generate/:categoryName' element={<GeneratePage />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}
