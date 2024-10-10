# bind-class-names

A utility function for binding class names with CSS module styles effortlessly. This function makes it easy to apply CSS module classes dynamically in your React components.

---
## Usage

```typescript
import { bindClassNames } from 'bind-class-names';
import styles from './styles.module.css';

const cx = bindClassNames(styles);

// Usage in a component
function ExampleComponent() {
  return (
    <div className={cx('container', 'flex', 'justify-center')}>
      Hello, World!
    </div>
  );
}
```

---

## API
`bindClassNames(styles: { [key: string]: string }) => (...classNames: string[]) => string`

- `styles`: An object containing CSS module classes.
- `classNames`: A list of class names to be mapped through the styles object.

Returns a function that maps the provided class names to their corresponding CSS module values and joins them into a single string.

---

## Why use bind-class-names?
- Simplify CSS Modules: Easily map class names to CSS modules without manually accessing the styles object each time.
- Dynamic Class Names: Apply multiple class names dynamically in React components.
- Lightweight: Minimal overhead, and straightforward usage.
