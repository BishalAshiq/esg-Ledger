"use client";
import React, {useState} from "react";
import DashNav from "@/component/Navbar/dashNav";
import ViewAllItems from "@/component/DashboardAll/ViewAllItems";
import IssuDetails from "@/component/DashboardAll/IssuDetails";
import ViewAllItemsData from "@/component/DashboardAll/ViewAllItemsData";
import Navbar from "@/component/DashboardAll/Navbar";

const page = () => {
    const [activeDiv, setActiveDiv] = useState(1);
    const handleTextClick = (divId) => {
        setActiveDiv(divId);
    };
    return (
        <div className="w-100 ">
            <DashNav />
            <div className="">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="dddssa" />

                        <Navbar activeDiv={1} />
                    </div>

                    <div className="col-12 col-md-10">
                        {activeDiv === 1 && (
                            <div>
                                <div className="">
                                    <IssuDetails />
                                </div>
                            </div>
                        )}

                        {activeDiv === 2 && (
                            <div>
                                <div className="">
                                    <ViewAllItemsData />
                                </div>
                            </div>
                        )}

                        {activeDiv === 3 && (
                            <div>
                                <div className="">
                                    <ViewAllItems />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="dashboard-footer-div">
                    <div className="dashboard-footer">
                        <p className="dashboard-footer-text">
                            © 2023 OneChain Ltd. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
