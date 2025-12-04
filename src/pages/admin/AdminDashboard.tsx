import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Dashboard</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">Content Management</h3>
                    <p className="mb-4 text-gray-600">Manage website content, text, and descriptions.</p>
                    <Link
                        to="/admin/content"
                        className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Manage Content
                    </Link>
                </div>
                {/* Placeholder for future features */}
                <div className="rounded-lg bg-white p-6 shadow-md opacity-50">
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">User Management</h3>
                    <p className="mb-4 text-gray-600">Manage admin users (Coming Soon).</p>
                    <button disabled className="cursor-not-allowed rounded bg-gray-400 px-4 py-2 text-white">
                        Manage Users
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
