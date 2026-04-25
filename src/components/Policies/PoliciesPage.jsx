import { useEffect, useState } from "react"
import PolicyLayout from "./PolicyLayout"
import { useParams } from "react-router-dom"

export default function PoliciesPage({ setScrollContainer }) {
    const { policytype } = useParams()
    const [policies, setPolicies] = useState([])
    const [activePolicy, setActivePolicy] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([
            import('./privacyPolicy.json'),
            import('./refundPolicy.json'),
            import('./cancellationPolicy.json'),
            import('./termsAndConditions.json'),
            import('./companyRulesGuidelines.json'),
            import('./taxInformationCompliances.json'),
            import('./KYCMandates.json'),
        ]).then(([privacy, refund, cancel, terms, rules, tax, kyc]) => {
            const all = [
                privacy.default,
                refund.default,
                cancel.default,
                terms.default,
                rules.default,
                tax.default,
                kyc.default,
            ]
            setPolicies(all)
            setActivePolicy(all.find(e => e?.key === policytype))
            setLoading(false)
        })
    }, [])


    useEffect(() => {
        if (policies.length === 0) return
        setLoading(true)
        setActivePolicy(policies.find(e => e?.key === policytype))
        setLoading(false)
    }, [policytype, policies])

    if (loading) return (
        <div className="font-semibold text-xl text-center my-20">
            Loading policy...
        </div>
    )

    return (
        <PolicyLayout
            policies={policies}
            activePolicy={activePolicy}
            setScrollContainer={setScrollContainer}
        />
    )
}