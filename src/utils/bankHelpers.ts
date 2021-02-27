import { Subject } from 'rxjs';

export const bankProcess$ = new Subject<{
  target: string;
  processNumber: number;
}>();
