## green-red-react-progress-bar

It is a library of react, in short, a progress bar.

- It is easy to implement, with several options.
- It can go from green to red or red to green.
- It can have dark theme or light theme.
- It has an extended or small version.
- It can receive classes or styles.
- It can may or may not include title.
- It can may or may not include button.
- It can may or may not include description.
- It can be with rounded or straight edges.

## To install
```sh
npm install --save green-red-react-progress-bar
```

## Parameters

The following parameters can be passed to it.

| PARAMETERS | ACTION | TYPE | DEFAULT
| ------ | ------ | ------ | ------ |
| darkTheam | set dark theme | boolean | false
| expand | set dark mode | boolean | false
| redToGreen | set red to green progress bar | boolean | false
| roundProgressbar | set round progressbar | boolean | true
| containerClass | pass a class to container | string | -
| containerStyle | pass a style to container | object | -
| titleClass | pass a class to title | string | -
| titleStyle | pass a style to title | object | -
| buttonClass | pass a class to button | string | -
| buttonStyle | pass a style to button | object | -
| descriptionClass | pass a class to description | string | -
| descriptionStyle | pass a style to description | object | -
| handleButton | the function of the button | function | ()=>{}
| titleText | the title text | string | -
| showButton | set the button | boolean | false
| titleButton | the text button | string | -
| descriptionText | the description text | string | -
| percentage | the percentage | number | 0

## Ej:

```{javascript}
import ProgressBar from "green-red-react-progress-bar";

<ProgressBar
    darkTheam={true}
    expand={true}
    titleText={`This is the title`}
    showButton={true}
    titleButton={'Shoot the action'}
    descriptionText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sem magna. Donec in mauris vel eros commodo lacinia in vel dui. Phasellus velit quam, mollis et commodo nec`}
    handleButton={()=>{console.log('click')}}
    percentage={30}
/>
```

## GitHub
### [https://github.com/leonelyo99/react-progress-bar](https://github.com/leonelyo99/react-progress-bar)
