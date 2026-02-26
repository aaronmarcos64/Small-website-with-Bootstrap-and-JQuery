$(document).ready(function () {

    $("#searchBtn").click(function () {
        const username = $("#username").val().trim();
        $.ajax({
            url: `https://api.github.com/users/${username}/repos`,
            method: "GET",
            function (repos) {
                $("#loading").addClass("d-none");
                repos.forEach(repo => {
                    const row = `
                        <tr>
                            <td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>
                            <td>${repo.description || "No description"}</td>
                            <td>${repo.stargazers_count}</td>
                        </tr>
                    `;
                    $("#repoTbl tbody").append(row);
                });

                $("#repoTbl").removeClass("d-none");
            },

        });
    });
});