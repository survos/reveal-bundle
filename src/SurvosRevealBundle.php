<?php

namespace Survos\RevealBundle;

use Survos\CoreBundle\Bundle\AssetMapperBundle;
use Symfony\Component\Config\Definition\Configurator\DefinitionConfigurator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
class SurvosRevealBundle extends AssetMapperBundle
{
    public const ASSET_PACKAGE = 'reveal';

    /**
     * @param array<mixed> $config
     */
    public function loadExtension(array $config, ContainerConfigurator $container, ContainerBuilder $builder): void
    {
        // $builder->setParameter('survos_workflow.direction', $config['direction']);
    }

    public function configure(DefinitionConfigurator $definition): void
    {
        $definition->rootNode()
            ->children()
            ->booleanNode('enabled')->defaultTrue()->end()
            ->end();
    }
}
