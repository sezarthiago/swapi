import { Master } from '../models/Master';

export interface ChooseMaster {
  choose: (masters: Master[]) => Promise<Master>;
}
