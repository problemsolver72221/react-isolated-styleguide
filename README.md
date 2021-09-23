# react-isolated-styleguide

Develop React components in isolation using react-styleguidist, with ESLint and Prettier support.

### How to:

-   Place your component that you want to develop inside the `src/components` folder. Follow the `__Example` folder structure.
-   You are free to use css in js (like seen in the component with Example.style.js) or regular css. You can as well download any react package to experiment with. Only important thing is you should always include the .md file as seen in the Example, so react-styleguidist can pick it up.
-   After placing your component, go to `styleguide.config.js` and tell react-styleguidist where your component lives.

```javascript
...........
sections: [
        {
            name: 'Components',
            description: 'Application level pure components',
            components: [
                'components/YourComponent/YourComponent.jsx',
                // you can place your component here, or open a new section if you want to group specific components
            ],
        },
.............
```

### How to install & run

-   Run `npm install`
-   After installing, run `npm run styleguide` command.

**Note:** If you add a new component to styleguide.config.js, you will need to re-run `npm run styleguide` command.
