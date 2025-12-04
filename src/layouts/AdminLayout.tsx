import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const AdminLayout = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isAuthenticated && location.pathname !== '/admin/login') {
            navigate('/admin/login');
        }
    }, [isAuthenticated, navigate, location]);

    if (!isAuthenticated && location.pathname !== '/admin/login') {
        return null; // Or a loading spinner
    }

    // If on login page, just render the outlet (login form)
    if (location.pathname === '/admin/login') {
        return <Outlet />;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
                <nav className="mt-6">
                    <Link
                        to="/admin/dashboard"
                        className={`block px-6 py-3 hover:bg-gray-800 ${location.pathname === '/admin/dashboard' ? 'bg-gray-800 border-l-4 border-blue-500' : ''
                            }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/admin/content"
                        className={`block px-6 py-3 hover:bg-gray-800 ${location.pathname === '/admin/content' ? 'bg-gray-800 border-l-4 border-blue-500' : ''
                            }`}
                    >
                        Content Manager
                    </Link>
                </nav>
                <div className="absolute bottom-0 w-64 p-6">
                    <button
                        onClick={() => {
                            logout();
                            navigate('/admin/login');
                        }}
                        className="w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
