# Vanilla JavaScript slider

This slider automatically switch slides every 10 seconds.

-----------------------------------------------------------------------------
## Usage

1. Create the main HTML file.
2. Create HMTL markup (you should replace `#` with your paths to images).

```html
<div class="box">
  <img src="#" class="slide" />
  <img src="#" class="slide" />
  <img src="#" class="slide" />
  <img src="#" class="slide" />
  <img src="#" class="slide" />
</div>
```

3. Include my JS file to your HTML just before the closing `</body>` tag.

```html
<script src="index.js"></script>
```

-----------------------------------------------------------------------------
## API

* **`check`** - watchs the slides.
* **`hideSlider`** - hides all slides.
* **`showSlides(n)`** - shows slide `n`.
* **`slidesButtons(n)`** - hides everything and shows one next slide.
* **`SetInterval`** - Timer, turn on function slidesButtons(n) every 10 seconds.
