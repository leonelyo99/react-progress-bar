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
| expand | set expand mode | boolean | false
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

## Ej images:
![progress image, dark theme 40%](https://res.cloudinary.com/dsnvoedar/image/upload/v1629335800/progressEj1_oz3fsb.png)
![progress image, 90%](https://res.cloudinary.com/dsnvoedar/image/upload/v1629470485/progressbar1_tzhu9z.png)
![progress image, dark theme 90%](https://res.cloudinary.com/dsnvoedar/image/upload/v1629335803/progressEj2_nkddzf.png)
![progress image, dark theme 90%, red to green](https://res.cloudinary.com/dsnvoedar/image/upload/v1629335807/progressEj3_lip0se.png)
![progress image, dark theme 90%, no button](https://res.cloudinary.com/dsnvoedar/image/upload/v1629336325/progressEj5_c1oecc.png)
![progress image, dark theme 90%, no button, no description](https://res.cloudinary.com/dsnvoedar/image/upload/v1629336325/progressEj6_vx70ah.png)
![progress image, 90%, no title, no button, description](https://res.cloudinary.com/dsnvoedar/image/upload/v1629470482/progressbar3_sdtazd.png)
![progress image, 90%, no button, no description, no title, grey background](https://res.cloudinary.com/dsnvoedar/image/upload/v1629335802/progressEj4_ehbzzk.png)
![progress image, 90%, no button, no description, no title, white background](https://res.cloudinary.com/dsnvoedar/image/upload/v1629470484/progressbar_k7dban.png)
![progress image, 90%, no button, no description, no title, square edges, white background](https://res.cloudinary.com/dsnvoedar/image/upload/v1629470483/progressbar4_erxuda.png)


## GitHub
### [https://github.com/leonelyo99/react-progress-bar](https://github.com/leonelyo99/react-progress-bar)
