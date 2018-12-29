import { observable, action } from 'mobx';

export class CounterStore {

  @observable counter: number = 5;


  @action add = () => {
    this.counter = this.counter + 1;
  }

  @action substract = () => {
    this.counter = this.counter - 1;
  }

}

export default new CounterStore();