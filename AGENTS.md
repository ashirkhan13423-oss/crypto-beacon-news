<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Publishing Checklist

Before committing a new article or editing an existing one, run:

```bash
npm run check-links
```

This script (`scripts/check-links.js`) scans every `.tsx` source file for
internal `<Link to="...">` paths and verifies each one matches a real route
file in `src/routes/`. It exits with code **1** and prints the offending
links if any are broken.

**Rule:** Do not ship a commit that fails `check-links`. If a Related Reading
link points to an article that doesn't exist yet, either:
- create the target article in the same commit, or
- remove the Related Reading link until the article is ready.

