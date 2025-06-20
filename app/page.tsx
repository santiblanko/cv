import AuthWrapper from "../auth-wrapper"
import SalaryJustificationReport from "../salary-justification-report"

export default function Page() {
  return (
    <AuthWrapper>
      <SalaryJustificationReport />
    </AuthWrapper>
  )
}
