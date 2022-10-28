document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      //Vient empêcher que le formulaire refresh la page
      event.preventDefault();
      console.log("Soumission du Formulaire");

      //1 Récupérer les différentes éléments du formulaire
      //   console.log(document.getElementById("firstname").value);
      //   console.log(document.getElementById("lastname").value);
      //   console.log(document.getElementById("email").value);
      //   console.log(document.getElementById("message").value);

      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      //2 Envoyer à un serveur les informations du formulaire
      const response = await fetch(
        "https://site--backend-form--tlbdn9cmqsf2.code.run/send-email",
        config
      );
      console.log(response.data);
      alert("Merci de votre réponse !");
    });
});
