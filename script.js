 function searchProduct() {
    const searchTerm = document.getElementById('search').value.trim().toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    if (!searchTerm) {
        alert('Veuillez entrer un terme de recherche.');
        return;
    }

    let found = false;

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productDescription = card.querySelector('p').textContent.toLowerCase();

        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!found) {
        alert('Aucun produit ne correspond à votre recherche.');
    }
}
 document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const products = document.querySelectorAll(".product-card"); // Sélection des cartes de produits
    const totalProducts = products.length;

    // Définir la vitesse du défilement
    const scrollSpeed = 1; // Ajustez cette valeur pour contrôler la vitesse du défilement

    // Fonction de défilement automatique
    function autoSlide() {
        // Vérifier si on a atteint la fin
        if (sliderContainer.scrollLeft >= sliderContainer.scrollWidth - sliderContainer.clientWidth) {
            // Si on est à la fin, remettre au début
            sliderContainer.scrollLeft = 0;
        } else {
            // Faire défiler progressivement à droite
            sliderContainer.scrollLeft += scrollSpeed;
        }

        requestAnimationFrame(autoSlide); // Continuer le défilement
    }

    // Démarrer le défilement automatique
    autoSlide();
});
