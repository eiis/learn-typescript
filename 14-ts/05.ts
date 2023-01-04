{
  class Hd {
    el: HTMLDivElement;
    constructor(el: HTMLDivElement) {
      this.el = el;
    }

    html() {
      return this.el.innerHTML;
    }
  }

  const el = document.querySelector('#zd') as HTMLDivElement;
  const obj = new Hd(el);
  console.log(obj);
}
