
function confirmerPresence() {
    // Récupérer les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const presence = document.getElementById('confirmation').value;
    

    // Valider les données (vous pouvez ajouter des validations plus avancées)
    if (nom && prenom) {
        // Envoyer les données à Email.js
        emailjs.send("service_wa92oeh", "template_q7q14fa", {
            nom: nom,
            prenom: prenom,
            confirmation: presence,
        })
        .then(function(response) {
            // Afficher un message de confirmation à l'utilisateur
            alert('Confirmation envoyée avec succès !');

            // Vous pouvez également rediriger l'utilisateur ou effectuer d'autres actions nécessaires
        }, function(error) {
            console.error('Erreur lors de la confirmation:', error);
        });
    } else {
        alert('Veuillez remplir tous les champs du formulaire.');
    }
}
    // Sélectionnez le formulaire
    const formulaire = document.querySelector('form');

    // Ajoutez un gestionnaire d'événements pour l'événement de soumission du formulaire
    formulaire.addEventListener('submit', function(event) {
        // Empêcher le comportement par défaut du formulaire (envoi traditionnel)
        event.preventDefault();

        // Appeler la fonction de confirmation
        confirmerPresence();
    });

