---
layout: page
title: Monocular Visual Odometry pipeline
# description: with background image
# img: assets/img/1.jpg
img: assets/projects/vo_pipeline/thumbnail.png
importance: 2
# category: work
# related_publications: true
# redirect: https://unsplash.com
---

**Monocular Visual Odometry pipeline** for urban driving scenarios. Implementation includes SIFT, Harris, Shi-Tomasi, and FAST feature detectors, KLT optical-flow tracker for feature tracking, Kalman filter for enhanced camera motion estimation. Tuned and tested on the **KITTI**, **Malaga**, and **Parking** datasets, and a custom dataset recorded on the **Polybahn** in Zürich. Screencasts of the VO pipeline running on all datasets can be found on [YouTube](https://www.youtube.com/playlist?list=PLiDPZti1iaQoReVg7OTpJDtQifOGpUsB2).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/vo_pipeline/vo_pipeline.gif" title="KITTI demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The VO pipeline running on the KITTI dataset, with the Kalman Filter activated.
</div>
