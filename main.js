fetch("https://gh-pinned-repos.egoist.sh/?username=gltile-two-electric-boogaloo").then((response) => {
    return response.json()
}).then((data) => {
    // hi bs2k :)
    // i did not sanitize anything because why would I XSS myself
    data.forEach((repository) => {
        const template = `
            <div class="repository-container">
                <div class="repository-container-content">
                    <div class=repository-container-first">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="repository-container-icon">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <a class="repository-container-url" href="https://github.com/${repository['owner']}/${repository['repo']}">${repository['repo']}</a>
                        </div>
                        <p class="repository-container-second">
                            ${repository['description'] || "(no description)"}
                        </p>
                        <div class="repository-container-third">
                        <span class="repository-container-language">
                            <span class="repository-container-language-color" style="background-color: ${repository['languageColor']}"></span>
                            <span class="repository-container-language-text">${repository['language']}</span>
                        </span>
                    </div>
                </div>
            </div>
        `
        document.getElementById("repo-div").innerHTML += template
    })
}).catch(() => {})