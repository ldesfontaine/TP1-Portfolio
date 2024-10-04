function createCard(competence) {
    const style = document.createElement('style');
    style.textContent = `
        #box {
            user-select: none;
            width: 341px;
            height: 338px;
            border: 3px solid #7562E0;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #box img {
            padding-top: 2vh;
            width: 20%;
            height: 20%;
            border-radius: 16px;
            display: block;
            margin: 0 auto;
        }
        
        #box h3 {
            margin: 20px 0;
            color: #7562E0;
        }

        #titre {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
        }

        #description {
            text-align: center;
            font-size: 1rem;
            color: white;
            margin: 0 20px;
        }

        #box:hover {
            border: 3px solid white;
            border-radius: 16px;
            transform: scale(1.1);
            transition: all 0.6s ease-in-out;
            cursor: pointer;
        }

        @media screen and (max-width: 600px) {
            #box {
                width: 100%;
            }
        }
    `;

    // add link css dans le head
    document.head.appendChild(style);

    // html de la card
    const card = document.createElement('div');
    card.id = 'box';

    const img = document.createElement('img');
    img.src = competence.img;
    img.alt = competence.title;

    const title = document.createElement('h3');
    title.id = 'titre';
    title.textContent = competence.title;

    const description = document.createElement('p');
    description.id = 'description';
    description.textContent = competence.description;

    // build de la card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}
