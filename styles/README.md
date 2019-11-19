## HELPER CLASSES

You have the following classes at your disposal

- paddings: horizontal, vertical, left-only and right-only (10px, 15px, 20px, 25px or 30px)
- margins: horizontal, vertical, left-only and right-only (10px to 100px counting by tens)
- text color: text-color-[color name] using the color variables in styleguide.scss

---

## VARIABLES

COLORS
Every color in our color palette has a variable so you can easily use the color without trying to remember the hex code.
Remember, if you are setting a text color, you can use the helper class inline rather than creating a new style.

TYPOGRAPHY
The typography is also pre-established in styleguide.scss to correlate with our design system

---

## MAIN.SCSS

This will be your main.scss file that'll subside into your css file. Any additional .scss files you create can be imported into this one.

---

## USE

Before you start...

1. In your styles folder (where your .scss files should be) create a "main.css" file.

2. Open terminal and navigate to your styles folder.

3. write
   sass --watch main.scss main.css

4. Now your .css file is watching your .scss file for changes. It'll consolidate your .scss code for you and turn it into .css that browsers can read.
