
### [v1] Button Lights

-- Create a `light-up` class that you can add to any of buttons to make them appear like they've lit up USING HTML

-- Use JavaScript to add a class to an element of your choosing
    -- You don't have to do this in response to a mouse click.
    -- It could be some JavaScript in a `<script>` tag that adds the class as soon as the page loads.
    -- It could be some JavaScript you type by hand in your browser's [developer console][url-developer-console].

-- Respond to a user's mouse to add/remove the `light-up` class
    -- react to the "mouse button down" and "mouse button up" events separately.

**********************************************************************

### [v2] Sounds ([Beep Beep I'm A Jeep][youtube-beep-beep-jeep])

Two ways to make a sound in js:

    1. Embed a sound file in the page with the `<audio>` tag and use JavaScript to play it in response to something the user does on the page
    2. Use the `AudioContext` interface to generate sounds programmatically, e.g., telling the computer to play a sine wave at 440Hz for 2 seconds

*********************************************************************

### [v3] Track Button Presses

-- add an element which displays the number of buttons pressed so far
-- variable to store the number of button presses, intial value = 0 (counter variabl)
-- every time a user presses a button, do two things:
    -- increment the counter variable by +1
    -- update the text on the page that displays the number of button presses the with new value of the counter

**********************************************************************

### [v4] Call And Response (Non-Random)

Start with a fixed sequence of colors, like "red, blue, blue, green". The sequence will be the same every time the user visits the page.

- Display "red" on the page
- Wait for the user to click a button
- If it's not red, display some text that says "game over"
- If it's red, display the next color ("blue") in this case
- Wait for the user to click a button
- If it's not blue, display some text that says "game over"
- If it's blue, display the next color
- etc. etc.
- until there are no more colors left

**************************************************************************

### [v5] Call And Response (Random)

Let's figure out how to add some randomness to the experience.

Figure out how to generate a random color name and make that the next color the player has to respond with. The game still works call-and-response-style, but the player plays until their first incorrect guess.

The number of button presses is their final score.

**************************************************************************

### [v6] Simon Game (One Sequence, Non-Random)

Let's get rid of the call-and-response element.

Encode a fixed sequence of colors again. Display the *full* sequence to the player (as text). If they press every button in the correct order, they win. If they press a button out of order, they lose.

You'll have to keep track of what color they need to guess next.

**************************************************************************

### [v6] Simon Game (One Sequence, Random)

Let's add some randomness back in.

Figure out how to generate a random sequence of colors. It can be of a fixed length (e.g., it's always 5 random colors).

Once you've generated the sequence, display the list of colors and let the game unfold as in the previous iteration.

**************************************************************************
