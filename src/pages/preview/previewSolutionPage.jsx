import React from "react";
import CardComponent from "~/components/Preview/Card";
import HousingFundLoan from "~/components/Preview/HousingFundLoan";
import PersonComponent from "~/components/Preview/Person";
import SmallBusiness from "~/components/Preview/SmallBusiness";
import MonthlyRental from "~/components/Preview/MonthlyRental";
import PendingAndIRP from "~/components/Preview/PendingAndIRP";

export default function PreviewSolutionPage() {
  return (
    <>
      <div>previewSolutionPage</div>
      <CardComponent />
      <PersonComponent />
      <MonthlyRental />
      <HousingFundLoan />
      <SmallBusiness />
      <PendingAndIRP />
    </>
  );
}
