export default function makeStickerStyle(hook) {

    const colors = ['rgb(254 202 202)', //red
                    'rgb(254 215 170)', //orange
                    'rgb(251 207 232)', //pink
                    'rgb(191 219 254)', //blue
                    'rgb(253 230 138)', //amber (yellow)
                    'rgb(187 247 208)' //green
    ];

    const [color, setColor] = hook('');

    const pickRandomColor = () => {
        const rand_index = Math.floor(Math.random() * colors.length);
        setColor(colors[rand_index]);
    };

    if (color === ''){
        pickRandomColor();
    }

    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: color,
        padding: 4,
        margin: 4
    };

    return style;
}