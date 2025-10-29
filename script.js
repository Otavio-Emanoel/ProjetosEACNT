const projects = [
    {
        title: "Pontos Turísticos em Peruíbe",
        description: "Um estudo sobre os principais pontos turísticos da cidade de Peruíbe, destacando sua importância cultural e ambiental.",
        link: "https://otavio-emanoel.github.io/PeruibePontosTuristicos/",
        tags: ["Turismo", "Cultura"],
        team: "Grupo do Otavio "
    },
    {
        title: "Energy Saving",
        description: "Site que ajuda os usuários a monitorar e reduzir o consumo de energia em suas residências, promovendo práticas sustentáveis.",
        link: "https://evy8882.github.io/Energy-Saving/",
        tags: ["Tecnologia", "Meio Ambiente"],
        team: "Grupo do Everton"
    },
    {
        title: "Lixos Eletrônicos",
        description: "Projeto de conscientização sobre o descarte correto de lixos eletrônicos, incluindo pontos de coleta e informações sobre reciclagem.",
        link: "https://example.com/lixos-eletronicos",
        tags: ["IoT", "Alimentação"],
        team: "Grupo do Mauricio"
    },
    {
        title: "Horta na Escola",
        description: "Projeto que implementa hortas comunitárias em escolas públicas, incentivando a educação ambiental e a alimentação saudável entre os estudantes.",
        link: "https://example.com/horta-na-escola",
        tags: ["Educação", "AR/VR"],
        team: "Grupo do Gabriel"
    }
];

const listElement = document.getElementById("lista-projetos");
const statTotal = document.getElementById("stat-total");
const statTags = document.getElementById("stat-tags");

const renderProjects = () => {
    if (!listElement) {
        return;
    }

    const uniqueTags = new Set();
    listElement.innerHTML = "";

    projects.forEach((project) => {
        project.tags.forEach((tag) => uniqueTags.add(tag));

        const article = document.createElement("article");
        article.className = "project-card";
        article.setAttribute("role", "listitem");

        article.innerHTML = `
            <header>
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description}</p>
            </header>
            <div class="project-card__meta">
                ${project.team ? `<span class="project-card__tag">Equipe: ${project.team}</span>` : ""}
                ${project.tags.map((tag) => `<span class="project-card__tag">${tag}</span>`).join("")}
            </div>
            <a class="project-card__link" href="${project.link}" target="_blank" rel="noopener noreferrer">
                Acessar projeto
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M13 5H19V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5 19L19 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </a>
        `;

        listElement.appendChild(article);
    });

    if (statTotal) {
        statTotal.textContent = projects.length.toString();
    }

    if (statTags) {
        statTags.textContent = uniqueTags.size.toString();
    }
};

document.addEventListener("DOMContentLoaded", renderProjects);
