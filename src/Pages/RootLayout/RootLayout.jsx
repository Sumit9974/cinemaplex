import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
// import Header from '../Components/Header/Header';

function RootLayout() {
    return (
        <>
            <Header />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}
 
export default RootLayout;