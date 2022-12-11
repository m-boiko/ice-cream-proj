(() => {
    const refs = {
        openHeroBtn1: document.querySelector("[hero1-modal-open]"),
        openHeroBtn2: document.querySelector("[hero2-modal-open]"),
        closeHeroBtn: document.querySelector("[hero-modal-close]"),
        modalHero: document.querySelector("[hero-modal]"),


        openProductBtn1: document.querySelector("[product1-modal-open]"),
        openProductBtn2: document.querySelector("[product2-modal-open]"),
        openProductBtn3: document.querySelector("[product3-modal-open]"),      
        closeProductBtn: document.querySelector("[product-modal-close]"),
        modalProduct: document.querySelector("[product-modal]"),

        openReadBtn: document.querySelector("[read-modal-open]"),
        closeReadBtn: document.querySelector("[read-modal-close]"),
        modalRead: document.querySelector("[read-modal]"),

        openLocationBtn: document.querySelector("[location-modal-open]"),
        closeLocationBtn: document.querySelector("[location-modal-close]"),
        modalLocation: document.querySelector("[location-modal]"),

        openFranchiseBtn: document.querySelector("[franchise-modal-open]"),
        closeFranchiseBtn: document.querySelector("[franchise-modal-close]"),
        modalFranchise: document.querySelector("[franchise-modal]"),

    };

    refs.openHeroBtn1.addEventListener("click", toggleHeroModal);
    refs.openHeroBtn2.addEventListener("click", toggleHeroModal);
    refs.closeHeroBtn.addEventListener("click", toggleHeroModal);

    refs.openProductBtn1.addEventListener("click", toggleProductModal);
    refs.openProductBtn2.addEventListener("click", toggleProductModal);
    refs.openProductBtn3.addEventListener("click", toggleProductModal);
    refs.closeProductBtn.addEventListener("click", toggleProductModal);

    refs.openReadBtn.addEventListener("click", toggleReadModal);
    refs.closeReadBtn.addEventListener("click", toggleReadModal);

    refs.openLocationBtn.addEventListener("click", toggleLocationModal);
    refs.closeLocationBtn.addEventListener("click", toggleLocationModal);
    
    refs.openFranchiseBtn.addEventListener("click", toggleFranchiseModal);
    refs.closeFranchiseBtn.addEventListener("click", toggleFranchiseModal);

    function toggleHeroModal() {
        refs.modalHero.classList.toggle("is-hidden");
    };

    function toggleProductModal() {
        refs.modalProduct.classList.toggle("is-hidden");
    };

    function toggleReadModal() {
        refs.modalRead.classList.toggle("is-hidden");
    };

    function toggleLocationModal() {
        refs.modalLocation.classList.toggle("is-hidden");
    };

    function toggleFranchiseModal() {
        refs.modalFranchise.classList.toggle("is-hidden");
    };
}
    
)();