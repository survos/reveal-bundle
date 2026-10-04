# Survos Reveal Bundle

A thin Stimulus wrapper around Reveal.js 6.0.2+, using kit-bundle's `AbstractUxBundle` defaults.

## Installation

```bash
composer require survos/reveal-bundle
```

Flex registers `Survos\RevealBundle\SurvosRevealBundle`, the `@survos/reveal-bundle`
UX package, and its importmap dependencies. There is no `ASSET_PACKAGE` override.
The derived controller identifier is `survos--reveal-bundle--reveal`.
Use the kit helper in Twig rather than hard-coding that identifier:

```twig
<div class="reveal" {{ stimulus_controller(survos_stimulus('reveal-bundle', 'reveal'), {
    options: {embedded: true, transition: 'none', navigationMode: 'default'}
}) }}>
    <div class="slides">
        {% for issue in issues %}
            <section data-start-indexv="0">
                {% for page in issue.pages %}
                    <section><img data-src="{{ page.url }}" alt="{{ page.label }}"></section>
                {% endfor %}
            </section>
        {% endfor %}
    </div>
</div>
```

Give embedded decks a CSS height. Each outer section is a horizontal slide stack;
inner sections are vertical pages. `data-start-indexv="0"` returns to the first page
when moving horizontally, including revisiting a stack.

`options` accepts JSON-serializable Reveal configuration and overrides the wrapper's
defaults. The controller emits Stimulus `ready` (detail: `deck`) and `error` (detail:
`error`) events and destroys the deck on disconnect. Slides are supplied as HTML;
there is no endpoint fetcher or JSON slide schema.

The black theme is auto-imported by default. Applications providing their own theme
can disable `reveal.js/dist/theme/black.css` in `assets/controllers.json`.
