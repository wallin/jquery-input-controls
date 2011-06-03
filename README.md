# jQuery input controls plugin #

Non obtrusive plugin for adding input box controls for integer values

Feel free to use it and abuse it!

See documentation on [homepage](http://wallin.github.com/jquery-input-controls)

## Example ##

Below code adds two buttons next to three regular <input> elements: one for increasing, and one for decreasing the value in each box

    $(document).ready(function() {
      $('.demo_input').inputCtl({minVal: 0, maxVal: 10, step: 2});
    });
