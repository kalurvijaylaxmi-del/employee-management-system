import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Employees.css";
import AddEmployee from "./AddEmployee";

function Employees() {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([
        {
            id: 101,
            name: "Aarav Sharma",
            department: "IT",
            role: "Developer",
            email: "aarav@company.com",
            status: "Active"
        },
        {
            id: 102,
            name: "Priya Patel",
            department: "HR",
            role: "HR Executive",
            email: "priya@company.com",
            status: "Active"
        },
        {
            id: 103,
            name: "Rahul Mehta",
            department: "Finance",
            role: "Accountant",
            email: "rahul@company.com",
            status: "On Leave"
        },
        {
            id: 104,
            name: "Sneha Shah",
            department: "IT",
            role: "UI Developer",
            email: "sneha@company.com",
            status: "Active"
        },
        {
            id: 105,
            name: "Rohan Desai",
            department: "Sales",
            role: "Sales Executive",
            email: "rohan@company.com",
            status: "Inactive"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [showAddEmployee, setShowAddEmployee] = useState(false);

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeToEdit, setEmployeeToEdit] = useState(null);

    const handleEdit = (employee) => {
        setEmployeeToEdit(employee);
        setShowAddEmployee(true);
    };
    const handleAddEmployee = (employeeData) => {
        if (employeeToEdit) {
            // Update the existing employee
            setEmployees((previousEmployees) =>
                previousEmployees.map((employee) =>
                    employee.id === employeeToEdit.id
                        ? { ...employeeData, id: employee.id }
                        : employee
                )
            );

            setEmployeeToEdit(null);
        } else {
            // Add a new employee
            const newEmployee = {
                ...employeeData,
                id: Date.now()
            };

            setEmployees((previousEmployees) => [
                ...previousEmployees,
                newEmployee
            ]);
        }

        setShowAddEmployee(false);
    };
    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );
        if (confirmDelete) {
            setEmployees(
                employees.filter((employee) => employee.id != id)
            );
        }
    };
    const handleView = (employee) => {
        setSelectedEmployee(employee);
    };
    const handleLogout = () => {
        navigate("/");
    };
    if (showAddEmployee) {
        return (
            <AddEmployee
                onAddEmployee={handleAddEmployee}
                onCancel={() => {
                    setShowAddEmployee(false);
                    setEmployeeToEdit(null);
                }}
                employeeToEdit={employeeToEdit}
            />
        );
    }
    return (
        <div className="employees-layout">

            <aside className="employees-sidebar">

                <h2 className="employees-brand">
                    EMS Portal
                </h2>

                <nav className="employees-nav">

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="employees-nav-link"
                    >
                        Dashboard
                    </button>

                    <button className="employees-nav-link active">
                        Employees
                    </button>

                    <button className="employees-nav-link">
                        Departments
                    </button>

                    <button className="employees-nav-link">
                        Attendance
                    </button>

                    <button className="employees-nav-link">
                        Leave Management
                    </button>

                </nav>

                <button
                    className="employees-logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </aside>

            <main className="employees-main">

                <header className="employees-header">

                    <div>
                        <h1>Employees</h1>
                        <p>Manage your employee records</p>
                    </div>

                    <button
                        className="add-employee-button"
                        onClick={() => {
                            setEmployeeToEdit(null);
                            setShowAddEmployee(true);
                        }}
                    >
                        + Add Employee
                    </button>

                </header>

                <section className="employees-card">

                    <div className="employees-toolbar">

                        <div>
                            <h2>Employee List</h2>
                            <p>
                                Total Employees: {employees.length}
                            </p>
                        </div>

                        <input
                            type="text"
                            placeholder="Search employees..."
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                            className="employee-search"
                        />

                    </div>

                    <div className="employees-table-wrapper">

                        <table className="employees-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {filteredEmployees.map((employee) => (

                                    <tr key={employee.id}>

                                        <td>
                                            EMP-{employee.id}
                                        </td>

                                        <td className="employee-name">
                                            {employee.name}
                                        </td>

                                        <td>
                                            {employee.department}
                                        </td>

                                        <td>
                                            {employee.role}
                                        </td>

                                        <td>
                                            {employee.email}
                                        </td>

                                        <td>
                                            <span
                                                className={`employee-status ${employee.status
                                                    .toLowerCase()
                                                    .replace(" ", "-")}`}
                                            >
                                                {employee.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button
                                                className="action-button"
                                                onClick={() => setSelectedEmployee(employee)}
                                            >
                                                View
                                            </button>

                                            <button
                                                className="action-button"
                                                onClick={() => handleEdit(employee)}
                                            >
                                                Edit
                                            </button>

                                            <button className="delete-button"
                                                onClick={() => handleDelete(employee.id)}>
                                                Delete
                                            </button>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                        {filteredEmployees.length === 0 && (
                            <div className="no-employees">
                                No employees found.
                            </div>
                        )}

                    </div>

                </section>
                {selectedEmployee && (
                    <div className="employee-modal-overlay">
                        <div className="employee-modal">
                            <h2>Employee Details</h2>

                            <p><strong>ID:</strong> EMP-{selectedEmployee.id}</p>
                            <p><strong>Name:</strong> {selectedEmployee.name}</p>
                            <p><strong>Department:</strong> {selectedEmployee.department}</p>
                            <p><strong>Designation:</strong> {selectedEmployee.role}</p>
                            <p><strong>Email:</strong> {selectedEmployee.email}</p>
                            <p><strong>Status:</strong> {selectedEmployee.status}</p>

                            <button
                                className="action-button"
                                onClick={() => setSelectedEmployee(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>

        </div>
    );


}

export default Employees;
