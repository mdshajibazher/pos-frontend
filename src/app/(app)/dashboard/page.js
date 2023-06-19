"use client"
import Sidebar from "@/components/sidebar";
const Dashboard = () => {

    return (
    <>
    <Sidebar/>


    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <header className="header header-sticky mb-4">
            <div className="container-fluid">
                <button className="header-toggler px-md-0 me-md-3" type="button"
                        onClick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
                    {/*<svg className="icon icon-lg">
                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
                    </svg>*/}
                </button>
                <a className="header-brand d-md-none" href="#">
                    {/*<svg width="118" height="46" alt="CoreUI Logo">
                        <use xlink:href="assets/brand/coreui.svg#full"></use>
                    </svg>*/}
                </a>
                <ul className="header-nav d-none d-md-flex">
                    <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                </ul>
                <ul className="header-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#">
                        {/*<svg className="icon icon-lg">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                        </svg>*/}
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="#">
                        {/*<svg className="icon icon-lg">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
                        </svg>*/}
                    </a></li>
                    <li className="nav-item"><a className="nav-link" href="#">
                        {/*<svg className="icon icon-lg">
                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                        </svg>*/}
                    </a></li>
                </ul>
                <ul className="header-nav ms-3">
                    <li className="nav-item dropdown"><a className="nav-link py-0" data-coreui-toggle="dropdown"
                                                         href="#" role="button" aria-haspopup="true"
                                                         aria-expanded="false">
                        <div className="avatar avatar-md"><img className="avatar-img" src="assets/img/avatars/8.jpg"
                                                               alt="user@email.com"/></div>
                    </a>
                        <div className="dropdown-menu dropdown-menu-end pt-0">
                            <div className="dropdown-header bg-light py-2">
                                <div className="fw-semibold">Account</div>
                            </div>
                            <a className="dropdown-item" href="#">
                                {/*<svg className="icon me-2">
                                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
                                </svg>*/}
                                Updates<span className="badge badge-sm bg-info ms-2">42</span></a><a
                            className="dropdown-item" href="#">
                            {/*<svg className="icon me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
                            </svg>*/}
                            Messages<span className="badge badge-sm bg-success ms-2">42</span></a><a
                            className="dropdown-item" href="#">
                            {/*<svg className="icon me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-task"></use>
                            </svg>*/}
                            Tasks<span className="badge badge-sm bg-danger ms-2">42</span></a><a className="dropdown-item"
                                                                                                 href="#">
                            {/*<svg className="icon me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-comment-square"></use>
                            </svg>*/}
                            Comments<span className="badge badge-sm bg-warning ms-2">42</span></a>
                            <div className="dropdown-header bg-light py-2">
                                <div className="fw-semibold">Settings</div>
                            </div>
                            <a className="dropdown-item" href="#">
                                {/*<svg className="icon me-2">
                                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-user"></use>
                                </svg>*/}
                                Profile</a><a className="dropdown-item" href="#">
                            {/*<svg className="icon me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
                            </svg>*/}
                            Settings</a><a className="dropdown-item" href="#">
                            {/*<svg className="icon me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-credit-card"></use>
                            </svg>*/}
                            Payments<span className="badge badge-sm bg-secondary ms-2">42</span></a><a
                            className="dropdown-item" href="#">
                            {/*<svg className="icon me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-file"></use>
                            </svg>*/}
                            Projects<span className="badge badge-sm bg-primary ms-2">42</span></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                {/*<svg className="icon me-2">
                                    <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-lock-locked"></use>
                                </svg>*/}
                                Lock Account</a><a className="dropdown-item" href="#">
                            {/*<svg className="icon me-2">
                                <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                            </svg>*/}
                            Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="header-divider"></div>
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb my-0 ms-2">
                        <li className="breadcrumb-item">
                            {/* if breadcrumb is single*/}<span>Home</span>
                        </li>
                        <li className="breadcrumb-item active"><span>Dashboard</span></li>
                    </ol>
                </nav>
            </div>
        </header>
        <div className="body flex-grow-1 px-3">
            <div className="container-lg">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card mb-4 text-white bg-primary">
                            <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="fs-4 fw-semibold">26K <span className="fs-6 fw-normal">(-12.4%
                                        {/*<svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-bottom"></use>
                        </svg>*/})</span></div>
                                    <div>Users</div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-transparent text-white p-0" type="button"
                                            data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {/*<svg className="icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                        </svg>*/}
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item"
                                                                                        href="#">Action</a><a
                                        className="dropdown-item" href="#">Another action</a><a
                                        className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="c-chart-wrapper mt-3 mx-3" style={{height: '70px'}}>
                                <canvas className="chart" id="card-chart1" height="70"></canvas>
                            </div>
                        </div>
                    </div>
                    {/* /.col*/}
                    <div className="col-sm-6 col-lg-3">
                        <div className="card mb-4 text-white bg-info">
                            <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="fs-4 fw-semibold">$6.200 <span className="fs-6 fw-normal">(40.9%
                                        {/*<svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-top"></use>
                        </svg>*/})</span></div>
                                    <div>Income</div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-transparent text-white p-0" type="button"
                                            data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {/*<svg className="icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                        </svg>*/}
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item"
                                                                                        href="#">Action</a><a
                                        className="dropdown-item" href="#">Another action</a><a
                                        className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="c-chart-wrapper mt-3 mx-3" style={{height: '70px'}}>
                                <canvas className="chart" id="card-chart2" height="70"></canvas>
                            </div>
                        </div>
                    </div>
                    {/* /.col*/}
                    <div className="col-sm-6 col-lg-3">
                        <div className="card mb-4 text-white bg-warning">
                            <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="fs-4 fw-semibold">2.49% <span className="fs-6 fw-normal">(84.7%
                                        {/*<svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-top"></use>
                        </svg>*/})</span></div>
                                    <div>Conversion Rate</div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-transparent text-white p-0" type="button"
                                            data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {/*<svg className="icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                        </svg>*/}
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item"
                                                                                        href="#">Action</a><a
                                        className="dropdown-item" href="#">Another action</a><a
                                        className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="c-chart-wrapper mt-3" style={{height: '70px'}}>
                                <canvas className="chart" id="card-chart3" height="70"></canvas>
                            </div>
                        </div>
                    </div>
                    {/* /.col*/}
                    <div className="col-sm-6 col-lg-3">
                        <div className="card mb-4 text-white bg-danger">
                            <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                                <div>
                                    <div className="fs-4 fw-semibold">44K <span className="fs-6 fw-normal">(-23.6%
                                        {/*<svg className="icon">
                          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-arrow-bottom"></use>
                        </svg>*/})</span></div>
                                    <div>Sessions</div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-transparent text-white p-0" type="button"
                                            data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {/*<svg className="icon">
                                            <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-options"></use>
                                        </svg>*/}
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item"
                                                                                        href="#">Action</a><a
                                        className="dropdown-item" href="#">Another action</a><a
                                        className="dropdown-item" href="#">Something else here</a></div>
                                </div>
                            </div>
                            <div className="c-chart-wrapper mt-3 mx-3" style={{height: '70px'}}>
                                <canvas className="chart" id="card-chart4" height="70"></canvas>
                            </div>
                        </div>
                    </div>
                    {/* /.col*/}
                </div>
                {/* /.row*/}
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h4 className="card-title mb-0">Traffic</h4>
                                <div className="small text-medium-emphasis">January - July 2022</div>
                            </div>
                            <div className="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                                <div className="btn-group btn-group-toggle mx-3" data-coreui-toggle="buttons">
                                    <input className="btn-check" id="option1" type="radio" name="options"
                                           autoComplete="off"/>
                                        <label className="btn btn-outline-secondary"> Day</label>
                                        <input className="btn-check" id="option2" type="radio" name="options"
                                               autoComplete="off" checked=""/>
                                            <label className="btn btn-outline-secondary active"> Month</label>
                                            <input className="btn-check" id="option3" type="radio" name="options"
                                                   autoComplete="off"/>
                                                <label className="btn btn-outline-secondary"> Year</label>
                                </div>
                                <button className="btn btn-primary" type="button">
                                    {/*<svg className="icon">
                                        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-cloud-download"></use>
                                    </svg>*/}
                                </button>
                            </div>
                        </div>
                        <div className="c-chart-wrapper" style={{height: '300px',marginTop: '40px'}}>
                            <canvas className="chart" id="main-chart" height="300"></canvas>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row row-cols-1 row-cols-md-5 text-center">
                            <div className="col mb-sm-2 mb-0">
                                <div className="text-medium-emphasis">Visits</div>
                                <div className="fw-semibold">29.703 Users (40%)</div>
                                <div className="progress progress-thin mt-2">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '40%'}}
                                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col mb-sm-2 mb-0">
                                <div className="text-medium-emphasis">Unique</div>
                                <div className="fw-semibold">24.093 Users (20%)</div>
                                <div className="progress progress-thin mt-2">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}}
                                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col mb-sm-2 mb-0">
                                <div className="text-medium-emphasis">Pageviews</div>
                                <div className="fw-semibold">78.706 Views (60%)</div>
                                <div className="progress progress-thin mt-2">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}}
                                         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col mb-sm-2 mb-0">
                                <div className="text-medium-emphasis">New Users</div>
                                <div className="fw-semibold">22.123 Users (80%)</div>
                                <div className="progress progress-thin mt-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}}
                                         aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col mb-sm-2 mb-0">
                                <div className="text-medium-emphasis">Bounce Rate</div>
                                <div className="fw-semibold">40.15%</div>
                                <div className="progress progress-thin mt-2">
                                    <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="40"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.card.mb-4*/}




            </div>
        </div>
        <footer className="footer">
            <div><a href="https://coreui.io">CoreUI </a><a href="https://coreui.io">Bootstrap Admin Template</a> © 2022
                creativeLabs.
            </div>
            <div className="ms-auto">Powered by&nbsp;<a href="https://coreui.io/docs/">CoreUI UI Components</a></div>
        </footer>
    </div>




    </>


    );

}

export default Dashboard;