# Overriding CSS with Emotion

Get up and running with a single import.

```bash
npm install --save emotion
npm install --save emotion-override
```

```javascript
import { css } from 'emotion-override';

const app = document.getElementById('root');

const myStyle = css({
  color: 'red',
  background: 'yellow'
});

app.classList.add(myStyle);
```
