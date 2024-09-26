
    let app = document.querySelector("body");

    const websiteHeader =()=>{
        let header = document.createElement('header');
        let navbar = document.createElement('nav');
        let navleft = document.createElement('div');
        let navRight = document.createElement('ul');

        navleft.innerHTML = "LOGO";
        navRight.innerHTML = `
        <li> Work</li>
        <li> About</li>
        <li> Blog</li>`;

        navbar.style.height = '80px';
        navbar.style.width = '100%';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.display = 'flex';
        navbar.style.justifyContent = 'space-between';
        navbar.style.alignItems = 'center';
        navbar.style.padding = '10px 40px';
        app.style.color = "#fff";
        navbar.style.fontSize = '16px';

        navRight.style.display = 'flex';
        navRight.style.gap = '30px';
        navRight.style.paddingRight = '50px';
        navRight.style.cursor = 'pointer';
        navbar.style.position = 'absolute';
        navbar.style.top = '0';
        navbar.style.zIndex = '10';
        
        navbar.appendChild(navleft);
        navbar.appendChild(navRight);
        header.appendChild(navbar);
        app.append(header);

    }

    const websiteBody =()=>{
        let main = document.createElement('main');
        let heroBanner = document.createElement('div');
        let heroInfo = document.createElement('div');
        let heroSub = document.createElement('p');
        let heroTitle = document.createElement('h1');
        let heroPar = document.createElement('p');
        heroBanner.style.minHeight = '100vh';
        heroBanner.style.width = '100%';
        heroBanner.style.backgroundImage = "url('/bg.png')";
        heroBanner.style.backgroundSize = 'cover';
        // heroBanner.style.backgroundPosition = 'center';
        heroBanner.style.position = 'absolute';
        heroBanner.style.top = '0';

        heroInfo.style.width = '60%';

        heroSub.innerHTML = 'Linus Kigai';
        heroTitle.style.marginTop = '20px';
        heroTitle.innerHTML = `Bringing <br>Concept to Life`
        heroPar.style.marginTop = '10px';
        heroPar.innerText = 'Lörem ipsum ditijybel beras fassade. Prel munira. Transperson bere då heterovalens. Kiling intraktig. Plasm ång refunde krobåling.';
        heroPar.style.width = '60%';

        heroSub.style.fontsize = '24px';
        heroSub.style.fontWeight = '600';
        heroPar.style.fontSize = '18px';

        heroTitle.style.fontSize = '60px';
        heroTitle.style.fontWeight = '800';
        // heroTitle.style.width = '70%';

        // heroInfo.style.marginTop = '100px';
        heroInfo.style.marginLeft = '80px';
        heroBanner.style.display = 'flex';
        heroBanner.style.alignItems = 'center';


        heroInfo.appendChild(heroSub);
        heroInfo.appendChild(heroTitle);
        heroInfo.appendChild(heroPar);

        heroBanner.append(heroInfo);
        main.append(heroBanner);
        app.append(main);

    }

    document.addEventListener("DOMContentLoaded",()=>{
        websiteHeader();
        websiteBody();

    })