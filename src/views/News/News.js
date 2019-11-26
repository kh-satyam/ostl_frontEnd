import React from "react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

const News = () => {
    const dashboardRoutes = [];
    return (
        <div
            style={{
                position: "fixed",
                top: "20%",
                left: "40%",
                maxWidth: "500px",
                textAlign: "center"
            }}
        >
            <Card>
                <CardHeader color="warning">No NEWS</CardHeader>
                <CardBody>There is no NEWS available at current Time.</CardBody>
            </Card>
        </div>
    );
};

export default News;
