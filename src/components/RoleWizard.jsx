export function RoleWizard() {
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <section className="role-wizard">
      <h2>Policy Pathfinder</h2>
      <label htmlFor="role">Select your role:</label>
      <select
        id="role"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="">-- Not sure what role fits? --</option>
        {Object.keys(roleBundles).map((role) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      {selectedRole && (
        <div className="role-resources">
          <h3>Recommended Policies for {selectedRole}</h3>
          <ul>
            {roleBundles[selectedRole].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
