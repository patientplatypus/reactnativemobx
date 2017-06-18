import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';



class MobxStore {

  @observable counter=0;
  @observable counter2=10;
  @observable userName=null;

  @observable yearlyIncome=0;
  @observable monthlyRent=0;
  @observable weeklyFood=0;
  @observable dailyOther=0;


  @action setUser = (name)=>{
    this.userName=name;
  }

  @action setyearlyIncome = (number)=>{
    this.yearlyIncome = number;
  }
  @action setmonthlyRent = (number)=>{
    this.monthlyRent = number;
  }
  @action setweeklyFood = (number)=>{
    this.weeklyFood = number;
  }
  @action setdailyOther = (number)=>{
    this.dailyOther = number;
  }

  @computed get dailyAllowance() {
    return  (this.yearlyIncome-12*this.monthlyRent-52*this.weeklyFood-365*this.dailyOther)/365;
	}


}

const mobxStore = new MobxStore()
export default mobxStore
