import { makeAutoObservable } from 'mobx';

class TreeStore {
  data: any = {};
  constructor() {
    makeAutoObservable(this);
  }
}
let treeStore = new TreeStore();
export { treeStore };
