import { HasFormatter } from '../interfaces/HasFormatter';
export class ListTemplate {

    constructor(private container: HTMLUListElement) {
        // container가 private이면 선언 추가적으로 해주지 않아도 됨.
        // container를 따로 선언 안하고 그냥 두어도 무방
    }
    render(item: HasFormatter, heading: string, position: 'start' | 'end') {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = heading;
        li.append(h4);
        
        p.innerText = item.format();
        li.append(p);

        if (position === 'start') {
            this.container.prepend(li);
        } else if(position === 'end') {
            this.container.append(li);
        }
    }
}