<?php

declare(strict_types=1);

namespace Survos\RevealBundle;

use Survos\Kit\AbstractUxBundle;
use Symfony\Component\Config\Definition\Configurator\DefinitionConfigurator;

// Symfony\Component\HttpKernel\Bundle\Bundle <-- Flex auto-registration marker (see Survos\Kit\AbstractSurvosBundle)
final class SurvosRevealBundle extends AbstractUxBundle
{
    public function configure(DefinitionConfigurator $definition): void
    {
        $definition->rootNode()
            ->children()
                ->booleanNode('enabled')->defaultTrue()->end()
            ->end();
    }
}
