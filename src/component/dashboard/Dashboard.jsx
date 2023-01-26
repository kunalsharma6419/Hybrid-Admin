import React, { useState } from "react";

// import SemiCircleProgressBar from "react-progressbar-semicircle";

import "./dashboard.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ChatIcon from "@mui/icons-material/Chat";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import WifiIcon from "@mui/icons-material/Wifi";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TokenIcon from "@mui/icons-material/Token";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import WorkIcon from "@mui/icons-material/Work";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import GroupIcon from "@mui/icons-material/Group";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const toggle = () => {
    var x = document.getElementById("sidebar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  const [spchart, setSpchart] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  const [piechart, setPiechart] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <>
      {/* sidebar start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            {/* <div className="wrapper"></div> */}
            <div className="sidebar">
              <div className="top">
                <a style={{ textDecoration: "none" }}>
                  <span className="logo">Admin Panel</span>
                </a>
                <div className="m-3" onClick={toggle}>
                  <MenuIcon className="icon bg-light" />
                </div>
              </div>
              <hr />
              <div className="center" id="sidebar">
                <ul>
                  <p className="title">MAIN</p>
                  <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                  </li>
                  <p className="title">APPLICATIONS</p>
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <CalendarMonthTwoToneIcon className="icon" />
                      <span>Calendar</span>
                    </li>
                  </a>
                  <a style={{ textDecoration: "none" }}>
                    <li>
                      <ChatIcon className="icon" />
                      <span>Chat</span>
                    </li>
                  </a>
                  <li>
                    <CreditCardIcon className="icon" />
                    <span>File Manager</span>
                  </li>
                  <li>
                    <CreditCardIcon className="icon" />
                    <span>Ecommerce</span>
                  </li>
                  <li>
                    <EmailIcon className="icon" />
                    <span>Email</span>
                  </li>
                  <li>
                    <DescriptionIcon className="icon" />
                    <span>Invoices</span>
                  </li>
                  <li>
                    <InsertDriveFileIcon className="icon" />
                    <span>Projects</span>
                  </li>
                  <li>
                    <WifiIcon className="icon" />
                    <span>Contacts</span>
                  </li>
                  <p className="title">LAYOUTS</p>
                  <p className="title">PAGES</p>
                  <li>
                    <HowToRegIcon className="icon" />
                    <span>Authentications</span>
                  </li>
                  <li>
                    <TokenIcon className="icon" />
                    <span>Utility</span>
                  </li>
                  <p className="title">COMPONENTS</p>
                  <li>
                    <WorkIcon className="icon" />
                    <span>UI Elements</span>
                  </li>
                  <li>
                    <BorderColorIcon className="icon" />
                    <span>Forms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            {/* navbar start */}
            <nav className="d-flex justify-content-between p-2">
              <div>Dashboard</div>
              <div>
                <SearchIcon className="icon m-1" />
                <FlagIcon className="icon m-1" />
                <DashboardIcon className="icon m-1" />
                <NotificationAddIcon className="icon m-1" />
                <SettingsIcon className="icon m-1" />
                <img src="/images/profile.jpg" className="profileImg" alt="" />
              </div>
            </nav>
            {/* navbar end */}

            <div className="row">
              <div className="col-lg-9">
                {/* revenue, orders, customers section start */}
                <div className="row">
                  <div className="col-lg-4">
                    <div className="revenue shadow-lg p-1  bg-white rounded">
                      <div className="row">
                        <div className="col-lg-8 d-flex">
                          <div className="revenueicon">
                            <MonetizationOnIcon className="icon " />
                          </div>
                          <div>
                            <p>Revenue</p>
                            <p className="revenueb">$21,456</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="revenuep">
                            <p>+ 2.65%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="revenue shadow-lg p-1  bg-white rounded">
                      <div className="row">
                        <div className="col-lg-8 d-flex">
                          <div className="revenueicon">
                            <FilterFramesIcon className="icon " />
                          </div>
                          <div>
                            <p>Orders</p>
                            <p className="revenueb">5,643</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="orders">
                            <p>- 0.82%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="revenue shadow-lg p-1  bg-white rounded">
                      <div className="row">
                        <div className="col-lg-8 d-flex">
                          <div className="revenueicon">
                            <GroupIcon className="icon " />
                          </div>
                          <div>
                            <p>Customers</p>
                            <p className="revenueb">45,254</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="orders">
                            <p>- 1.04%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* revenue, orders, customers section end */}
                {/* overview section start */}
                <div className="row revenue shadow-lg p-1  bg-white rounded mt-5">
                  <h5>Overview</h5>
                  <div className="row">
                    <div className="col-lg-3 p-2">
                      <div>
                        <p>This Month</p>
                        <p className="revenueb">
                          $24,568 <span className="overviewp">+2.65%</span>
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <p>Orders</p>
                          <p className="revenueb">5,643</p>
                        </div>
                        <div className="col-lg-6">
                          <p>sales</p>
                          <p className="revenueb">16,273</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <p>Order Value</p>
                          <p className="revenueb">12.03%</p>
                        </div>
                        <div className="col-lg-6">
                          <p>Customers</p>
                          <p className="revenueb">21,456</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <p>Income</p>
                          <p className="revenueb">$35,652</p>
                        </div>
                        <div className="col-lg-6">
                          <p>Experince</p>
                          <p className="revenueb">$12,248</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-8"></div>
                        <div className="col-lg-4 ">
                          <div className="row">
                            <div className="col-lg-5 mt-2">
                              <b>Sort by:</b>
                            </div>
                            <div className="col-lg-7">
                              <select
                                className="form-select border-0"
                                aria-label="Default select example"
                              >
                                <option defaultValue="0">Yearly</option>
                                <option value="1">Weekaly</option>
                                <option value="2">Monthly</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        // width="500"
                      />
                    </div>
                  </div>
                </div>
                {/* overview section end */}
                {/* user, order,product section start */}
                <div className="row">
                  <div className="col-lg-4">
                    <div
                      className="shadow-lg p-1  bg-white rounded mt-5"
                      id="chart"
                    >
                      <ReactApexChart
                        options={spchart.options}
                        series={spchart.series}
                        type="area"
                        height={350}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="shadow-lg p-1  bg-white rounded mt-5">
                      <ReactApexChart
                        options={piechart.options}
                        series={piechart.series}
                        type="donut"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="shadow-lg p-1  bg-white rounded mt-5">
                      <div className="d-flex justify-content-between">
                        <h5>Top Product</h5>
                        <div>
                          <select
                            className="form-select border-0"
                            aria-label="Default select example"
                          >
                            <option defaultValue="0">Monthly</option>
                            <option value="1">Weekaly</option>
                            <option value="2">Yearly</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div className="row">
                          <div className="col-lg-8 d-flex">
                            <div className="revenueicon">
                              <p className="icon ">#1</p>
                            </div>
                            <div>
                              <p className="revenu">Polo blue T-shirt</p>
                              <p className="revenueb">$25.4</p>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="productp">
                              <p>3.82k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row">
                          <div className="col-lg-8 d-flex">
                            <div className="revenueicon">
                              <p className="icon ">#2</p>
                            </div>
                            <div>
                              <p>hoodle for men</p>
                              <p className="revenueb">$25.4</p>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="productp">
                              <p>3.14k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="row">
                          <div className="col-lg-8 d-flex">
                            <div className="revenueicon">
                              <p className="icon ">#3</p>
                            </div>
                            <div>
                              <p>Red color Cap</p>
                              <p className="revenueb">$25.4</p>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="productp">
                              <p>2.84k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* user, order,product section end */}
              </div>
              {/* </div> */}
              <div className="col-lg-3">
                {/* profile */}
                {/* <div className="col-lg-3"> */}
                <div className="shadow-lg p-1  bg-white rounded">
                  <div className="profile-head"></div>
                  <div className="profile text-center">
                    <img src="/images/profile.jpg" alt="" />
                    <h5>Jonny Bennett</h5>
                    <p>Product Designer</p>
                  </div>
                  <div>
                    <div className="row text-center p-3">
                      <div className="col-lg-6">
                        <p className="revenueb">12,69</p>
                        <p>Products</p>
                      </div>
                      <div className="col-lg-6">
                        <p className="revenueb">52.2k</p>
                        <p>Followers</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div className="row text-center p-3">
                      <div className="col-lg-6">
                        <h5>Earning</h5>
                      </div>
                      <div className="col-lg-6">
                        <InfoIcon className="icon" />
                      </div>
                    </div>

                    <div>
                      <div
                        role="progressbar"
                        aria-valuenow="76"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        className="progressvalue m-5"
                      ></div>

                      <div className="text-center">
                        <h5>$26,2256</h5>
                        <p>Earning this Month</p>
                        <p>
                          <span className="overviewp">+2.65%</span> From
                          previous period
                        </p>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <h5>Recent Activity</h5>
                      <div className="d-flex">
                        <div className="activity">
                          <p>12 sep</p>
                        </div>
                        <div>
                          <p className="mt-3">
                            Responded to need "Volunteer Activities"
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="activity">
                          <p>11 sep</p>
                        </div>
                        <div>
                          <p className="mt-3">
                            Responded to need "Volunteer Activities"
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="activity">
                          <p>10 sep</p>
                        </div>
                        <div>
                          <p className="mt-3">
                            Responded to need "Volunteer Activities"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* profile section end*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
