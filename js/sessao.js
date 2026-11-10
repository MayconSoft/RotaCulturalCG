// Controle de sessão (demonstração, só front-end).
//  - Administrador logado: esconde o botão "Entrar" do menu.
//  - Usuário comum logado: esconde "Entrar" e mostra a foto de perfil no canto do cabeçalho.
(function () {
    function ler(chave) {
        try { return sessionStorage.getItem(chave) === "true"; } catch (e) { return false; }
    }

    var admin = ler("adminLogado");
    var usuario = ler("usuarioLogado");
    if (!admin && !usuario) return;

    document.querySelectorAll('nav a[href="login.html"]').forEach(function (a) {
        a.style.display = "none";
    });

    if (!usuario) return;

    var cabecalho = document.querySelector("header");
    if (!cabecalho) return;

    var perfil = document.createElement("div");
    perfil.className = "perfil-usuario";
    perfil.innerHTML =
        '<img src="img/perfil.svg" alt="Foto de perfil do usuário" class="foto-perfil">' +
        '<a href="login.html" id="sair-usuario">Sair</a>';
    cabecalho.appendChild(perfil);

    document.getElementById("sair-usuario").addEventListener("click", function () {
        try { sessionStorage.removeItem("usuarioLogado"); } catch (e) {}
    });
})();
