# Vanilla JavaScript slider

This slider automatically switch slides every 10 seconds.

-----------------------------------------------------------------------------
## Usage

1. Create the main HTML file.
2. Create HMTL markup (you should replace `#` with your paths to images).

```html
    <section>
      <button class="left_btn"></button>

      <div class="box">
          <img src="image/alessandro-viaro-94370-unsplash.jpg" alt="" class="slide">
          <img src="image/alexander-popov-342444-unsplash.jpg" alt="" class="slide">
          <img src="image/federico-beccari-756834-unsplash.jpg" alt="" class="slide">
          <img src="image/joe-desousa-327235-unsplash.jpg" alt="" class="slide">
      </div>
      
      <button class="right_btn"></button>

    </section>
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

* **` ivent 'click' on leftBtn `** - hides everything and shows one prev slide.
* **` ivent 'click' on rightBtn `** - hides everything and shows one next slide

