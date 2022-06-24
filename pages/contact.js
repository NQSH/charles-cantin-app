
export default function Contact({}) {
  return (
    <div style={{ flex: 1 }}>
      <h1>Contact</h1>
      <form name="contact" method="POST" data-netlify="true" action="/contact?status=success">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>Your Name: <input type="text" name="name" /></label>
        </div>
        <div>
          <label>Your Email: <input type="email" name="email" /></label>
        </div>
        <div>
          <label>Message: <textarea name="message"></textarea></label>
        </div>
        <div>
          <button type="submit">ENVOYER</button>
        </div>
      </form>
    </div>
  );
}