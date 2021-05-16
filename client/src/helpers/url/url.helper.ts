

export function buildImgSrc(path: string): string {
    return process.env.PUBLIC_URL + '/images' + path;
}

function parseLevel(level: string): string {
    switch (level) {
        case 'A': return "ace";
        case 'K': return "king";
        case 'Q': return "queen";
        case 'J': return "jack";
        case 'T': return "10";
        default: return level;
    }
}

function parseShape(shape: string): string {
    switch (shape) {
        case 'd': return 'diamonds';
        case 's': return 'spades';
        case 'h': return 'hearts';
        case 'c': return 'clubs';
        default: throw new Error(`[${__filename}] [parseShape] unrecognized shape: ${shape}`)
    }
}

export function getCardImageSource(cardName: string): string {
    const [level, shape,] = cardName.split('');
    let filename = 'red_joker';

    filename = `${parseLevel(level)}_of_${parseShape(shape)}`

    return buildImgSrc(`cards/${filename}.svg`)
}