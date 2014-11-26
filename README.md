## jade-react-brunch

Adds [React](http://facebook.github.io/react) support to [brunch](http://brunch.io)
by automatically compiling `*.jreact` files using [jade-react-compiler](https://github.com/mikepb/jade-react-compiler).

### Installation

Install the plugin via npm with `npm install --save jade-react-brunch`.

Or, do manual install:

* Add `"jade-react-brunch": "x.y.z"` to `package.json` of your brunch app.
  Pick a plugin version that corresponds to your minor (y) brunch version.
* If you want to use git version of plugin, add
`"jade-react-brunch": "git+ssh://git@github.com:scoarescoare/jade-react-brunch.git"`.

### Usage

###### Input

```
- const React = require("bower_components/react/react") //- required if React is not global
nav#main-nav.navbar.navbar-default.navbar-fixed-top
  .container
    .navbar-header
      a.navbar-brand(href='../')
        | PriceBuddy
      button.navbar-toggle(type='button', data-toggle='collapse', data-target='#navbar-main')
        span.icon-bar
        span.icon-bar
        span.icon-bar
    #navbar-main.navbar-collapse.collapse
      ul.nav.navbar-nav.navbar-right
        li
          a(href="/about") About
        li
          a(href="/listings") Listings
        li
          a(href="/cities") Cities
        li
          a(href="/contacts") Contact
```
##### Output
```
var React = require("bower_components/react/react");
module.exports = function() {
    return React.DOM.nav({
        id: "main-nav",
        className: "navbar navbar-default navbar-fixed-top"
    }, React.DOM.div({
        className: "container"
    }, React.DOM.div({
        className: "navbar-header"
    }, React.DOM.a({
        href: "../",
        className: "navbar-brand"
    }, "PriceBuddy"), React.DOM.button({
        type: "button",
        "data-toggle": '"collapse"',
        "data-target": '"#navbar-main"',
        className: "navbar-toggle"
    }, React.DOM.span({
        className: "icon-bar"
    }), React.DOM.span({
        className: "icon-bar"
    }), React.DOM.span({
        className: "icon-bar"
    }))), React.DOM.div({
        id: "navbar-main",
        className: "navbar-collapse collapse"
    }, React.DOM.ul({
        className: "nav navbar-nav navbar-right"
    }, React.DOM.li(null, React.DOM.a({
        href: "/about"
    }, "About")), React.DOM.li(null, React.DOM.a({
        href: "/listings"
    }, "Listings")), React.DOM.li(null, React.DOM.a({
        href: "/cities"
    }, "Cities")), React.DOM.li(null, React.DOM.a({
        href: "/contacts"
    }, "Contact"))))))
};
```
### Optional

You can configure jade-react-brunch to skip `*.jreact` files. Disabled by default. 

Example `config.coffee`:

```coffeescript
exports.config =
  plugins:
    jadeReact:
      exclude: /\.static\.jreact/
  
  # Usual brunch config stuf...
  files:
    javascripts:
      joinTo: 'app.js'
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'app.js'
```

### Notes

jade-react-brunch only supports compiling `*.jreact` files. Here's why:

It's likely that you'll want to use other jade plugins to compile jade to html. If we had this plugin **and** other plugins accessing the same `.jade` files, they would trip over each other.

### Credit

This is based on 
* Paul Miller's [javascript-brunch](https://github.com/brunch/javascript-brunch)
* Braden Simpson [coffee-react-brunch](https://github.com/bradens/cjsx-react-brunch)
* Michael Phan-Ba [jade-react-compiler](https://github.com/mikepb/jade-react-compiler)

project and adjusted to compile Jade (.jreact) files.

### License

The MIT License (MIT)

Copyright (c) 2014 Scott Coates

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
