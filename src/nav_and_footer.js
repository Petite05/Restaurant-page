
import imageLogo from './asset/image/food2.jpg';
// import "../bootstrap-5.3.7-dist/css/bootstrap.css";
// import "../bootstrap-5.3.7-dist/js/bootstrap.bundle.js";

export function navigationFunction() {
    function bootstrap_links() {
        const minCss = document.createElement('link');
        const docCss = document.createElement('link');
        const scriptBundle = document.createElement('script');
        minCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css";
        minCss.rel = "stylesheet";
        document.head.appendChild(minCss);
    }
    bootstrap_links();


    let header = document.querySelector("header");
    const nav = document.createElement("nav");
    nav.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary')
    const container_div = document.createElement('div')
    container_div.classList.add('container-fluid');
    const logoLink = document.createElement('a')
    logoLink.classList.add('navbar-brand');
    logoLink.setAttribute('id', 'logo-link');
    const logoIcon = document.createElement('p');
    logoIcon.innerHTML = `
        <svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="2-Food equipment"><path d="M13 15a5.006 5.006 0 0 1-5-5V0h2v10a3 3 0 0 0 6 0V0h2v10a5.006 5.006 0 0 1-5 5z"/><path d="M12 0h2v24h-2z"/><path d="M15 48h-4a1 1 0 0 1-1-1V26a3 3 0 0 1 6 0v21a1 1 0 0 1-1 1zm-3-2h2V26a1 1 0 0 0-2 0zM26 48h-4a1 1 0 0 1-1-1V31a3 3 0 0 1 6 0v16a1 1 0 0 1-1 1zm-3-2h2V31a1 1 0 0 0-2 0z"/><path d="M26 29h-2v-3.4l-1.757-.94a5.807 5.807 0 0 1-3.129-6.26l2.75-16.656A2.082 2.082 0 0 1 26 2.082zM23.918 2a.082.082 0 0 0-.081.067l-2.757 16.7a3.787 3.787 0 0 0 2.107 4.133l.813.435V2.082A.082.082 0 0 0 23.918 2zM33 14h2v10h-2z"/><path d="M36 48h-4a1 1 0 0 1-1-1V26a3 3 0 0 1 6 0v21a1 1 0 0 1-1 1zm-3-2h2V26a1 1 0 0 0-2 0zM34 16c-3.309 0-6-3.589-6-8s2.691-8 6-8 6 3.589 6 8-2.691 8-6 8zm0-14c-2.168 0-4 2.748-4 6s1.832 6 4 6 4-2.748 4-6-1.832-6-4-6zM8 42H6a6.006 6.006 0 0 1-6-6V12a6.006 6.006 0 0 1 6-6v2a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h2zM42 42h-3v-2h3a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4V6a6.006 6.006 0 0 1 6 6v24a6.006 6.006 0 0 1-6 6z"/><path d="M8 38H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2v26h2zM42 38h-3v-2h3V10a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2zM18 36h4v2h-4zM18 40h4v2h-4zM26 36h3v2h-3zM26 40h3v2h-3z"/></g></svg>
    `;
    const logoName = document.createElement('p');
    logoName.classList.add('logo-name');
    logoName.textContent = 'THE DOMJ';
    const navbar_toggler = document.createElement('button');
    navbar_toggler.classList.add('navbar-toggler');
    navbar_toggler.setAttribute('type', 'button');
    navbar_toggler.setAttribute('data-bs-toggle', 'collapse');
    const navbar_toggler_attributions = {
        'data-bs-target': '#navbarNav',
        'aria-controls': 'navbarNav',
        'aria-expanded': 'false',
        'aria-label': 'Toggle navigation'
    };
    for (let key in navbar_toggler_attributions) {
        navbar_toggler.setAttribute(key, navbar_toggler_attributions[key]);
    }
    navbar_toggler.innerHTML = `<span class="navbar-toggler-icon"></span>`;
    const navContainer = document.createElement("div");
    navContainer.classList.add('collapse', 'navbar-collapse', 'justify-content-end');
    navContainer.id = "navbarNav";
    const navbar_nav = document.createElement('div');
    navbar_nav.classList.add('navbar-nav');
    navbar_nav.id = "btn-group";
    logoLink.appendChild(logoIcon);
    logoLink.appendChild(logoName);
    container_div.appendChild(logoLink);
    container_div.appendChild(navbar_toggler);

    function home_btnFunction() {
        let navItemDiv = document.createElement('div');
        navItemDiv.classList.add("nav-item");
        const home_btn = document.createElement('button');
        home_btn.classList.add('btn', 'btn-outline-primary', 'btn-lg', 'focus-ring', 'home', 'nav_link');
        const homeBtn_attributions = {
            'type': 'button',
            'aria-current': 'page'
        }
        for (let key in homeBtn_attributions) {
            home_btn.setAttribute(key, homeBtn_attributions[key]);
        }
        home_btn.textContent = "Home";
        navItemDiv.appendChild(home_btn);
        navbar_nav.appendChild(navItemDiv);
        navContainer.appendChild(navbar_nav);
        container_div.appendChild(navContainer);
        nav.appendChild(container_div);
        header.appendChild(nav);
    }
    home_btnFunction();

    function menu_btnFunction() {
        let navItemDiv2 = document.createElement('div');
        navItemDiv2.classList.add("nav-item");
        const home_btn2 = document.createElement('button');
        home_btn2.classList.add('btn', 'btn-outline-primary', 'btn-lg', 'focus-ring', 'menu', 'nav_link');
        const menuBtn_attributions = {
            'type': 'button',
            'aria-current': 'page'
        }
        for (let key in menuBtn_attributions) {
            home_btn2.setAttribute(key, menuBtn_attributions[key]);
        }
        home_btn2.textContent = "Menu";
        navItemDiv2.appendChild(home_btn2);
        navbar_nav.appendChild(navItemDiv2);
        navContainer.appendChild(navbar_nav);
        container_div.appendChild(navContainer);
        nav.appendChild(container_div);
        header.appendChild(nav);
    }
    menu_btnFunction();

    function contact_btnFunction() {
        let navItemDiv3 = document.createElement('div');
        navItemDiv3.classList.add("nav-item");
        const home_btn3 = document.createElement('button');
        home_btn3.classList.add('btn', 'btn-outline-primary', 'btn-lg', 'focus-ring', 'contact', 'nav_link');
        const contactBtn_attributions = {
            'type': 'button',
            'aria-current': 'page'
        }
        for (let key in contactBtn_attributions) {
            home_btn3.setAttribute(key, contactBtn_attributions[key]);
        }
        home_btn3.textContent = "Contact";
        navItemDiv3.appendChild(home_btn3);
        navbar_nav.appendChild(navItemDiv3);
        navContainer.appendChild(navbar_nav);
        container_div.appendChild(navContainer);
        nav.appendChild(container_div);
        header.appendChild(nav);
    }
    contact_btnFunction();
}
navigationFunction();

function footerFunction() {
    const footer = document.querySelector("footer");
    const footer_div = document.createElement("div");
    footer_div.innerHTML = "@ 2026 The DOMJ Restaurant";
    footer.append(footer_div);
}
footerFunction();
