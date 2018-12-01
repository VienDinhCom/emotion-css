# Overriding Semantic UI with Emotion

Get up and running with a single import.

```bash
npm install --save emotion-semantic-ui
```

```javascript
import { css } from 'emotion-semantic-ui'

const app = document.getElementById('root')

const myStyle = css({
  color: 'red',
  background: 'yellow'
});

app.classList.add(myStyle)
```
