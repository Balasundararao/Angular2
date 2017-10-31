# Starting an Angular CLI Project with Sass
<pre>
ng new my-sassy-app --style=scss
</pre>

# Converting a Current App to Sass
<pre>
ng set defaults.styleExt scss
</pre>

You'll find the new config line at the bottom of the .angular-cli.json file:
<pre>
"defaults": {
  "styleExt": "scss",
  "component": {
  }
}
</pre>
### Changing the CSS Files to Sass

The Angular CLI will start processing Sass files now. However, it doesn't go through the process of converting your already existing .css files to .scss files. You'll have to make the conversion manually.

### Next, we'll create the following files:
<pre>
|- src/
    |- sass/
        |- \_variables.scss
        |- \_mixins.scss
        |- styles.scss
</pre>

To start using these new Sass files, we'll
 import the \_variables.scss and \_mixins.scss into the main styles.scss.

<pre>
// src/sass/styles.scss

@import './variables';
@import './mixins';
</pre>


The last step is to update our .angular-cli.json config to use this new src/sass/styles.scss instead of the src/styles.scss. In our .angular-cli.json file, just change the following line to point to the right styles.scss.
<pre>
"styles": [
  "sass/styles.scss"
],
</pre>

# Importing Sass Files Into Angular Components
We have new \_variables.scss and \_mixins.scss files that we will probably want to use in our components. In other projects, you may be used to having access to your Sass variables in all locations since your Sass is compiled by a task runner.

In the Angular CLI, all components are self-contained and so are their Sass files. In order to use a variable from within a component's Sass file, you'll need to import the \_variables.scss file.

<pre>
he CLI provides an easy way to import Sass files using the ~.

// src/app/app.component.scss

@import '~sass/variables';

// now we can use those variables!
</pre>

The tilde (~) will tell Sass to look in the src/ folder and is a quick shortcut to importing Sass files.

# Sass Include Paths

In addition to using the ~, we can specify the includePaths configuration when working with the CLI. To tell Sass to look in certain folders, add the config lines to .angular-cli.json like in the app object next to the styles setting.


<pre>
"styles": [
  "styles.scss"
],
"stylePreprocessorOptions": {
  "includePaths": [
    "my-path"
  ]
},
</pre>
