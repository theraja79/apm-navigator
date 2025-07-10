export function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <h2>Navigation</h2>
        <details open>
          <summary>RTP Forms & Procedures</summary>
          <ul>
            <li><a href="https://academics.fresnostate.edu/facultyaffairs/procedures/facultyrtp/index.html" target="_blank" rel="noopener noreferrer">RTP Process Home</a></li>
            <li><a href="https://academics.fresnostate.edu/facultyaffairs/procedures/facultyrtp/calendar.html" target="_blank" rel="noopener noreferrer">RTP Calendar</a></li>
            <li><a href="https://academics.fresnostate.edu/facultyaffairs/procedures/facultyrtp/checklist.html" target="_blank" rel="noopener noreferrer">RTP Checklist</a></li>
          </ul>
        </details>
        <details>
          <summary>Departmental RTP Policies (P³ Documents)</summary>
          <ul>
            <li><a href="https://academics.fresnostate.edu/facultyaffairs/policies/dept-policies.html" target="_blank" rel="noopener noreferrer">View P³ Index</a></li>
          </ul>
        </details>
        <details>
          <summary>700 Series / CSU Policies</summary>
          <ul>
            <li><a href="https://www.calstate.edu/csu-system/faculty-staff/labor-and-employee-relations/Pages/default.aspx" target="_blank" rel="noopener noreferrer">CFA/CSU Collective Bargaining</a></li>
            <li><a href="https://calstate.policystat.com/" target="_blank" rel="noopener noreferrer">CSU PolicyStat Portal</a></li>
            <li><a href="https://calstate.policystat.com/policy/11030468/latest/" target="_blank" rel="noopener noreferrer">Leave of Absence Policy</a></li>
            <li><a href="https://calstate.policystat.com/policy/10899725/latest/" target="_blank" rel="noopener noreferrer">Sabbatical Guidelines</a></li>
            <li><a href="https://csyou.calstate.edu/Policies/HRPolicies/TL-EMP2021-04.pdf#search=HR%202021%2D04" target="_blank" rel="noopener noreferrer">HR Policy TL-EMP2021-04 (login req)</a></li>
          </ul>
        </details>
      </nav>
    </aside>
  );
}
