export interface Palette {
    primary1Color: string,
    primary2Color: string,
    primary3Color: string,
    accent1Color: string,
    accent2Color: string,
    accent3Color: string,
    textColor: string,
    secondaryTextColor: string,
    alternateTextColor: string,
    canvasColor: string,
    borderColor: string,
    disabledColor: string,
    pickerHeaderColor: string,
    clockCircleColor: string,
    shadowColor?: string
}

export interface Theme {
  fontFamily: string;
  palette: Palette;
}
