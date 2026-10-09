
import { useState } from "react";
import "./AddEmployee.css";

function AddEmployee({ onAddEmployee, onCancel, employeeToEdit }) {
    const [employee, setEmployee] = useState(() => ({
        name: employeeToEdit?.name || "",
        department: employeeToEdit?.department || "",
        role: employeeToEdit?.role || "",
        email: employeeToEdit?.email || "",
        status: employeeToEdit?.status || "Active"
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddEmployee(employee);
    };

    return (
        <div className="add-employee-page">
            <div className="add-employee-card">
                <div className="form-header">
                    <div>
                        <h1>
                            {employeeToEdit ? "Edit Employee" : "Add Employee"}
                        </h1>
                        <p>Enter employee details below</p>
                    </div>

                    <button
                        type="button"
                        className="cancel-button"
                        onClick={onCancel}
                    >
                        Back
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Employee Name</label>
                            <input
                                type="text"
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                placeholder="Enter employee name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={employee.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Department</label>
                            <select
                                name="department"
                                value={employee.department}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Department</option>
                                <option value="IT">IT</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Designation</label>
                            <input
                                type="text"
                                name="role"
                                value={employee.role}
                                onChange={handleChange}
                                placeholder="Enter designation"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Status</label>
                            <select
                                name="status"
                                value={employee.status}
                                onChange={handleChange}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="On Leave">On Leave</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="save-button">
                            {employeeToEdit ? "Update Employee" : "Save Employee"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEmployee;