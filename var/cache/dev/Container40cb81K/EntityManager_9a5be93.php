<?php

namespace Container40cb81K;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'src'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder98a20 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerd0b32 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties7a35f = [
        
    ];

    public function getConnection()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getConnection', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getMetadataFactory', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getExpressionBuilder', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'beginTransaction', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getCache', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getCache();
    }

    public function transactional($func)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'transactional', array('func' => $func), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'wrapInTransaction', array('func' => $func), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'commit', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->commit();
    }

    public function rollback()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'rollback', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getClassMetadata', array('className' => $className), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'createQuery', array('dql' => $dql), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'createNamedQuery', array('name' => $name), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'createQueryBuilder', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'flush', array('entity' => $entity), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'clear', array('entityName' => $entityName), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->clear($entityName);
    }

    public function close()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'close', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->close();
    }

    public function persist($entity)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'persist', array('entity' => $entity), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'remove', array('entity' => $entity), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'refresh', array('entity' => $entity), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'detach', array('entity' => $entity), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'merge', array('entity' => $entity), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getRepository', array('entityName' => $entityName), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'contains', array('entity' => $entity), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getEventManager', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getConfiguration', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'isOpen', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getUnitOfWork', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getProxyFactory', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'initializeObject', array('obj' => $obj), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'getFilters', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'isFiltersStateClean', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'hasFilters', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return $this->valueHolder98a20->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerd0b32 = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config)
    {
        static $reflection;

        if (! $this->valueHolder98a20) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder98a20 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder98a20->__construct($conn, $config);
    }

    public function & __get($name)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, '__get', ['name' => $name], $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        if (isset(self::$publicProperties7a35f[$name])) {
            return $this->valueHolder98a20->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder98a20;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder98a20;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder98a20;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder98a20;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, '__isset', array('name' => $name), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder98a20;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder98a20;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, '__unset', array('name' => $name), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder98a20;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder98a20;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, '__clone', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        $this->valueHolder98a20 = clone $this->valueHolder98a20;
    }

    public function __sleep()
    {
        $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, '__sleep', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;

        return array('valueHolder98a20');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerd0b32 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerd0b32;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerd0b32 && ($this->initializerd0b32->__invoke($valueHolder98a20, $this, 'initializeProxy', array(), $this->initializerd0b32) || 1) && $this->valueHolder98a20 = $valueHolder98a20;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder98a20;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder98a20;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
