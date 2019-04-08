<h1>Vanilla JavaScript slider</h1>

This slider automatically switch slides every 10 seconds.

-----------------------------------------------------------------------------
<h2>Usage</h2>

1. Create main html file
2. Create html markup(# - replaced by your path to pictures)
    ```
     <div class="box">
            <img src="#" class="slide">
            <img src="#" class="slide">
            <img src="#" class="slide">
            <img src="#" class="slide">
            <img src="#" class="slide">
        </div>
    ```
3. Connect my js file in your html file in the footer
    ```
        <script src="index.js"></script>
    ```

-----------------------------------------------------------------------------
<h2>Information on functions</h2>

* check - this function watching the slides
* hideSlider - this function hide all slides
* showSlides(n) - this function show slide n (n - number slides)
* slidesButtons(n) - this function hides everything and shows one next slide

* SetInterval - Timer, him turn on function slidesButtons(n) every 10 seconds