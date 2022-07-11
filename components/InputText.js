
export default function InputText({ label, name }) {
  return (
    <div style={{ flex: 1 }}>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} />
    </div>
  );
}