export class MenuItem {
  constructor(
      public nombre: string,
      public icon: string,
      public link: string,
      public subMenu: Array<String>
  ) {}
}
