export class BaseIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `      
           <style>
            .size-6 {
                width: 1.5rem;
                height: 1.5rem;
            }
           </style>
        `;
    }
}

export class MenuIcon extends BaseIcon{
    constructor() {
        super();

        this.shadowRoot.innerHTML += `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        `;

    }
}

