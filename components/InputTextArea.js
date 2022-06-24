
export default function InputTextArea({ label, name }) {
  return (
    <div style={{ flex: 1 }}>
      <label for={name}>{label}</label>
      <textarea name={name} />
    </div>
  );
}