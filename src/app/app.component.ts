import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public listaHoras: string[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];

  public listMessage: any[] = [];

  public message: string[] = [
    'Online',
    'Online e Cloud',
    'Online, Cloud e Batch',
    'Sem mais Implantações Cadastradas',
  ];

  public data: string[] = ['ONNNONNNNNNNNNONNNNNNNNN'];

  ngOnInit() {
    this.observable();
  }

  public observable() {
    this.data = this.putComma(this.data);
    this.coloredMessageList();
    console.log(this.data);
  }

  public putComma(value: string[]) {
    var str = value.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{0})+(?!\d))/g, ',');
    return str.join(',').split(',');
  }

  public changeColorHours(index: number) {
    return this.data[index] != 'N' ? true : false;
  }

  public coloredMessageList() {
    let message = this.message;
    let data = this.data;
    for (let i = 0; i <= data.length; i++) {
      data[i] == 'O' ? this.data.splice(i, 1, message[0]) : '';
    }
    this.data.push('*Sem mais Implantações Cadastradas');
  }

  public changeColor(data: string) {
    return {
      color: data.includes(this.message[0])
        ? 'Blue'
        : data.includes(this.message[3])
        ? 'black'
        : 'red',
      'font-weight': data.includes(this.message[3]) ? 'normal' : 'bold',
    };
  }

  changePosition(index: number) {
    let i = index / 2;
    return i;
  }
}
