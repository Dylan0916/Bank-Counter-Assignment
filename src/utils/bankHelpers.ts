import { Subject } from 'rxjs';

import { QueueContent } from '../types/misc';

export const queueSubject$ = new Subject<QueueContent>();
