import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [active, setActive] = useState(1);
    return (
        <div class=" sidebar d-flex justify-content-between flex-column bg-dark text-white  vh-100">
            <div>
                <span class="text-decoration-none text-white p-3" href="">
                    <i class="bi bi-code-slash fs-4 me-4"></i>
                    <span class="fs-4">Code with Ibrahim</span>
                </span>
                <hr class="text-secondary"/>
                <ul class="nav nav-pills flex-column mt-2">
                    <li class={active ===1 ? "active nav-item p-2":"nav-item p-2"} 
                    onClick={e => setActive(1)}>
                        <span  class="text-decoration-none text-white" href="">
                           <i class="bi bi-speedometer me-3"></i>
                           <span class="fs-5"><strong>Dashboard</strong></span>
                        </span>
                    </li>
                    <li class={active ===2 ? "active nav-item p-2":"nav-item p-2"} 
                    onClick={e => setActive(2)}>
                        <span  class="text-decoration-none text-white" href="">
                            <i class="bi bi-people me-3"></i>
                           <span class="fs-5"><strong>Users</strong></span>
                        </span>
                    </li>
                    <li class={active ===3 ? "active nav-item p-2":"nav-item p-2"} 
                    onClick={e => setActive(3)}>
                        <span  class="text-decoration-none text-white" href="">
                        <i class="bi bi-border-middle me-3"></i>
                           <span class="fs-5"><strong>Orders</strong></span>
                        </span>
                    </li>
                    <li class={active ===4 ? "active nav-item p-2":"nav-item p-2"} 
                    onClick={e => setActive(4)}>
                        <span  class="text-decoration-none text-white" href="">
                        <i class="bi bi-border-all me-3"></i>
                           <span class="fs-5"><strong>Report</strong></span>
                        </span>
                    </li>

                </ul>
            </div>
            <div>
                <hr  class="text-secondary" />
                <div class="nav-item p-2">
                        <span  class="text-decoration-none text-white" href="">
                        <i class="bi bi-person-circle me-3"></i>
                           <span class="fs-5"><strong>Ibrahim</strong></span>
                        </span>
                    </div>
            </div>
        </div>
    );
};

export default Sidebar;