import React from 'react'
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-10  md:bottom-0 md:w-64 py-18 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-18 md:flex-no-wrap px-0  items-center justify-between w-full mx-auto">

                    {/* <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-5 pb-4 no-underline">
                        HR Full Stack
                    </h6> */}
                    {/* Navigation */}

                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                            <Link
                                className={
                                    "text-xs uppercase py-3 font-bold block "
                                }
                                to="/hr/dashboard/"
                            >
                                <i
                                    className={
                                        "fas fa-tv mr-2 text-sm "
                                    }
                                ></i>{" "}
                                Dashboard
                            </Link>
                        </li>
                        <li className="items-center">
                            <Link
                                className={
                                    "text-xs uppercase py-3 font-bold block "
                                }
                                to="/hr/regions/"
                            >
                                <i
                                    className={
                                        "fas fa-tv mr-2 text-sm "
                                    }
                                ></i>{" "}
                                Regions
                            </Link>
                            <Link
                                className={
                                    "text-xs uppercase py-3 font-bold block "
                                }
                                to="/hr/countries/"
                            >
                                <i
                                    className={
                                        "fas fa-tv mr-2 text-sm "
                                    }
                                ></i>{" "}
                                Countries
                            </Link>
                            <Link
                                className={
                                    "text-xs uppercase py-3 font-bold block "
                                }
                                to="/hr/employees/"
                            >
                                <i
                                    className={
                                        "fas fa-tv mr-2 text-sm "
                                    }
                                ></i>{" "}
                                Employees
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}