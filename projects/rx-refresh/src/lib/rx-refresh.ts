import { merge, fromEvent, Observable, OperatorFunction } from 'rxjs';
import {
  switchMapTo,
  startWith,
  mapTo,
  take,
  bufferTime,
  filter,
  share,
  mergeMapTo,
  scan
} from 'rxjs/operators';

/**
 * Switches periodically as long as the monitor emits
 * Will stop switching if monitor stops and start again once monitor resumes
 * @param refreshTime refresh time in miliseconds
 * @param monitor controls refreshing state, defaults to {@link activityMonitor$}
 * @return An Observable that switches into the source Observable at an interval given by `refreshTime`
 * controlled by `monitor`
 * @method switchRefresh
 * @owner Observable
 */
export const switchRefresh = <T>(
  refreshTime: number,
  monitor: Observable<any> = activityMonitor$
): OperatorFunction<T, T> => source$ =>
  refreshFn(monitor, refreshTime).pipe(switchMapTo(source$));

/**
 * Merges periodically as long as the monitor emits
 * Will stop merging if monitor stops and start again once monitor resumes
 * @param refreshTime refresh time in miliseconds
 * @param monitor controls refreshing state, defaults to {@link activityMonitor$}
 * @return An Observable that merges into the source Observable at an interval given by `refreshTime`
 * controlled by `monitor`
 * @method mergeRefresh
 * @owner Observable
 */
export const mergeRefresh = <T>(
  refreshTime: number,
  monitor: Observable<any> = activityMonitor$
): OperatorFunction<T, T> => source$ =>
  refreshFn(monitor, refreshTime).pipe(mergeMapTo(source$));

/**
 * Get source Observable which emits periodically as long as the monitor emits
 * Will stop emitting if monitor stops and start again once monitor resumes
 * @param refreshTime refresh time in miliseconds
 * @param monitor controls refreshing state, defaults to {@link activityMonitor$}
 * @return An Observable that emits the total number of refreshes
 * @method refresher
 * @owner Observable
 */
export const refresher = (
  refreshTime: number,
  monitor: Observable<any> = activityMonitor$
) => {
  return refreshFn(monitor, refreshTime).pipe(
    mapTo(1),
    scan((acc, curr) => acc + curr, 0)
  );
};

function refreshFn(monitor: Observable<any>, refreshTime: number) {
  const inactive$ = monitor.pipe(
    bufferTime(refreshTime),
    filter(arr => arr.length === 0)
  );
  const activeAgain$ = inactive$.pipe(switchMapTo(monitor.pipe(take(1))));
  const active$ = activeAgain$.pipe(
    startWith(undefined),
    switchMapTo(
      monitor.pipe(
        startWith(undefined),
        bufferTime(refreshTime),
        filter(arr => arr.length > 0),
        mapTo(undefined)
      )
    )
  );
  const merged = merge(active$, activeAgain$).pipe(mapTo(undefined));
  return merged;
}

/**
 * Default activity monitor
 */
export const activityMonitor$ = merge(
  fromEvent(document, 'mousemove'),
  fromEvent(document, 'click'),
  fromEvent(document, 'mouseup'),
  fromEvent(document, 'mousedown'),
  fromEvent(document, 'mousescroll'),
  fromEvent(document, 'keyup'),
  fromEvent(document, 'keydown'),
  fromEvent(document, 'keypress')
).pipe(share());
