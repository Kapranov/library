# Library

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


# Building a complex web application with Ember.js 2.4

## Creating our first static page with Ember.js

1. Install Ember Cli

    bash> npm install -g ember-cli
    bash> npm install -g ember-cli@2.4.2
    bash> ember -v

    version: 2.4.2
    node: 5.7.1
    os: linux x64

2. Create the app

    bash> cd ~/projects
    bash> ember new library
    bash> cd library

3. Launch the app

    bash> ember server

   Open your new empty app in your browser: http://localhost:4200
   You should see a "Welcome to Ember" message on your website. Well
   Done! You have your first Ember.js application. You can open Ember
   Inspector in your Browser. Check it out, look around.
   [More details about Ember Inspector here.](https://guides.emberjs.com/v2.4.0/ember-inspector/installation/)

4. Turn on a few debugging options
   You can find a list of debugging options in ``./config/environment.js`` file.
   Remove the comment sign as follow:

    ```
      //..
      if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        ENV.APP.LOG_TRANSITIONS = true;
        ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;
      }
      //..
    ```

   Check your app and open the Console in Chrome/Firefox.
   You will see same extra information about what Ember.js actually does
   under the hood. As you spend more and more time with Ember.js development,
   these lines are going to be clearer.

5. Add Bootstrap and Sass to Ember.js App.
   Let's add some basic style to our application. We use Bootstrap with Sass.
   You can find various packages, add-ons on these websites:
   [http://www.emberaddons.com](http://www.emberaddons.com) or
   [http://www.emberobserver.com](http://www.emberobserver.com)

    bash> ember install ember-cli-sass
    bash> ember install ember-cli-bootstrap-sassy

   You will see, that your ``./package.json`` and ``./bower.json`` are extended
   with a couple of lines. Rename your ``app.css`` to ``app.scss`` with
   the following terminal command or you can use your editor to rename
   the ``./app/styles/app.css`` file:

   ```
    mv app/styles/app.css app/styles/app.scss
   ```

   Open ``./app/styles/app.scss`` file in your editor and add
   the following line:

   ```
    @import "bootstrap";
   ```

   Relaunch your app with ember server. You should see in the browser,
   that 'Welcome to Ember' uses Bootstrap default font.


   Above steps in a one liner. Copy-paste in your console. This is useful
   if you create a new project and you would like to add Bootstrap in a second.

   ```
    ember install ember-cli-sass && ember install
    ember-cli-bootstrap-sassy && echo '@import "bootstrap";' >
      ./app/styles/app.scss && rm ./app/styles/app.css
   ```

6. Create a navigation partial

   We will use bootstrap navigation bar to create a nice header section
   for our app. Update your main template file. Delete the example
   content and add the following code to your ``./app/templates/application.hbs.``

   ```
    <div class="container">
      {{partial 'navbar'}}
      {{outlet}}
    </div>

   ```

   Generate a navbar.hbs file with the following command in you terminal.

   bash> ember generate template navbar

   You can open ``./app/templates/navbar.hbs`` in your editor and add
   the following lines:

   ```
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          {{#link-to 'index' class="navbar-brand"}}Library App{{/link-to}}
        </div>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="nav navbar-nav">
            {{#link-to 'index' tagName="li"}}<a href="">Home</a>{{/link-to}}
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
   ```

   You can update your ``app.scss`` file to add some extra paddin to the top.
   The updated ``./app/styles/app.scss`` content:

    ```
      @import "bootstrap";
      body {
        padding-top: 20px;
      }
    ```

7. Create a new About page and add the link to the menu bar

   Let's create a new About page. Run the following command in your
   terminal ``ember generate route about`` A new route and template
   created in your project. Open your new ``./app/templates/about.hbs``
   file in your editor, delete its content and add the following line:
   ``<h1>About Page</h1>``

8. Create a new ``index`` template with the following command in your
   terminal:

   bash> ember generate template index

   Open in your editor the generated ./app/templates/index.hbs file and
   add the following: ``<h1>Home Page</h1>``

   If you launch your app, you should see the above message on your home
   page, however we still doesn't have About link in our menu bar.

   Open your ``./app/templates/navbar.hbs`` and add the following line
   to the ``ul`` section under ``Home`` link:

   ```
        {{#link-to 'about' tagName="li"}}<a href="">About</a>{{/link-to}}
   ```

   Your ``ul`` section in ``navbar.hbs`` should look like this:

   ```
      <ul class="nav navbar-nav">
        {{#link-to 'index' tagName="li"}}<a href="">Home</a>{{/link-to}}
        {{#link-to 'about' tagName="li"}}<a href="">About</a>{{/link-to}}
      </ul>
   ```

   If you check your app in the browser, you should see ``Home`` and
   ``About`` link in your menu bar, you can click on them and you will
   see how the page content and the url are changed.
   The ``active`` state of the link changes the style of the menu link
   automatically as well.
   However Bootstrap expect the ``active`` class in ``li`` and expects
   an anchor tag inside the ``li`` tag. For this reason we have to
   insert that empty anchor around menu labels. We will fix this with
   a nice component later.

## Computed property, actions, dynamic content

> Let's create a coming soon "jumbotron" on the home page with an email
> input box, where users can subscribe for a newsletter.

* Bootstrap's jumbotron: http://getbootstrap.com/components/#jumbotron
* Bootstrap's forms: http://getbootstrap.com/css/#forms

1. Only static html5 and style

   Add a static jumbotron, an input box and a button to
   ``/app/templates/index.hbs``

   ```
    <div class="jumbotron text-center">
      <h1>Coming Soon</h1>

      <br/><br/>

      <p>Don't miss our launch date, request an invitation now.</p>

      <div class="form-horizontal form-group form-group-lg row">
        <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2">
          <input type="email" class="form-control" placeholder="Please type your e-mail address." autofocus="autofocus"/>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-3">
          <button class="btn btn-primary btn-lg btn-block">Request invitation</button>
        </div>
      </div>

      <br/><br/>
    </div>
   ```
### Requirements

We would like to cover the following requirements:

* "Invite me" button should be inactive when input box is empty.
* "Invite me" button should be inactive when the content in
  the input box is not a valid email address.
* Show a response message after clicking on "Invite me" button.
* Clear the input box when invitation sent.

### isDisabled

We can add dynamic values to standard html properties using conditionals.
We can use our controller to add or modify the value of a variable, which
we use in our template. Check the following solution.
We use a boolean variable, let's call it ``isDisabled``, which will help
us to turn on and off the ``disabled`` html attribute on our button.
We have access to these variables in our controllers and in our
templates.
From the official guide: "Each template has an associated controller:
this is where the template finds the properties that it displays. You
can display a property from your controller by wrapping the property
name in curly braces."
First, update with this variable to your ``index.hbs`` template.

Add ``disabled`` property with ``{{isDisabled}}`` boolean variable.

```
  <button class="btn btn-primary btn-lg btn-block" disabled={{isDisabled}}>Request invitation</button>
```

Now we can create our index controller:

bash> ember g controller index

* Read more about Ember controllers here:
  ``http://guides.emberjs.com/v2.4.0/controllers/``

Note: Ember.js still uses controllers, however controller layer will be
deprecated and will be removed from Ember.js 3.0. We use controller to
practice some interesting feature, but later we will refactor our app
and we will move most of the logic inside components.

Add ``isDisabled`` property to the controller. Default value is ``true``.

```
  //app/controllers/index.js
  import Ember from 'ember';

  export default Ember.Controller.extend({
    isDisabled: true
  });
```

You can check your app, the button will be disabled by default. We want
to add some logic around this feature. We have to learn a couple of new
Ember.js features for that.

### Computed Properties and Observers

Computed Properties and Observers are important features of Ember.js.
Please read more about it in the official guide first.

* Computed Properties:
  ``http://guides.emberjs.com/v2.4.0/object-model/computed-properties/``
* Observers: ``http://guides.emberjs.com/v2.4.0/object-model/observers/``

Please note, I will use the new, preferred syntax in our project.
You could ask, was there some other syntax before? Yes.

Computed properties and observers still could be written in two ways,
however the classic syntax will be deprecated soon, but it is important
to know the "old" syntax and the "new" syntax, so when you see older
project, you will recognise this pattern.

Previously  ``.property()`` and ``.observes()`` were attached
to the end of the functions, nowadays we use ``Ember.computed()``
and ``Ember.observer()`` functions instead. Let's see in examples.

> Old (with ES5 string concatenation):

```
  //...
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
  //...
```
> New (with ES6 string interpolation):

```
  //...
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
  //...
```

So, we will use this new syntax. ``Ember.computed()`` could have more
parameters. First parameters are always those variables/properties in
string format, what we would like to use inside our function.
The last parameter is a ``function()``. nside in this function we will
have access to the properties with ``this.get()``. In Ember.js we read
properties with ``this.get('propertyName')`` and update properties with
``this.set('propertyName', newValue)``.

Back to our project, and let's play with these new features.

Let's update our html code with input component syntax and add a
``value`` to our email input box.

Modify ``<input>`` line as follow in ``index.hbs``:

```
  {{input type="email" value=emailAddress class="form-control" placeholder="Please type your e-mail address." autofocus="autofocus"}}
```

As you can see, we use ``emailAddress`` variable, or better word,
a "property" where we would like to store the value of the input box.

If you type something in the input box, it will update this variable in
the controller as well.

You can use the following code in your controller to demonstrate the
differences between computed properties and observers:

```
  //app/controllers/index.js
  import Ember from 'ember';

  export default Ember.Controller.extend({
    isDisabled: true,

    emailAddress: '',

    actualEmailAddress: Ember.computed('emailAddress', function() {
      console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    }),

    emailAddressChanged: Ember.observer('emailAddress', function() {
      console.log('observer is called', this.get('emailAddress'));
    })
  });
```

Observers will be called always when the value of the ``emailAddress``
changes, the computed property only when you use it. Open your app in
your browser, activate Ember Inspector. Click on ``/# Routes`` section,
find the ``index`` route, in the same line, under ``Controller``
column, you will see an ``>$E`` sign, click on it. Open the console in
Chrome and you will see something like this:

```
  Ember Inspector ($E): Class {__nextSuper: undefined, __ember_meta__: Object, __ember1442491471913: "ember443"}
```

If you type the following in the console: ``$E.get('actualEmailAddress')``,
you should see the above created ``console.log`` message, that
"actualEmailAddress is called". You can try out ``$E.set('emailAddress',
'example@example.com')``  in the console. What do you see?

Please play with the above examples and try to create your own observers
and computed properties.

### isDisabled with Computed Property

We can rewrite our ``isDisabled`` with computed property as well.

```
  // app/controllers/index.js
  import Ember from 'ember';

  export default Ember.Controller.extend({
    emailAddress: '',
    isDisabled: Ember.computed('emailAddress', function() {
      return this.get('emailAddress') === '';
    })
  });
```

There are a few pre defined computed property function, which make your
code more shorter. In the following example we use ``Ember.computed.empty()``
which checks whether a property is empty or not.

```
  // app/controllers/index.js
  import Ember from 'ember';

  export default Ember.Controller.extend({
    emailAddress: '',
    isDisabled: Ember.computed.empty('emailAddress')
  });
```

Try out the above example in your code.

* More about ``Ember.computed`` short syntax:
  ``http://emberjs.com/api/classes/Ember.computed.html``
  (Check all the methods on that page.)

### isValid

Let's go further. It would be more elegant solution if we enable our
"Invite me" button only when input box contains a valid email address.

We use ``Ember.computed.match()`` short computed property function to
check the validity of the string. But we need the negated version of
this ``isValid`` computed property. We can use the ``Ember.computed.not()``
for this.

```
  // app/controllers/index.js
  import Ember from 'ember';

  export default Ember.Controller.extend({
    emailAddress: '',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid')
  });
```

Great, it works now as expected. You see, we can write really elegant
code with Ember.js, can't we?

### Add our first Action

Great we have an input box and a button on our screen, but it does
nothing at the moment. Let's implement our first action.

Update the ``<button>`` line in index.hbs.

```
  <button class="btn btn-primary btn-lg btn-block" disabled={{isDisabled}} {{action 'saveInvitation'}}>Request invitation</button>

```

You can try out in your browser, that if you click on the button,
you will get a nice error message, which alerts you, that you have
to implement this action in your controller. Let's do that.

```
  // app/controllers/index.js
  import Ember from 'ember';

  export default Ember.Controller.extend({
    emailAddress: '',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {
      saveInvitation() {
        alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      }
    }
  });
```

If you click on the button, ``saveInvitation`` action will be called and
shows an alert box, after it will setup a ``responseMessage`` property,
finally deletes the content of ``emailAddress``.

We have to show the response message. Extend your template.

```
  <!-- app/templates/index.hbs -->
  <div class="jumbotron text-center">
    <h1>Coming Soon</h1>

    <br/><br/>

    <p>Don't miss our launch date, request an invitation now.</p>

    <div class="form-horizontal form-group form-group-lg row">
      <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2">
        {{input type="email" value=emailAddress class="form-control" placeholder="Please type your e-mail address." autofocus="autofocus"}}
      </div>
      <div class="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-3">
        <button class="btn btn-primary btn-lg btn-block" {{action 'saveInvitation'}} disabled={{isDisabled}}>Request invitation</button>
      </div>
    </div>

    {{#if responseMessage}}
      <div class="alert alert-success">{{responseMessage}}</div>
    {{/if}}

    <br/><br/>

  </div>
```

We use ``{{#if}}{{/if}}`` handlebar helper block to show or
hide the alert message. Handlebar conditionals are really
powerful. You can use ``{{else}}`` as well.

* More about conditionals in templates: ``http://guides.emberjs.com/v2.4.0/templates/conditionals/``

Brilliant. You learned a lot about Ember.js and you have just
implemented these great features. :scream:

# Helpfull links & resources

```
  https://upload.wikimedia.org/wikipedia/commons/8/8c/Calabi_yau_formatted.svg

  http://blogs.visoftinc.com/2014/10/02/setting-up-foundation-and-fontawesome-ember-cli/

  https://github.com/ember-animation/liquid-fire/tree/master/tests/dummy
  https://github.com/ember-animation/liquid-fire/tree/master/example
  https://github.com/ember-animation/liquid-fire/raw/master/example/prebuilt-example.html
```
