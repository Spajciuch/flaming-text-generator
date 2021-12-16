# flaming-text-generator
It's an Node.js module for generating flaming text with http://www.flamingtext.com

## Usage
```ts
import * as flameText from 'flaming-text-generator';

flameText.generate({ text: 'Hello World', transparent: true })
  .then((data) => {
    console.log(data)
})
```

### Example Output

```
{"id":"27509307472497202","src":"https://ov12-engine.flamingtext.com/netfu/tmp28009/coollogo_com-104785047.gif","width":304,"height":86,"farmer":"ov6","gimpHost":"ov12-engine.flamingtext.com","gimpPort":28009,"gimpTime":911}
```
## Parameters
```js
  script?: string;
  text: string;
  fontSize?: number;
  fontname?: string;
  font?: string;
  textBorder?: number;
  growSize?: number;
  antialias?: boolean;
  hinting?: boolean;
  justify?: number;
  letterSpacing?: number;
  textSlant?: number;
  lineSpacing?: number;
  textVerticalSlant?: number;
  textAngle?: number;
  textOutline?: boolean;
  textOutlineSize?: number;
  textColor?: string;
  angle?: number;
  blueFlame?: boolean;
  framerate?: number;
  frames?: number;
  pframes?: number;
  oframes?: number;
  distance?: number;
  transparent?: boolean;
  animLoop?: boolean;
  defaultFrameRate?: number;
```
### Original module
I improved [this module](https://www.npmjs.com/package/node-flaming-text) from [gchao](https://www.npmjs.com/~gchao). And made it in Typescript so it's more affordable for user.