import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
const navigate = useNavigate();

const handleLogout = () => {
    navigate("/");
};

return (
    <div className="dashboard-layout">
        <aside className="sidebar">
            <h2 className="sidebar-logo">EMS</h2>
            <p className="sidebar-subtitle">Employee Management</p>

            <nav className="sidebar-nav">
                <a href="/dashboard" className="nav-link active">Dashboard</a>
                <a href="/employees" className="nav-link">Employees</a>
                <a href="#departments" className="nav-link">Departments</a>
                <a href="#attendance" className="nav-link">Attendance</a>
                <a href="#leave" className="nav-link">Leave Management</a>
            </nav>

            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
        </aside>

        <main className="dashboard-main">
            <header className="dashboard-header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome back, Admin!</p>
                </div>

                <div className="admin-profile">
                    <div className="avatar">A</div>
                    <span>Administrator</span>
                </div>
            </header>

            <section className="dashboard-welcome">
                <h2>Welcome to your workspace 👋</h2>
                <p>Manage your employees and daily HR activities in one place.</p>
            </section>

            <section className="stats-grid">
                <div className="stat-card">
                    <p>Total Employees</p>
                    <h2>120</h2>
                    <span>All registered employees</span>
                </div>

                <div className="stat-card">
                    <p>Active Employees</p>
                    <h2>110</h2>
                    <span>Currently active</span>
                </div>

                <div className="stat-card">
                    <p>Departments</p>
                    <h2>8</h2>
                    <span>Across the organization</span>
                </div>

                <div className="stat-card">
                    <p>On Leave</p>
                    <h2>10</h2>
                    <span>Employees on leave</span>
                </div>
            </section>

            <section className="dashboard-section">
                <h2>Quick Overview</h2>
                <p>
                    Your dashboard is ready. Next, we'll add employee records,
                    search, filters, and add/edit employee functionality.
                </p>
            </section>
        </main>
    </div>
);


}

export default Dashboard;
