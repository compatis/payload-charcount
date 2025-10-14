# Payload Plugin CharCount

A Payload CMS plugin that counts characters in richtext, textarea and text fields, similar to the SEO plugin character counter. Useful for editors to track content length.

## Features

- 📊 **Character counting** for text fields, textarea fields, and richtext fields
- 🌍 **Multi-language support** with translations in 40+ languages
- 🎨 **Consistent styling** with Payload
- ⚡ **TypeScript support** with full type definitions
- 🔧 **Easy integration** with existing Payload projects

## Installation

```bash
npm install @compatis/payload-charcount
# or
yarn add @compatis/payload-charcount
# or
pnpm add @compatis/payload-charcount
```

## Usage

### 1. Add the plugin to your Payload config

```typescript
import { buildConfig } from 'payload/config'
import charCountPlugin from '@compatis/payload-charcount'

export default buildConfig({
  plugins: [
    charCountPlugin(), // Add the plugin
  ],
  // ... rest of your config
})
```

### 2. Use the character counting fields

```typescript
import {
  CharcountTextField,
  CharcountTextareaField,
  CharcountRichTextField,
} from '@compatis/payload-charcount/fields'

export const Posts = {
  slug: 'posts',
  fields: [
    CharcountTextField(
      {
        name: 'title',
        label: 'Title',
        required: true,
      },
      {
        max: 100,
        min: 90,
      },
    ),
    CharcountTextareaField(
      {
        name: 'description',
        label: 'Description',
      },
      {
        max: 500,
        min: 450,
      },
    ),
    CharcountRichTextField(
      {
        name: 'content',
        label: 'Content',
      },
      {
        max: 2000,
        min: 1750,
      },
    ),
  ],
}
```

## Field Options

### CharcountTextField / CharcountTextareaField / CharcountRichTextField

The field functions take two parameters:

1. **Field configuration** - Standard Payload field properties (name, label, required, etc.)
2. **CharCount options** - Character counting configuration

| Option | Type     | Description             |
| ------ | -------- | ----------------------- |
| `max`  | `number` | Maximum character limit |
| `min`  | `number` | Minimum character limit |

### Translations

The plugin includes translations for 40+ languages.

## Requirements

- Payload CMS 3.37.0+
- Node.js 18.20.2+ or 20.9.0+
- TypeScript (recommended)

<<<<<<< Updated upstream
## License

MIT

## Support

If you have any questions or issues, please open an issue on GitHub.

## Roadmap

### v1.1.0 (Coming Soon)

- [ ] **Optional min/max** - Only one of min or max required, not both
- [ ] **Helper text** - Optional hint text below counter (like Payload SEO plugin)

### Future Ideas

- [ ] **Word counting** - Count words instead of characters
- [ ] **Custom validation messages** - Personalized texts

**Have a feature request?** [Open an issue](https://github.com/compatis/payload-charcount/issues) and let us know!

## Acknowledgments

Special thanks to the [Payload CMS](https://payloadcms.com) team for creating such an amazing headless CMS and for the inspiration and translations from their SEO plugin's character counting functionality.
=======

## Support

If you have any questions or issues, please open an issue on GitHub.

## Roadmap

### v1.1.0 (Coming Soon)

- [ ] **Optional min/max** - Only one of min or max required, not both
- [ ] **Hint text** - Optional hint text below counter (like Payload SEO plugin)

### Future Ideas

- [ ] **Word counting** - Count words instead of characters
- [ ] **Custom validation messages** - Personalized texts

**Have a feature request?** [Open an issue](https://github.com/compatis/payload-charcount/issues) and let us know!

## Acknowledgments

Special thanks to the [Payload CMS](https://payloadcms.com) team for creating such an amazing CMS and for the inspiration and translations from their SEO plugin's character counting functionality.
>>>>>>> Stashed changes
