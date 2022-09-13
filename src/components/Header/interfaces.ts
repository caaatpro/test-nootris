export interface IFHeader {
  logo: string;
  menu: IFMenu[];
  countInCart: number;
}

export interface IFMenu {
  link: string;
  text: string;
}
