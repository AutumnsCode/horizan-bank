# Bank App

This project is a tutorial from [YouTube](https://www.youtube.com/watch?v=PuOVqP_cjkE).

## What I learned?

- Using CountUp
- Using ChartJs:
I have use it in the past, but it was the first time that i use it in a React Project.

### React CountUp

1. Install: `npm i react-countup`
2. Import `CountUp` into the files(**Important**: Can not be placed inside a paragraph):

   ```javascript
   import CountUp from 'react-countup';

3. Follow the [Instruction](https://www.npmjs.com/package/react-countup)

### ChartJS

1. install: `npm i react-chartjs-2 chart.js`
2. Set up the project:

```typescript
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registriere die benötigten Elemente
ChartJS.register(ArcElement, Tooltip, Legend);
