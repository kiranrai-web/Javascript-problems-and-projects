class specialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
         <header class="p-30">
        <nav class="flex full-area justify-between">
            <div class="nav-left pointer">
                LOGO
            </div>
            <div class="nav-right flex">
                <div class="nav-right-menu">
                    <ul class="flex">
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/about.html">About Us</a></li>
                        <li><a href="/portfolio.html">Portfolio</a></li>
                        <li><a href="/news.html">News</a></li>
                    </ul>
                </div>
                <div class="nav-right-btn">
                   <a href="/contact.html"> <button class="contact-us-btn pointer">Contact Us</button></a>
                </div>
            </div>
            <div class="hamburger pointer">
                <img src="images/hamburger.svg">
            </div>
        </nav>
    </header>`
    }
}

class specialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer>
        <div class="footer-container p-40">
            <div class="footer-col col-1">
                <h1 class="sub-heading">LOGO</h1>
                <p class="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p class="paragraph">@LOGO</p>
            </div>
            <div class="footer-col col-2">
                <p class="footer-about">About us</p>
                <ul class="m-top-20 footer-about-list">
                    <li>Zeux</li>
                    <li>Portfolio</li>
                    <li>Carrers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="footer-col col-3">
                <p class="footer-about">Contact Us</p>
                <p class="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p class="paragraph">+908 89097 890</p>
            </div>
            <div class="footer-col col-4">
                <img class="pointer" src="images/fb.png">
                <img class="pointer" src="images/link.png">
                <img class="pointer" src="images/x.png">
                <img class="pointer" src="images/insta.png">
            </div>
        </div>
        <div class="seperator">

        </div>
        <div class="copyright">
            Copyright ® 2022 prodesigner All rights Rcerved
            <p class="paragraph"></p>
        </div>
    </footer>`
    }
}

customElements.define('special-header', specialHeader);
customElements.define('special-footer', specialFooter);