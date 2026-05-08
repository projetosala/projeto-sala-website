---
layout: page
title: História do Projeto
description: Contexto, missão e objetivos do Projeto S.A.L.A
body_class: page-history
show_chevron: false
---
{% include section_header.html title="Nossa trajetória" description=site.data.home_page_content.intro %}

{% include section_header.html title="Como seguimos" description="O Projeto S.A.L.A continua articulando educação, ludicidade e pertencimento ao território. A proposta é aproximar estudantes e educadores de temas ambientais por meio de experiências que transformam conteúdos em participação, reflexão e descoberta." %}

<section class="goals-box">
  <div class="goals-box__content">
    <h2 class="goals-box__title">Objetivos permanentes</h2>
    <ul class="goals-box__list">
      {% for goal in site.data.project.project_page_content.goals %}
        <li>{{ goal }}</li>
      {% endfor %}
    </ul>
  </div>
</section>
