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

  public message: string[] = [
    'Online',
    'Online e Cloud',
    'Online, Cloud e Batch',
  ];

  public data: string[] = ['ONNNONNNNNNNNNONNNNNNNNN'];

  ngOnInit() {
    this.observable();
  }

  public observable() {
    this.data = this.putComma(this.data);
  }

  public putComma(value: string[]) {
    var str = value.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{0})+(?!\d))/g, ',');
    return str.join(',').split(',');
  }

  public changeColorHours(index: number) {
    return this.data[index] != 'N' ? true : false;
  }

  changePosition(index: number) {
    let i = index / 2;
    return i;
  }
}
