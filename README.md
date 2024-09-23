# Angular lazy load experience

## What is this ?

Just like `loading="lazy"` attribute of **img** tag.

An event emitted when a component scroll in the viewport.

![](./assets/screenshot.gif)

## Usage

```html
<div (lazyLoad)="onLazyLoad()">
  <!-- Some content to display -->
</div>
```

```ts
@Component()
export class MyComponent {
  onLazyLoad(): void {
    // Load some content
  }
}
```
