# log-base

Find the logarithm of any number with any base in code or with the command line.

This project uses the division property of logarithms to determine the logarithm with any base. Read more [here](https://people.richland.edu/james/lecture/m116/logs/properties.html).

## Usage

```typescript
import logBase from 'log-base'

logBase(2, 8) // returns 3
```

### ES5 Usage

```javascript
var logBase = require('log-base').default // this is because it is an ES6 default export

logBase(2, 8) // returns 3
```

## Contributing

If you want to contribute, implement it in TypeScript in the `src/` directory. Add a test file in `__tests__/` to make sure it works properly – you can just copy one of the other testing files and substitute in your sorting algorithm.

## License

This project is licensed under the [MIT License](./LICENSE), so you're free to use it as you please with attribution and a link back to this project (though writing your own implementation would not be terribly difficult).

## Credits

Written by Wilson Hobbs, 2019.
