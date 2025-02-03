const ContactMe = () => {
  return (
    <div>
      <section>
        <h2>Lets talk</h2>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <br />
          <label htmlFor="phone-number">Phone Number</label>
          <input type="number" />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" />
          <br />
          <label htmlFor="message">Drop me a message</label>
          <textarea name="message" id="message"></textarea>
        </form>
      </section>
    </div>
  );
}

export default ContactMe