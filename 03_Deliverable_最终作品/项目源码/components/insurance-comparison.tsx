const rows = [
  ["Motor liability", "Included", "Included", "Included"],
  ["Theft, glass & weather", "—", "Included", "Included"],
  ["Accidental own damage", "—", "—", "Included"],
  ["Battery & high-voltage system", "Essential", "Enhanced", "Extended"],
  ["Charging cable & wallbox events", "—", "Optional", "Included"],
  ["Roadside assistance", "Optional", "Included", "Included"],
  ["European travel support", "Essential", "Enhanced", "Extended"],
  ["New vehicle protection", "—", "Optional", "Included"],
  ["Driver protection", "—", "Optional", "Included"],
] as const;

export function InsuranceComparison() {
  return (
    <div className="comparison-wrap">
      <table className="comparison-table">
        <caption>Illustrative cover comparison. Final benefits and exclusions are defined in Allianz policy documents.</caption>
        <thead><tr><th scope="col">Cover area</th><th scope="col">Basis</th><th scope="col">Komfort <span>Recommended</span></th><th scope="col">Premium</th></tr></thead>
        <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={`${row[0]}-${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

