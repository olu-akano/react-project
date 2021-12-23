import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter'

function App () {
    return (
        <Routes>
            <Route exact path="/counter" element={<Counter/>}/>
        </Routes>
    )
}
export default App;