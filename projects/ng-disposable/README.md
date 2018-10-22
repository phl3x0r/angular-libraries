# ng-disposable

## Description

ng-disposable is a small library that lets you implement a disposable interface and add it to a list of services
in order to tear down multiple services at once on a given condition.

Useful if you manage subscriptions or other state inside services that should be cleaned up simultanously e.g. on logout

Simply implement the _Disposable_ interface and add the service to the _DISPOSABLES_ injection token list using `multi: true`
Then invoke the dispose function on the provided _DisposableService_

## Usage

Implement the Disposable interface:

```typescript
export class MyService implements Disposable {
  public dispose() {
    // tear down
  }
}
```

Add your disposable service to the module:

```typescript
@NgModule({
  imports: [DisposableModule.forRoot()],
  providers: [
    MyService,
    {
      provide: DISPOABLES,
      useExisting: MyService,
      multi: true
    }
  ]
})
export class MyModule {}
```

use the DisposableService to tear down all disposables:

```typescript
export class AppComponent {
  constructor(private service: DisposableService) {}

  public logout() {
    this.service.dispose();
  }
}
```

## Contribute
