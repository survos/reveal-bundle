import { Controller } from '@hotwired/stimulus';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
// import 'reveal.js/dist/theme/black.css'; // or your preferred theme

// For code highlighting
// import 'reveal.js/plugin/highlight/monokai.css'; // or your preferred style
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static values = {
        theme: String,
    }

    deck = null;

    connect() {
        console.log("Initializing Reveal from " + this.identifier);

        this.deck = new Reveal(this.element, {
            hash: true,
            plugins: [ RevealHighlight ],
            // Optional: customize behavior
            transition: 'slide',
            controls: true,
            progress: true,
        });

        this.deck.initialize();
    }

    disconnect() {
        if (this.deck) {
            this.deck.destroy();
        }
    }
}
