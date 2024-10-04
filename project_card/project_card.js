function createProjectCard(project) {
    project.siteLink =
    project.githubLink = undefined;
    const style = document.createElement('style');
    style.textContent = `
        #project-box {
            user-select: none;
            background: #31313F;
            border-radius: 8px;
        }

        #project-box img {
            width: 270px;
            height: 130px;
            display: flex;
            margin: 0 auto;
            padding: 5vh 0px 0px 0px ;
        }
        
        #project-box h4 {
            padding: 0 0px 0px 2vw;
        }
        
        #project-box p {
            display: flex;
            justify-content: center;
            padding: 0 2vw 0px 2vw;
        }
        
        #btn-container {
            display: flex;
            justify-content: center;
        }
        
        #project-box:hover {
            background: #181824;
            border-radius: 8px;
        }
        
        #btn-container a {
            margin: 0 1vw;
            padding: 1vh 2vw;
            border-radius: 8px;
            text-decoration: none;
        }
        
        #btn-container a:hover {
            background: #7562E0;
        }
        
    `;


    document.head.appendChild(style);

    // html de la card
    const card_proj = document.createElement('div');
    card_proj.id = 'project-box';

    // image
    const image = document.createElement('img');
    image.src = project.imageUrl;
    image.alt = 'image_project';

    // title h4
    const title = document.createElement('h4');
    title.textContent = project.title;
    title.classList.add('color-purple', 'fts-22', 'txt-center');

    // description p
    const description = document.createElement('p');
    description.textContent = project.description;
    description.classList.add('fts-18', 'color-white', 'txt-center');

    // btn container
    const btnContainer = document.createElement('div');
    btnContainer.id = 'btn-container';

    // site link TODO a fix pour que ca pop dynamiquement
    if (project.siteLink) {
        const siteLink = document.createElement('a');
        siteLink.href = project.siteLink;
        siteLink.textContent = 'Site';
        siteLink.classList.add('color-white', 'bg-purple', 'fts-18');
        btnContainer.appendChild(siteLink);
    }

    if (project.githubLink) {
        const githubLink = document.createElement('a');
        githubLink.href = project.githubLink;
        githubLink.textContent = 'Github';
        githubLink.classList.add('color-white', 'bg-purple', 'fts-18');
        btnContainer.appendChild(githubLink);
    }

    card_proj.appendChild(image);
    card_proj.appendChild(title);
    card_proj.appendChild(description);
    card_proj.appendChild(btnContainer);


    return card_proj;
}
