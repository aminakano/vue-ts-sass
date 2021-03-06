import { Vue, Component } from "vue-property-decorator";

@Component
export default class MyMixin extends Vue {
  arrShuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  decodeHTMLEntities(text: string) {
    let textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  stripString(string: string) {
    let text = this.decodeHTMLEntities(string);
    const width = window.screen.width;
    if (width < 415) {
      return text.length > 30 ? text.split("").slice(0, 30).join("") + "..." : text;
    } else {
      return text.length > 50 ? text.split("").slice(0, 50).join("") + "..." : text;
    }
  }

  textSeparate(string: string, index: any, falsy: any) {
    const str = string.split(" ")[0].split("");
    return str[str.length - 1] == ":" ? string.split(" ")[index] : falsy;
  }
}
