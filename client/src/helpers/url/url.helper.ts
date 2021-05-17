

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
    }
}

function parseFilename(cardName: string): string {
    if (cardName.length > 2) {
        return cardName;
    }
    const [level, shape,] = cardName.split('');
    const parsedShape = parseShape(shape)
    if (parsedShape == null) return 'back'
    return `${parseLevel(level)}_of_${parsedShape}`
}

export function getCardImageSource(cardName: string): string {
    return buildImgSrc(`/cards/${parseFilename(cardName)}.svg`)
}