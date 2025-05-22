---
layout: page
title: Trajectory Optimization for Quadrupedal Robot
# description: with background image
# img: assets/img/1.jpg
img: assets/projects/trajopt_mujoco/thumbnail.png
importance: 1
# category: work
# related_publications: true
# redirect: https://unsplash.com
---

This project implemented a **trajectory optimization** algorithm for a quadruped robot with 8 degrees of freedom (DOF), including 4 legs with 2 DOF each (only thigh and knee joints, no hip / abduction joint). The goal is to transfer various hand-designed / heuristic / kinematic trajectories into optimized trajectories that satisfy the simplified dynamics model with constraints, and to eventually transfer to **physics-based simulation** in **MuJoCo**. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/trajopt_mujoco/trot.gif" title="trotting" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/trajopt_mujoco/backflip.gif" title="360_backflip" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
