document.addEventListener('DOMContentLoaded', () => {
    const competences = [
        {
            img: '../assets/Image/git.png',
            title: 'Version Controller',
            description: 'J’utilise des outils tels que Git pour versionner mes projets' +
                ' et pour faciliter le travail en équipe.'
        },
        {
            img: '../assets/Image/dev.png',
            title: 'WEB DEVELOPMENT',
            description: 'Je créer des interfaces avec différents langages comme le HTML, PHP,' +
                'CSS, JS mais aussi avec des framework comme Laravel, Angular ...'
        },
        {
            img: '../assets/Image/dev.png',
            title: 'APP DEVELOPEMENT',
            description: 'Je créer également des applications, avec différents langages ' +
                'comme Python, Java .'
        },
        {
            img: '../assets/Image/dev.png',
            title: 'Gérer le patrimoine informatique',
            description: 'Versioning des projets via git, documentation, wiki, gestion des licences'
        },
        {
            img: '../assets/Image/dev.png',
            title: 'Travailler en mode projet',
            description: 'Gitlab , Scrum (agile), Trello, Github'
        },
        {
            img: '../assets/Image/dev.png',
            title: 'Développer la présence en ligne de l’organisation',
            description: 'Océan Hackaton (APID), création d’un model LSTM '
        },
        {
            img: '../assets/Image/dev.png',
            title: 'Répondre aux incidents et demandes d’assistances et d’évolution',
            description: 'Issue gitlab, github'
        },
        {
            img: '../assets/Image/dev.png',
            title: 'Organiser son développement professionnel',
            description: 'Projet pro, mise en place d’un environnement d’apprentissage'
        },
        {
            img: '../assets/Image/dev.png',
            title: 'Mettre a disposition des utilisateurs un service informatique',
            description: 'Création de documentation wiki & mise en place d’un serveur, garage, borabora'
        },
    ];

    const competencesSection = document.getElementById('competences');

    competences.forEach(competence => {
        const card = createCard(competence);
        competencesSection.appendChild(card);
    });
});


document.addEventListener('DOMContentLoaded', () => {
        const projects = [
            {
                imageUrl: '../assets/Image/portfolio.png',
                title: 'Portfolio',
                description: 'Il s’agit du portfolio que vous êtes en train de consulter.' +
                    ' Il a été réalisé avec le framework Angular',
                site_link: 'https://portfolio.ldesfontaine.me/',
                github_link: 'https://github.com/ldesfontaine/Portfolio_',
            },
            {
                imageUrl: '../assets/Image/location.png',
                title: 'Projet location de voiture',
                description: 'Il s’agit d’un site de location de voiture.' +
                    ' Il a été réalisé avec le framework Laravel',
                site_link: 'https://garage.ldesfontaine.me/',
                github_link: 'https://github.com/ldesfontaine/location',
            },
            {
                imageUrl: '../assets/Image/borabora.png',
                title: 'Borabora',
                description: 'Il s’agit d’un un site de gestion d\'hotel',
                site_link: 'https://borabora.ldesfontaine.me/',
                github_link: 'https://github.com/ldesfontaine/borabora',
            },
            {
                imageUrl: '../assets/Image/bash_script.png',
                title: 'Lamp & WP Installer',
                description: 'Il s’agit d’un script en bash' +
                    ' facilitant l\'installation d\'un environement LAMP & WP',
                github_link: 'https://github.com/ldesfontaine/lamp_installer_wp',
            },
            {
                imageUrl: 'assets/Image/documentation.jpg',
                title: 'Documentations',
                description: 'Il s’agit d’un repository contenant toutes mes documentations',
                github_link: 'https://github.com/ldesfontaine/Documentation',
            },
            {
                imageUrl: '../assets/Image/crunchytrack.png',
                title: 'CrunchyTrack',
                description: 'Il s’agit d’une extension chrome',
                github_link: 'https://github.com/ldesfontaine/CrunchyTrack',
            },
        ];

        const projectsSection = document.getElementById('projets-row');

        projects.forEach(project => {
                const card = createProjectCard(project);
                projectsSection.appendChild(card);
            }
        );
    }
);

// --------------------------------------------------------------------------------

const date = new Date();
document.getElementById("date-copy").textContent = date.getFullYear();

// --------------------------------------------------------------------------------

// LE SCROLLER SMOOTH EST UNE LIBRAIRIE EXTERNE
if(!Util) function Util () {};

Util.scrollTo = function(final, duration, cb, scrollEl) {
    var element = scrollEl || window;
    var start = element.scrollTop || document.documentElement.scrollTop,
        currentTime = null;

    if(!scrollEl) start = window.scrollY || document.documentElement.scrollTop;

    var animateScroll = function(timestamp){
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        if(progress > duration) progress = duration;
        var val = Math.easeInOutQuad(progress, start, final-start, duration);
        element.scrollTo(0, val);
        if(progress < duration) {
            window.requestAnimationFrame(animateScroll);
        } else {
            cb && cb();
        }
    };

    window.requestAnimationFrame(animateScroll);
};

Util.moveFocus = function (element) {
    if( !element ) element = document.getElementsByTagName('body')[0];
    element.focus();
    if (document.activeElement !== element) {
        element.setAttribute('tabindex','-1');
        element.focus();
    }
};


Util.cssSupports = function(property, value) {
    return CSS.supports(property, value);
};

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

(function() {
    var SmoothScroll = function(element) {
        if(!('CSS' in window) || !CSS.supports('color', 'var(--color-var)')) return;
        this.element = element;
        this.scrollDuration = parseInt(this.element.getAttribute('data-duration')) || 300;
        this.dataElementY = this.element.getAttribute('data-scrollable-element-y') || this.element.getAttribute('data-scrollable-element') || this.element.getAttribute('data-element');
        this.scrollElementY = this.dataElementY ? document.querySelector(this.dataElementY) : window;
        this.dataElementX = this.element.getAttribute('data-scrollable-element-x');
        this.scrollElementX = this.dataElementY ? document.querySelector(this.dataElementX) : window;
        this.initScroll();
    };

    SmoothScroll.prototype.initScroll = function() {
        var self = this;

        //detect click on link
        this.element.addEventListener('click', function(event){
            event.preventDefault();
            var targetId = event.target.closest('.js-smooth-scroll').getAttribute('href').replace('#', ''),
                target = document.getElementById(targetId),
                targetTabIndex = target.getAttribute('tabindex'),
                windowScrollTop = self.scrollElementY.scrollTop || document.documentElement.scrollTop;

            // scroll vertically
            if(!self.dataElementY) windowScrollTop = window.scrollY || document.documentElement.scrollTop;

            var scrollElementY = self.dataElementY ? self.scrollElementY : false;

            var fixedHeight = self.getFixedElementHeight(); // check if there's a fixed element on the page
            Util.scrollTo(target.getBoundingClientRect().top + windowScrollTop - fixedHeight, self.scrollDuration, function() {
                // scroll horizontally
                self.scrollHorizontally(target, fixedHeight);
                //move the focus to the target element - don't break keyboard navigation
                Util.moveFocus(target);
                history.pushState(false, false, '#'+targetId);
                self.resetTarget(target, targetTabIndex);
            }, scrollElementY);
        });
    };

    SmoothScroll.prototype.scrollHorizontally = function(target, delta) {
        var scrollEl = this.dataElementX ? this.scrollElementX : false;
        var windowScrollLeft = this.scrollElementX ? this.scrollElementX.scrollLeft : document.documentElement.scrollLeft;
        var final = target.getBoundingClientRect().left + windowScrollLeft - delta,
            duration = this.scrollDuration;

        var element = scrollEl || window;
        var start = element.scrollLeft || document.documentElement.scrollLeft,
            currentTime = null;

        if(!scrollEl) start = window.scrollX || document.documentElement.scrollLeft;
        // return if there's no need to scroll
        if(Math.abs(start - final) < 5) return;

        var animateScroll = function(timestamp){
            if (!currentTime) currentTime = timestamp;
            var progress = timestamp - currentTime;
            if(progress > duration) progress = duration;
            var val = Math.easeInOutQuad(progress, start, final-start, duration);
            element.scrollTo({
                left: val,
            });
            if(progress < duration) {
                window.requestAnimationFrame(animateScroll);
            }
        };

        window.requestAnimationFrame(animateScroll);
    };

    SmoothScroll.prototype.resetTarget = function(target, tabindex) {
        if( parseInt(target.getAttribute('tabindex')) < 0) {
            target.style.outline = 'none';
            !tabindex && target.removeAttribute('tabindex');
        }
    };

    SmoothScroll.prototype.getFixedElementHeight = function() {
        var scrollElementY = this.dataElementY ? this.scrollElementY : document.documentElement;
        var fixedElementDelta = parseInt(getComputedStyle(scrollElementY).getPropertyValue('scroll-padding'));
        if(isNaN(fixedElementDelta) ) { // scroll-padding not supported
            fixedElementDelta = 0;
            var fixedElement = document.querySelector(this.element.getAttribute('data-fixed-element'));
            if(fixedElement) fixedElementDelta = parseInt(fixedElement.getBoundingClientRect().height);
        }
        return fixedElementDelta;
    };

    //initialize the Smooth Scroll objects
    var smoothScrollLinks = document.getElementsByClassName('js-smooth-scroll');
    if( smoothScrollLinks.length > 0 && !Util.cssSupports('scroll-behavior', 'smooth') && window.requestAnimationFrame) {
        // you need javascript only if css scroll-behavior is not supported
        for( var i = 0; i < smoothScrollLinks.length; i++) {
            (function(i){new SmoothScroll(smoothScrollLinks[i]);})(i);
        }
    }
}());
