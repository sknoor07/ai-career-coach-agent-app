import React from "react";
import AiTools from "./_components/AiTools";
import WelcomeBanner from "./_components/welcomebanner";

export default function page() {
    return <div className="mt-6 ms-6 me-6">
        <WelcomeBanner />
        <AiTools />
    </div>;
}