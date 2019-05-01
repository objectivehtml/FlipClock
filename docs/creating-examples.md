# Creating Examples

We try to provide a lot of examples. A lot of issues get created due to a lack
of examples and demonstration. If you run into a scenario that you think should
be an example, read the following steps:

1.  [Fork the repo on Github](https://github.com/objectivehtml/flipclock)
2.  Create a new directory in the `./docs/examples`. Follow the existing kebab
    case format. Example `my-example-name`.
3.  Within the newly created directory, be sure to include two files:
    `my-example-name.json` and `my-example-name.md`. The name of the files must
    match parent directory exactly.
4.  `my-example-name.md` should have a description, and the code to run the
    example. The following is some code of how an example could look.
    
        This examples shows a Faces.TwelveHourClock without seconds.

        <div class="mt-5 clock"></div>

        <script type="text/javascript">
            const el = document.querySelector('.clock');

            const clock = new FlipClock(el, {
                face: 'TwelveHourClock'
            });
        </script>
5.  Commit your changes with some quality comments and description of what you
    just added. And then put in a pull request.