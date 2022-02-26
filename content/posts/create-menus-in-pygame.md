---
title: "How to Create Menus in Pygame"
date: 2020-06-21T10:54:30-05:00
draft: false
---

This article is about creating high functioning menus with an optimized workflow along with even a settings page.

One note of warning is that each of these sections of code cannot be run independently.
I have split the code on purpose so that you can use it in a plug and play manner.
I will link my own pygame project at the end so that you can see that the code I've shared is the code I do in fact use.

## Boilerplate Code

The following snippet defines constants such as button widths and text sizes.
You should expect an undefined error since I have not shown main_menu() yet.

[boilereplate.py](https://repl.it/@elilopez/PygameMenus#boilerplate.py)

`gfxdraw` is what we will use to make anti-aliased circles for our toggle button.
There's a variable called `button_layout_4` which I use as the layout for if the menu will have 4 centred buttons of the same size.
You can make your own custom layout if you need x buttons. I actually made a local button_layout_3 in my own end game menu since it only required only 3 buttons.

In this repl, there are other files as well that we will take a look at.

## Helper Functions

[helpers.py](https://repl.it/@elilopez/PygameMenus#helpers.py)

### text_objects(…)

Returns the text surface and its dimensions

### button(…)

Creates a visual button with a passive and hovered (active) state.
Return value is whether or not the button was clicked.
Note that there is a 100ms buffer time to ensure the click was not of a previous menu button.

### draw_circle(…)

Draws an anti-aliased circle. First the outline is drawn and then the fill is drawn.

### toggle_btn(…)

This function creates the text and toggle with enabled and disabled states.
The return value is whether the toggle (including the text) was clicked.
Since there is no hover state, `draw_toggle` and `blit_text` are available to avoid redundant blitting and drawing.

## Main Menu

[main_menu.py](https://repl.it/@elilopez/PygameMenus#main_menu.py)

Now that you have the boiler plate code we can now start with the main menu.
The following is an overview of our game. Note that this is the order and not what each menu will contain since menus can have go back buttons.

```text
Main Menu
    Game Loop
        Pause
            High Scores
            QUIT
    Settings
    High Scores
    QUIT
```

`main_menu()` is called exactly once to ensure there is no mutually recursive shenanigans going on.

Whenever the game ends and the user is returned to the main menu, we will need to redraw the static parts of the main menu.
This is what the `main_menu_setup()` is for.
The event parsing is to check if "Alt + F4" or Esc were pressed so that the user can exit the game with standard keyboard shortcuts as well as checking if the user has left clicked.
You can add your own custom keyboard shortcuts that associate to specific buttons like I did for viewing high scores.

You should modify `BUTTON_WIDTH`, `button_rects`, the button texts, and also the button if statement logic to fit your needs.
When experimenting you can use raw pixel values to determine the right positions, but when you are satisfied convert these pixel values to percentages of `SCREEN_WIDTH` and `SCREEN_HEIGHT`.
Using raw pixel values will make the GUI look drastically different for devices with different resolutions from the device you develop on.

## Settings Menu

[settings_menu.py](https://repl.it/@elilopez/PygameMenus#settings_menu.py)

The logic for the settings menu is similar to the main menu except we have to deal with writing and reading settings.
I use a variable `config: dict` to store the game settings and I have a `save_config()` function that writes the dict to a `config.json` file.
Since toggle buttons are static, I keep track of whether or not its the first loop and if the toggles need to be redrawn (setting changed).
Note that the back button is just a return. This is because of the game logic I talked about earlier to avoid unnecessary recursion.
As you can see, we have modified the function of pressing the Escape key to return back to the main menu.

## Pause Menu

[pause_menu.py](https://repl.it/@elilopez/PygameMenus#pause_menu.py)

This is definitely one of the more complicated menus to create because I had to deal with game character movement + having a translucent background.
Similar to the main menu, we will need to redraw the background every time we are returning from either the settings page or the high scores page.

Note that I have updated this code after I created the gif at the bottom.

My version of the pause menu required me to pass the game character because of some roadblocks I faced, but yours may not require this.
A lot of the differences between this code and the previous menus have to do with handling character movement (whether to stop the character from moving, keep the character moving, etc).
The most important part is how I save the translucent background so that I can use it again when returning from the high score and settings menus.

## Other Menus

Other menus include the end screen and high scores menu but I won't be showing the code for those since the point of this article is to help you create your own menus optimally, not to do everything for you.
It's just a question of placement (modifying button_rects) since I have taught you how the game logic should be and also creating the buttons themselves.

Check out my game [Jungle Climb](https://github.com/elibroftw/jungle-climb) if you want to see how all the helper functions are put together.

{{< gfycat arcticbigheartedaddax >}}

## Possible Improvements

### 2022

I ran the game and am blinded by own menu. It's too white and bright. It would be better for the menu background to be black and transcluent rather than white and tranclucent.
