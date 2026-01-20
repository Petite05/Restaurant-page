
export function contactFunction() {
    const leaflet_css = document.createElement('link');
    const leaflet_script = document.createElement('script');
    leaflet_css.rel = "stylesheet";
    leaflet_css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    leaflet_script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    leaflet_script.onload = ()=> {
        mapFunction();
    }
    document.head.appendChild(leaflet_css);
    document.head.appendChild(leaflet_script);
    const content = document.querySelector("#content");
    content.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('row', 'mt-5');

    function address() {
        const div_address = document.createElement('div');
        div_address.classList.add('col-sm-12', 'col-md-5', 'col-lg-6');
        div_address.id = "div-address";
        const contact_div = document.createElement('div');
        contact_div.classList.add('mb-3', 'w-100', 'ps-3');
        contact_div.id = "contact";
        const marquee = document.createElement('marquee');
        marquee.classList.add('text-primary');
        marquee.behavior = 'scrol';
        marquee.direction = 'left';
        const marqueeText = document.createElement('h1');
        marqueeText.innerHTML = "Our Contact";
        marquee.appendChild(marqueeText);
        contact_div.appendChild(marquee);
        function functionChat() {
            const detaildivflex = document.createElement('div');
            detaildivflex.classList.add('d-flex', 'p-1', 'border-bottom', 'chat-div');
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('me-3');
            iconDiv.textContent = '📩';
            detaildivflex.appendChild(iconDiv);
            contact_div.appendChild(detaildivflex);
            const iconDiv_div = document.createElement('div');
            const iconH3_header = document.createElement('h4');
            const iconP_text = document.createElement('p');
            const iconA_link = document.createElement('a');
            iconH3_header.textContent = "CHAT TO US";
            iconP_text.textContent = "Our friendly team is here to help.";
            iconA_link.innerHTML = "thedomjrestaurant.gmail.com";
            iconDiv_div.appendChild(iconH3_header);
            iconDiv_div.appendChild(iconP_text);
            iconDiv_div.appendChild(iconA_link);
            detaildivflex.appendChild(iconDiv_div);
            div_address.appendChild(contact_div);
            container.appendChild(div_address);
            content.appendChild(container);
        }
        functionChat();

        function functionAddress() {
            const detaildivflex2 = document.createElement('div');
            detaildivflex2.classList.add('d-flex', 'border-bottom', 'p-1', 'mb-3');
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('me-3');
            iconDiv.textContent = '🏠';
            detaildivflex2.appendChild(iconDiv);
            contact_div.appendChild(detaildivflex2);
            const iconDiv_div = document.createElement('div');
            const iconH1_header = document.createElement('h');
            const iconP_text = document.createElement('p');
            iconH1_header.textContent = "OFFICE";
            iconP_text.innerHTML = `Come say hello atour office HQ. 121 Rock Street. <br> 21 Avenue. Enugu. Ng.`;
            iconDiv_div.appendChild(iconH1_header);
            iconDiv_div.appendChild(iconP_text);
            detaildivflex2.appendChild(iconDiv_div);
            div_address.appendChild(contact_div);
            container.appendChild(div_address);
            content.appendChild(container);
        }
        functionAddress();

        function functionCall() {
            const detaildivflex2 = document.createElement('div');
            detaildivflex2.classList.add('d-flex', 'pb-2');
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('me-3');
            iconDiv.textContent = '📞';
            detaildivflex2.appendChild(iconDiv);
            contact_div.appendChild(detaildivflex2);
            const iconDiv_div = document.createElement('div');
            const iconH1_header = document.createElement('h3');
            const iconP_text = document.createElement('p');
            iconH1_header.textContent = "PHONE";
            iconP_text.innerHTML = `Mon-Fri from 9am to 6pm`;
            const iconA_link = document.createElement('a');
            iconA_link.innerHTML = "+234-701000001";
            iconDiv_div.appendChild(iconH1_header);
            iconDiv_div.appendChild(iconP_text);
            iconDiv_div.appendChild(iconA_link);
            detaildivflex2.appendChild(iconDiv_div);
            div_address.appendChild(contact_div);
            container.appendChild(div_address);
            content.appendChild(container);
        }
        functionCall();
    }
    address();

    function mapFunction() {
        const mapContainer = document.createElement('div');
        mapContainer.classList.add('col-sm-12', 'col-md-7', 'col-lg-6');
        const map_div = document.createElement('div');
        map_div.id = 'map';
        mapContainer.appendChild(map_div);
        container.appendChild(mapContainer);

        var map = L.map('map').setView([6.4483, 7.5139], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>', subdomains: 'abcd', maxZoom: 20
        }).addTo(map);
        L.marker([6.4483, 7.5139]).addTo(map).bindPopup('<b>THE DOMJ RESTAURANT').openPopup();
    }
}
