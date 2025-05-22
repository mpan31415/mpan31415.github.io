---
layout: page
title: Deep RL for Motion Imitation
# description: with background image
# img: assets/img/1.jpg
img: assets/projects/deepmimic/thumbnail.png
importance: 1
# category: work
# related_publications: true
# redirect: https://unsplash.com
---

This project uses **deep reinforcement learning** to train a control policy for a physically simulated humanoid character. The character is simulated using the **Isaac Gym** physics engine. The goal is to train the character to imitate a reference motion, similar to **DeepMimic**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/deepmimic/walk.gif" title="walk" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/deepmimic/cartwheel.gif" title="cartwheel" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
