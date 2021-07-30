interface PepperConfig {
  theme: string;
}

export default class Pepper {
  
  private static pepper: Pepper | null = null;
  public config: PepperConfig;

  private constructor(config: PepperConfig) {
    this.config = config;
    const head = document.head;
    const link = document.createElement('link');

    /*link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `%PUBLIC_URL%/themes/${config.theme}.css`;
    console.log(link);*/

    //head.appendChild(link);
    import (`../components/themes/${config.theme}.css`);
     
  }

  static createInstance({
    theme = 'default.css',
  }: PepperConfig): Pepper {
    if (this.pepper === null) {
      this.pepper = new Pepper({
        theme
      }); 
    }
    return this.pepper;
  }
  
}