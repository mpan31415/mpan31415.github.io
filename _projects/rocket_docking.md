---
layout: page
title: Rocket docking maneuver
# description: with background image
img: assets/projects/rocket_docking/thumbnail.png
importance: 1
# category: work
# related_publications: true
# redirect: https://unsplash.com
---

**Rocket docking maneuver** with collision avoidance. Trajectory generation and optimization using **Sequential Convex Programming**. Implementation follows the paper, [Convex Optimization for Trajectory Generation](https://arxiv.org/pdf/2106.09125).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/rocket_docking/rocket_docking.gif" title="rocket docking example" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of a generated trajectory which docks the rocket while avoiding all static and dynamic obstacles.
</div>
