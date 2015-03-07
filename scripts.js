
function showContent() {
    // Get the email address from the form
    var email = document.getElementsByTagName("input")[0].value;

    // If the user entered an email
    if (email) {
        // Hide the form
        document.getElementById('membersForm').className = 'hidden';
        // Show the hidden content
        document.getElementById('membersText').className = 'show';
    }

    // Return "false" to indicate you're finished
    return false;
}
