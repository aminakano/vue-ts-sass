import { Vue, Component } from 'vue-property-decorator';


@Component
export default class MyMixin extends Vue {
    arrShuffle(array: any) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

    decodeHTMLEntities(text: string) {
        let textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
    }
}

