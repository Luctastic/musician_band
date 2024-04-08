<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* musician_category.html.twig */
class __TwigTemplate_204b2f27d5d3afc15da5e361cba202fc21dd9e3e6456911d9202d9d7d6383ed0 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'javascripts' => [$this, 'block_javascripts'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "musician_category.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "musician_category.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "musician_category.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 4
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "

    ";
        // line 6
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("musician");
        echo "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 9
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 10
        echo "    <div class=\"js-musician\"
         data-route=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("musician_listing", ["start" => 0, "limit" => 100]), "html", null, true);
        echo "\"
         data-route-detail=\"";
        // line 12
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("musician_detail", ["id" => 0]);
        echo "\"
    ></div>

    <div class=\"grid-container\">
        <div class=\"grid-item-category\">
            <h1 class=\"title\">Musiker - Management</h1>
        </div>
        <div class=\"grid-item-category\">
            <div class=\"inner-grid-container-options\">
                <div class=\"grid-item-category-options\">
                    ";
        // line 22
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 22, $this->source); })()), 'form');
        echo "
                </div>
                <div class=\"grid-item-category-options\">
                    <a id=\"create-musician\" class=\"create-musician\" href=\"";
        // line 25
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("musician_create");
        echo "\">Erstellen</a>
                    <a style=\"display: none; visibility: hidden\" id=\"modify-musician\" class=\"modify-musician\">Bearbeiten</a>
                </div>
            </div>
        </div>
        <div class=\"grid-item-category\">

            <div id=\"inner-category-listing\" class=\"inner-grid-container\">
                <div class=\"inner-grid-item\">
                    <h1 class=\"inner-title\">Künstlername</h1>
                </div>
                <div class=\"inner-grid-item\">
                    <h1 class=\"inner-title\">Nachname</h1>
                </div>
                <div class=\"inner-grid-item\">
                </div>
            </div>

        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "musician_category.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  123 => 25,  117 => 22,  104 => 12,  100 => 11,  97 => 10,  87 => 9,  75 => 6,  69 => 4,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends \"base.html.twig\" %}

{% block javascripts %}
    {{ parent() }}

    {{ encore_entry_script_tags('musician') }}
{% endblock %}

{% block body %}
    <div class=\"js-musician\"
         data-route=\"{{ path('musician_listing', {'start': 0, 'limit': 100}) }}\"
         data-route-detail=\"{{ path('musician_detail', {'id': 0}) }}\"
    ></div>

    <div class=\"grid-container\">
        <div class=\"grid-item-category\">
            <h1 class=\"title\">Musiker - Management</h1>
        </div>
        <div class=\"grid-item-category\">
            <div class=\"inner-grid-container-options\">
                <div class=\"grid-item-category-options\">
                    {{ form(form) }}
                </div>
                <div class=\"grid-item-category-options\">
                    <a id=\"create-musician\" class=\"create-musician\" href=\"{{ path('musician_create') }}\">Erstellen</a>
                    <a style=\"display: none; visibility: hidden\" id=\"modify-musician\" class=\"modify-musician\">Bearbeiten</a>
                </div>
            </div>
        </div>
        <div class=\"grid-item-category\">

            <div id=\"inner-category-listing\" class=\"inner-grid-container\">
                <div class=\"inner-grid-item\">
                    <h1 class=\"inner-title\">Künstlername</h1>
                </div>
                <div class=\"inner-grid-item\">
                    <h1 class=\"inner-title\">Nachname</h1>
                </div>
                <div class=\"inner-grid-item\">
                </div>
            </div>

        </div>
    </div>
{% endblock %}", "musician_category.html.twig", "C:\\xampp\\htdocs\\musician_band\\templates\\musician_category.html.twig");
    }
}
