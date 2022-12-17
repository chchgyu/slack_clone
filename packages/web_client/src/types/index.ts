type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type TColorTypes = RGB | RGBA | HEX;
export type TSizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number | 'initial' | 'inherit';
