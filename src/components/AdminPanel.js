import { Dropdown } from "bootstrap";
import React from "react";
import { DropdownButton, NavDropdown, Table } from "react-bootstrap";

export default function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel</h1>
      {/* crerate a tab */}
      <Table
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          width: "50%",
          margin: "auto",
        }}
        striped
        bordered
        hover
        size="lg"
      >
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order NO. </th>
            <th>Time</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>BURGER</td>
            <td>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="serve"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cooking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dying</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Serve</NavDropdown.Item>
              </NavDropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
