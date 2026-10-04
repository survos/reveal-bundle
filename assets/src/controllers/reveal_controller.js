import { Controller } from '@hotwired/stimulus';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import RevealHighlight from 'reveal.js/plugin/highlight';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static values = {
        options: { type: Object, default: {} },
    };

    deck = null;

    async connect() {
        const deck = new Reveal(this.element, {
            hash: true,
            plugins: [RevealHighlight],
            transition: 'slide',
            controls: true,
            progress: true,
            ...this.optionsValue,
        });
        this.deck = deck;
        try {
            await deck.initialize();
            if (this.deck !== deck) return;
            this.dispatch('ready', { detail: { deck } });
        } catch (error) {
            if (this.deck !== deck) return;
            this.dispatch('error', { detail: { error } });
            console.error('Unable to initialize Reveal', error);
        }
    }

    disconnect() {
        this.deck?.destroy();
        this.deck = null;
    }
}
