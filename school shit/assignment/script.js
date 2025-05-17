function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("thanks-message").textContent = "Thanks for reaching out!";
    event.target.reset();
    return false;
  }