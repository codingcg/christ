document.addEventListener('keydown', function(event) {
  // on I go back to higher layer
    if(event.keyCode == 73) { 
        window.location.href = "../../../math.html";
    }
    
});

function toggle(id) {

  /*let classes = document.getElementsByClassName("floating-box");

  for(c in classes) {
    c.style.display = "none";
  }*/

  let el = document.getElementById(id);
  el.style.display = (el.style.display == "block") ? "none" : "block";
}



Reveal.initialize({

  // Display presentation control arrows
  controls: true,

  // Help the user learn the controls by providing hints, for example by
  // bouncing the down arrow when they first encounter a vertical slide
  controlsTutorial: true,

  // Determines where controls appear, "edges" or "bottom-right"
  controlsLayout: 'bottom-right',

  // Visibility rule for backwards navigation arrows; "faded", "hidden"
  // or "visible"
  controlsBackArrows: 'faded',

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  // - true:    Show slide number
  // - false:   Hide slide number
  //
  // Can optionally be set as a string that specifies the number formatting:
  // - "h.v":   Horizontal . vertical slide number (default)
  // - "h/v":   Horizontal / vertical slide number
  // - "c":   Flattened slide number
  // - "c/t":   Flattened slide number / total slides
  //
  // Alternatively, you can provide a function that returns the slide
  // number for the current slide. The function should take in a slide
  // object and return an array with one string [slideNumber] or
  // three strings [n1,delimiter,n2]. See #formatSlideNumber().
  slideNumber: false,

  // Can be used to limit the contexts in which the slide number appears
  // - "all":      Always show the slide number
  // - "print":    Only when printing to PDF
  // - "speaker":  Only in the speaker view
  showSlideNumber: 'all',

  // Use 1 based indexing for # links to match slide number (default is zero
  // based)
  hashOneBasedIndex: false,

  // Add the current slide number to the URL hash so that reloading the
  // page/copying the URL will return you to the same slide
  hash: false,

  // Flags if we should monitor the hash and change slides accordingly
  respondToHashChanges: true,

  // Enable support for jump-to-slide navigation shortcuts
  jumpToSlide: true,

  // Push each slide change to the browser history.  Implies `hash: true`
  history: false,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Optional function that blocks keyboard events when retuning false
  //
  // If you set this to 'focused', we will only capture keyboard events
  // for embedded decks when they are in focus
  keyboardCondition: null,

  // Disables the default reveal.js slide layout (scaling and centering)
  // so that you can use custom CSS layout
  disableLayout: false,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: true,

  // Enables touch navigation on devices with touch input
  touch: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Changes the behavior of our navigation directions.
  //
  // "default"
  // Left/right arrow keys step between horizontal slides, up/down
  // arrow keys step between vertical slides. Space key steps through
  // all slides (both horizontal and vertical).
  //
  // "linear"
  // Removes the up/down arrows. Left/right arrows step through all
  // slides (both horizontal and vertical).
  //
  // "grid"
  // When this is enabled, stepping left/right from a vertical stack
  // to an adjacent vertical stack will land you at the same vertical
  // index.
  //
  // Consider a deck with six slides ordered in two vertical stacks:
  // 1.1    2.1
  // 1.2    2.2
  // 1.3    2.3
  //
  // If you're on slide 1.3 and navigate right, you will normally move
  // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
  // from 1.3 -> 2.3.
  navigationMode: 'default',

  // Randomizes the order of slides each time the presentation loads
  shuffle: false,

  // Turns fragments on and off globally
  fragments: true,

  // Flags whether to include the current fragment in the URL,
  // so that reloading brings you to the same fragment position
  fragmentInURL: true,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,

  // Flags if we should show a help overlay when the question-mark
  // key is pressed
  help: true,

  // Flags if it should be possible to pause the presentation (blackout)
  pause: true,

  // Flags if speaker notes should be visible to all viewers
  showNotes: false,

  // Global override for autolaying embedded media (video/audio/iframe)
  // - null:   Media will only autoplay if data-autoplay is present
  // - true:   All media will autoplay, regardless of individual setting
  // - false:  No media will autoplay, regardless of individual setting
  autoPlayMedia: null,

  // Global override for preloading lazy-loaded iframes
  // - null:   Iframes with data-src AND data-preload will be loaded when within
  //           the viewDistance, iframes with only data-src will be loaded when visible
  // - true:   All iframes with data-src will be loaded when within the viewDistance
  // - false:  All iframes with data-src will be loaded only when visible
  preloadIframes: null,

  // Can be used to globally disable auto-animation
  autoAnimate: true,

  // Optionally provide a custom element matcher that will be
  // used to dictate which elements we can animate between.
  autoAnimateMatcher: null,

  // Default settings for our auto-animate transitions, can be
  // overridden per-slide or per-element via data arguments
  autoAnimateEasing: 'ease',
  autoAnimateDuration: 1.0,
  autoAnimateUnmatched: true,

  // CSS properties that can be auto-animated. Position & scale
  // is matched separately so there's no need to include styles
  // like top/right/bottom/left, width/height or margin.
  autoAnimateStyles: [
    'opacity',
    'color',
    'background-color',
    'padding',
    'font-size',
    'line-height',
    'letter-spacing',
    'border-width',
    'border-color',
    'border-radius',
    'outline',
    'outline-offset'
  ],

  // Controls automatic progression to the next slide
  // - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
  //           is present on the current slide or fragment
  // - 1+:     All slides will progress automatically at the given interval
  // - false:  No auto-sliding, even if data-autoslide is present
  autoSlide: 0,

  // Stop auto-sliding after user input
  autoSlideStoppable: true,

  // Use this method for navigation when auto-sliding (defaults to navigateNext)
  autoSlideMethod: null,

  // Specify the average time in seconds that you think you will spend
  // presenting each slide. This is used to show a pacing timer in the
  // speaker view
  defaultTiming: null,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // Opens links in an iframe preview overlay
  // Add `data-preview-link` and `data-preview-link="false"` to customise each link
  // individually
  previewLinks: false,

  // Exposes the reveal.js API through window.postMessage
  postMessage: true,

  // Dispatches all reveal.js events to the parent window through postMessage
  postMessageEvents: false,

  // Focuses body when page changes visibility to ensure keyboard shortcuts work
  focusBodyOnPageVisibilityChange: true,

  // Transition style
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Transition speed
  transitionSpeed: 'default', // default/fast/slow

  // Transition style for full page slide backgrounds
  backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

  // The maximum number of pages a single slide can expand onto when printing
  // to PDF, unlimited by default
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

  // Prints each fragment on a separate slide
  pdfSeparateFragments: true,

  // Offset used to reduce the height of content within exported PDF pages.
  // This exists to account for environment differences based on how you
  // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
  // on precisely the total height of the document whereas in-browser
  // printing has to end one pixel before.
  pdfPageHeightOffset: -1,

  // Number of slides away from the current that are visible
  viewDistance: 3,

  // Number of slides away from the current that are visible on mobile
  // devices. It is advisable to set this to a lower number than
  // viewDistance in order to save resources.
  mobileViewDistance: 2,

  // The display mode that will be used to show slides
  display: 'block',

  // Hide cursor if inactive
  hideInactiveCursor: true,

  // Time before the cursor is hidden (in ms)
  hideCursorTime: 5000

});



var header_content = `
<!doctype html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="description" content="My Copy Monkey">
    <meta name="author" content="Vera Christ">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../../../Reveal/dist/reveal.css">
    <link rel="stylesheet" href="../../../Reveal/dist/theme/sky.css" id="theme">
    <link rel="stylesheet" href="../../../Reveal/plugin/highlight/monokai.css">
    <link rel="stylesheet" href="../../../Reveal/dist/reset.css">
    <link rel="stylesheet" href="../../../Reveal/plugin/customcontrols/style.css">
    <link rel="stylesheet" href="../../../Reveal/plugin/chalkboard/style.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js-plugins/menu/font-awesome/css/fontawesome.css">

    <link rel="stylesheet" href="../../../Reveal/plugin/poll/style.css">
    <link rel="stylesheet" href="../../../Reveal/plugin/questions/style.css">


    <link rel="stylesheet" href="../../../slides.css" type="text/css" media="screen" />
  </head>
  
`;



var first = `
<section data-background-size="contain" data-background="../../general/tree.png">
      </section>
`

var questions = `
Welche Fragen habt ihr noch? <br>
<img width="200" data-src="../../../general_img/question.png">
<br>
`

var summary = `
<blockquote style="display: inline-block;">
  <br>
    Was habt ihr gemacht? 
  <br>
  <img width="70" data-src="../../../general_img/learned.png">

  <br>
  <p style="color: red">
    Erkentnisse? 
  </p>
  <img width="70" data-src="../../../general_img/learned.png">

  <br>
    Was merkt ihr euch?
  <br><br>
  
</blockquote>
`


var last = `
<section>
  <blockquote>
    <p style="font-size: 30pt;">
      ... und weiter geht es nächste Stunde ... 
    </p>
    <br>
  </blockquote>

  <aside class="notes">

    <p style="color: red">
      
      Bitte denkt an die Hausaufgaben

    </p>
  </aside>
</section>
`




var footer_content = `

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

`
var header_element = document.getElementById('header');
var first_element = document.getElementById('first');
var questions_element = document.getElementById('questions');
var summary_element = document.getElementById('summary');
var last_element = document.getElementById('last');
var footer_element = document.getElementById('footer');

header_element.innerHTML = header_content;
first_element.innerHTML = first;
questions_element.innerHTML = questions;
summary_element.innerHTML = summary;
last_element.innerHTML = last;
footer_element.innerHTML = footer_content;















