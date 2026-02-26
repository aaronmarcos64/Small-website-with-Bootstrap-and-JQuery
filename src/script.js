$('#searchBtn').click(function() {
    var busca = $('#username').val();

    if (busca == "") return;

    $('#rows').empty();
    $('#repoTbl').addClass('d-none');


    $.get("https://api.github.com/users/" + busca + "/repos", function(lista) {
        $('#repoTbl').removeClass('d-none');

        lista.forEach(function (item) {
            var name = item.name;
            var txt = item.description || "Empty";
            var pts = item.stargazers_count;

            var html = "<tr>";
            html += "  <td>" + name + "</td>";
            html += "  <td>" + txt + "</td>";
            html += "  <td>" + pts + "</td>";
            html += "</tr>";

            $('#rows').append(html);
        })
    })
})