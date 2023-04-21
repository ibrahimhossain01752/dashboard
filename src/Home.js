import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Home = () => {
    return (
       <div class="p-3 bg-light">
         <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-2 col-md-4 col-lg-3 p-3 bg-light">
                   <div class="d-flex justify-content-around align-items-center p-4 bg-white border border-secondary shadow-sm">
                   <i class="bi bi-currency-dollar fs-1 text-success"></i>
                    <div>
                        <span>Sales</span>
                        <h2>234</h2>
                    </div>
                   </div>
                </div>
                <div class="col-12 col-sm-2 col-md-4 col-lg-3 p-3 bg-light">
                   <div class="d-flex justify-content-around align-items-center p-4 bg-white border border-secondary shadow-sm">
                   <i class="bi bi-truck fs-1 text-primary"></i>
                    <div class="">
                        <span>Delivery</span>
                        <h2>240</h2>
                    </div>
                   </div>
                </div>
                <div class="col-12 col-sm-2 col-md-4 col-lg-3 p-3 bg-light">
                <div class="d-flex justify-content-around align-items-center p-4 bg-white border border-secondary shadow-sm">
                <i class="bi bi-bar-chart-line fs-1 text-danger"></i>
                    <div>
                        <span>Increase</span>
                        <h2>234</h2>
                    </div>
                </div>
                </div>
                <div class="col-12 col-sm-2 col-md-4 col-lg-3 p-3 bg-light">
                <div class="d-flex justify-content-around align-items-center p-4 bg-white border border-secondary shadow-sm">
                <i class="bi bi-truck fs-1 text-warning"></i>
                    <div>
                        <span>Delivery</span>
                        <h2>234</h2>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-8 p-3">
                    <LineChart/>
                </div>
                <div class="col-12 col-md-4 p-3">
                    <PieChart/>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Home;