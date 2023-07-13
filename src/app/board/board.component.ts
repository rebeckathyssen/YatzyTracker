import { Component } from '@angular/core';
import { RowName } from 'src/shared/models/rowName.model';
import { User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  constructor() {}

  //rowNameArr: RowName[] = [];
  board: any[] = [];
  userRows: any[] = [];

  usersArr: User[] = [];

  isEditable: boolean = false;
  editRow: string = '';
  editPlayer: string = '';

  inputValue: any;

  ngOnInit() {
    this.createUsers();
    this.createRows();
  }

  createUsers() {
    const Lars = new User();
    Lars.name = 'Lars';
    this.usersArr.push(Lars);
    const Rebecka = new User();
    Rebecka.name = 'Rebecka';
    this.usersArr.push(Rebecka);
  }

  createRows() {
    this.board.push(
      { name: '1ere' },
      { name: '2ere' },
      { name: '3ere' },
      { name: '4ere' },
      { name: '5ere' },
      { name: '6ere' },
      { name: 'Sum' },
      { name: 'Bonus' },
      { name: 'Et par' },
      { name: 'To par' },
      { name: 'Tre par' },
      { name: '3 ens' },
      { name: '4 ens' },
      { name: '2x3 ens' },
      { name: 'Lille' },
      { name: 'Stor' },
      { name: 'Royal' },
      { name: 'Fuldt hus' },
      { name: 'Chance' },
      { name: 'Yatzy' },
      { name: 'Total' }
    );

    this.usersArr.forEach((user) => {
      let rowNameArr: any[] = [];
      this.board.forEach((element) => {
        console.log(element);
        if (element.name == '2ere') {
          rowNameArr.push({ player: user.name, name: element.name, value: 20 });
        } else {
          rowNameArr.push({ player: user.name, name: element.name, value: 0 });
        }
      });
      this.userRows.push(rowNameArr);

      // rowNameArr.push({player: user.name, columnName: '1ere', value: 0});
      // rowNameArr.push({player: user.name, columnName: '2ere', value: 0});

      // this.board.push(rowNameArr);

      //   const onesies = <RowName>{ name: '1ere', value: 0 };
      // rowNameArr.push(onesies);
      // const twosies = <RowName>{ name: '2ere', value: 0 };
      // rowNameArr.push(twosies);
      // const threesies = <RowName>{ name: '3ere', value: 0 };
      // rowNameArr.push(threesies);
      // const foursies = <RowName>{ name: '4ere', value: 0 };
      // rowNameArr.push(foursies);
      // const fivesies = <RowName>{ name: '5ere', value: 0 };
      // rowNameArr.push(fivesies);
      // const sixies = <RowName>{ name: '6ere', value: 0 };
      // rowNameArr.push(sixies);
      // const sum = <RowName>{ name: 'Sum', value: 0 };
      // rowNameArr.push(sum);
      // const bonus = <RowName>{ name: 'Bonus', value: 0 };
      // rowNameArr.push(bonus);
      // const pairone = <RowName>{ name: 'Et par', value: 0 };
      // rowNameArr.push(pairone);
      // const pairtwo = <RowName>{ name: 'To par', value: 0 };
      // rowNameArr.push(pairtwo);
      // const pairthree = <RowName>{ name: 'Tre par', value: 0 };
      // rowNameArr.push(pairthree);
      // const same3 = <RowName>{ name: '3 ens', value: 0 };
      // rowNameArr.push(same3);
      // const same4 = <RowName>{ name: '4 ens', value: 0 };
      // rowNameArr.push(same4);
      // const same2x3 = <RowName>{ name: '2x3 ens', value: 0 };
      // rowNameArr.push(same2x3);
      // const small = <RowName>{ name: 'Lille', value: 0 };
      // rowNameArr.push(small);
      // const large = <RowName>{ name: 'Stor', value: 0 };
      // rowNameArr.push(large);
      // const royal = <RowName>{ name: 'Royal', value: 0 };
      // rowNameArr.push(royal);
      // const house = <RowName>{ name: 'Hus', value: 0 };
      // rowNameArr.push(house);
      // const chance = <RowName>{ name: 'Chance', value: 0 };
      // rowNameArr.push(chance);
      // const yatzhee = <RowName>{ name: 'Yatzy', value: 0 };
      // rowNameArr.push(yatzhee);
      // const total = <RowName>{ name: 'I alt', value: 0 };
      // rowNameArr.push(total);

      // this.userRows.push(rowNameArr);
    });
    console.log(this.board);
    console.log(this.userRows);
  }

  findField(clickedRow: any, user: any) {
    this.editRow = clickedRow;
    this.editPlayer = user.name;
    console.log(clickedRow);
    console.log(user);
    // if (!this.isEditable) {
    //   this.isEditable = true;
    // } else if (this.isEditable && this.inputValue != 0) {
    //   console.log("???")
    //   // to do: find indexet svt navn og sæt værdien der
    //   const findRelevantRow = user.points.findIndex((x: any) => x.name == clickedRow)
    //   console.log(findRelevantRow)
    //     user.points[findRelevantRow].value = this.inputValue;
    //     console.log(user);
    //     this.isEditable = false;
    //   }
  }

  // findField2(test: any) {
  //   console.log(test)
  //   this.editRow = test.name;
  //   console.log(this.editRow)
  //   this.editPlayer = test.player;
  //   if (!this.isEditable){
  //     this.isEditable = true;
  //   }
  // }

  findField2(column: any) {
    console.log(column);
    this.editRow = column.name;
    this.editPlayer = column.player;
    if (!this.isEditable) {
      this.isEditable = true;
    }
  }

  onValueChange(newValue: any, column: any) {
    column.value = newValue;
  }
}
