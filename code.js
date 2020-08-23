window.onload = function () { // Run this once the page has loaded.
    // search
    document.querySelector("#searchButton").addEventListener("click", searchGithub);
    function searchGithub() {
        const url = "https://api.github.com/search/users?q=";
        const searchUserText = document.querySelector("#searchUser").value;

        // Obtain a list of users from the Github API that match searchUserText
        //  The final result will contain an array under the key 'items'
        // Pass this array to `renderUserList`
    }
    window.onload = function () {
    const BASE_URL = "https://api.github.com/search/users?q=";
    fetch(BASE_URL + "searchUserText")
    .then((response) => response.json())
    .then((result) => renderUserList(result));

    function renderUserList(githubUsers) {
            let html = "";
        html += "<ul>";
        for (let i = 0; i < githubUsers.length; i++) {
            let githubUser = githubUsers[i];
            html += "<li>";
            html += `<strong>${githubUser.login}</strong>`;
            html += `<a target="_blank" href="${githubUser.html_url}">`;
            html += "</li>";
        }
        html += "</ul>";

        document.querySelector("#resultsContainer").innerHTML = html;
    }
}
