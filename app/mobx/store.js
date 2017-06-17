import { observable, action } from 'mobx';
import { observer } from 'mobx-react';


class MobxStore {

  @observable counter=0;
  @observable counter2=10;

  @action addOne = ()=>{
    this.counter = this.counter+1;
  }
  @action subtractOne = ()=>{
    this.counter2 = this.counter2-1;
  }

}

const mobxStore = new MobxStore()
export default mobxStore
