function validateForm() {
    let buyer = document.forms["home-pg"]["buyer"].value;

    document.forms["home-pg"]["buyer"].value = buyer.trim();
    if (buyer.trim() === "") {
        alert("Name is required")
        return false;
    }

    return true;
}