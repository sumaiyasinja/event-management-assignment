import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins pt-4">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;