import { useEffect, useState } from "react";
import PolicyLayout from "./PolicyLayout";
import privacyPolicy from "./privacyPolicy.json"
import refundPolicy from "./refundPolicy.json"
import cancellationPolicy from "./cancellationPolicy.json"
import termAndConditions from "./termsAndConditions.json"
import companyRulesGuidelines from "./companyRulesGuidelines.json"
import taxInformationCompliances from "./taxInformationCompliances.json"
import KYCMandates from "./KYCMandates.json"
import { useParams } from "react-router-dom";

const policies = [privacyPolicy, refundPolicy, cancellationPolicy, termAndConditions, companyRulesGuidelines, taxInformationCompliances, KYCMandates];

export default function PoliciesPage() {
  const { policytype } = useParams()
  const [activePolicy, setActivePolicy] = useState()

  useEffect(() => {

    setActivePolicy(policies.find((e) => e?.key === policytype))
  }, [policytype])





  return (
    <PolicyLayout
      policies={policies}
      activePolicy={activePolicy}
    />
  );
}
