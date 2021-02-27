import { Subject } from 'rxjs';

import { ExecuteCallback } from '../types/misc';

export const bankProcess$ = new Subject<ExecuteCallback>();
