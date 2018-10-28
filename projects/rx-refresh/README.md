# rx-refresh

## Description

rx-refresh provides rxjs operators for automatically switching / merging an observable to itself based on a refresh time and a monitor for controlling when the refreshing is active.
Useful for conditional polling and other other Observables that needs to keep refreshing while condtitions are met.

Also provides a refresher Observable which can be used as a source and keeps count of the number of refreshes

## Installation

Install the package by running
`npm install rx-refresh`

## Usage

### Examples:

```typescript
// switches http request, cancelling previous request
httpRequest
  .pipe(
    delay(2000),
    switchRefresh(1000)
  )
  .subscribe(res => console.log('switched: ', res));

// merges http requests
httpRequest
  .pipe(mergeRefresh(1000))
  .subscribe(res => console.log('merged: ', res));

// useful if you need full control of the source and the number of emits
refresher(1000)
  .pipe(map(x => 1 / x))
  .subscribe(res => console.log('inverse: ', res));
```
